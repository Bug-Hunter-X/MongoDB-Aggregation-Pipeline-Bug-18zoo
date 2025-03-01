```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  { $match: { "field": "value" } },
  { $group: { _id: "$field", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]).toArray(function(err, results) {
  if(err) throw err;
  console.log(results);
});
```