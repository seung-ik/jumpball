// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

type Data = {
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const uri = process.env.NEXT_PUBLIC_MONGO_DB_URI as string;
  const client = new MongoClient(uri);
  const db = client.db('betting');

  await client.connect();
  if (req.method === 'GET') {
    try {
      const { gameId } = req.query;
      const result = await db.collection('game').findOne({ gameId });
      client.close();
      res.status(200).json({ data: result });
    } catch (err) {
      console.error(err);
    }
  }
}
