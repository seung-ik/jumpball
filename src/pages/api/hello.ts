// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

type Data = {
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const uri = process.env.NEXT_PUBLIC_MONGO_DB_URI as string;
  const client = new MongoClient(uri);
  const db = client.db('betting');

  await client.connect();
  if (req.method === 'GET') {
    const { address } = req.query;
    const result = await db
      .collection(address as string)
      .find()
      .toArray();

    client.close();
    res.status(200).json(result);
  } else if (req.method === 'POST') {
    try {
      const { address, gameDate, gameId, home, away, pick, value, bettingHash } = req.body;

      const savedBetInfo = await db.collection(address).findOne({ gameId, pick });
      if (!savedBetInfo) {
        await db.collection(address).insertOne({
          gameDate,
          gameId,
          home,
          away,
          pick,
          value: Number(value),
          bettingHash: [bettingHash],
          isValidated: false,
          winner: '',
          harvestValue: 0,
          isHarvested: false,
          harvestHash: '',
        });
      } else {
        await db.collection(address).updateOne(
          { gameId, pick },
          {
            $inc: {
              value: Number(value),
            },
            $push: {
              bettingHash: bettingHash,
            },
          },
        );
      }

      const savedGame = await db.collection('game').findOne({ gameId });
      if (!savedGame) {
        await db.collection('game').insertOne({
          gameId,
          homeSum: pick ? Number(value) : 0,
          awaySum: !pick ? Number(value) : 0,
        });
      } else if (savedGame && pick) {
        await db.collection('game').updateOne({ gameId }, { $inc: { homeSum: Number(value) } });
      } else if (savedGame && !pick) {
        await db.collection('game').updateOne({ gameId }, { $inc: { awaySum: Number(value) } });
      }

      client.close();
      res.status(200).json({ data: 'success' });
    } catch (err) {
      console.error(err);
      res.status(400).json({ data: 'fail' });
    }
  } else if (req.method === 'PUT') {
    const { address, _id, isValidated, winner, harvestValue } = req.body;

    await db.collection(address).findOneAndUpdate(
      { _id: new ObjectId(_id) },
      {
        $set: { isValidated, winner, harvestValue },
      },
    );

    client.close();
    res.status(200).json({ data: '123123' });
  }
}
