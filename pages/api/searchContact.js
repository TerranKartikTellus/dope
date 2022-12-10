import clientPromise from "/lib/mongodb";

export default async function handler(req, res){
  //  try {
       const client = await clientPromise;
       const db = client.db("contact");
       //  var dateFrom = new Date(req.body.from);
       //  var dateTo = new Date(req.body.to);
       var from = new Date(req.body.from);
       var to = new Date(req.body.to);
       console.log('Req from:' ,req.body.from);
       console.log('Req to:' ,to);
       

      //  console.log('dateee',dateFrom);

        const contact = await db
           .collection("contact")
           .find({
            'createdat': { 
              $gte: from,
              $lt: to
            }
           })
          //  .sort({ metacritic: -1 })
          //  .limit(10)
           .toArray();
console.log('server response',contact);
       res.json(contact);

  //  } catch (e) {
  //      console.error('errors: ',e);
  //  }
};