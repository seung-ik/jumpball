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
  } else if (req.method === 'POST') {
  } else if (req.method === 'PUT') {
    try {
      const { address, _id, harvestHash } = req.body;

      const gameInfo = await db.collection(address).findOneAndUpdate(
        { _id: new ObjectId(_id) },
        {
          $set: { isHarvested: true, harvestHash },
        },
      );

      client.close();
      res.status(200).json({ data: gameInfo });
    } catch (err) {
      console.error(err);
      res.status(400).json({ data: 'ooj' });
    }
  }
}
