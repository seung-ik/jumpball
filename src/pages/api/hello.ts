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

  try {
    await client.connect();
    if (req.method === 'GET') {
      const { address } = req.query;
      const result = await db
        .collection(address as string)
        .find()
        .toArray();
      // const result = await db.collection("users").findOne({ name: "test" });
      client.close();
      res.status(200).json(result);
    } else if (req.method === 'POST') {
      const { address, gameDate, gameId, home, away, pick, value, bettingHash } = req.body;
      const result = await db.collection(address).insertOne({
        gameDate,
        gameId,
        home,
        away,
        pick,
        value,
        bettingHash,
        isValidated: false,
        winner: '',
        harvestValue: 0,
        isHarvested: false,
        harvestHash: '',
      });

      const savedGame = await db.collection('game').findOne({ gameId });

      if (!savedGame) {
        await db.collection('game').insertOne({
          gameId,
          homeSum: pick ? value : 0,
          awaySum: !pick ? value : 0,
        });
      } else {
        const newHomeSum = pick
          ? Number(savedGame.homeSum) + Number(value)
          : Number(savedGame.homeSum);
        const newAwaySum = !pick
          ? Number(savedGame.awaySum) + Number(value)
          : Number(savedGame.awaySum);
        await db
          .collection('game')
          .findOneAndUpdate({ gameId }, { $set: { homeSum: newHomeSum, awaySum: newAwaySum } });
      }
      client.close();
      res.status(200).json({ data: result });
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
  } catch (err) {
    console.error(err);
    res.status(400).json({ data: 'ooj' });
  }
}
