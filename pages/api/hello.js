import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Spak"); // Replace with your database name

    const data = await db.collection("user").find({}).toArray(); // Replace with your collection name
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
