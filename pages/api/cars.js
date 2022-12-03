import clientPromise from "/lib/mongodb";

export default async function handler(req, res){
   try {
       const client = await clientPromise;
       const db = client.db("cars");

       const cars = await db
           .collection("cars")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();
console.log(cars);
       res.json(cars);

   } catch (e) {
       console.error(e);
   }
};