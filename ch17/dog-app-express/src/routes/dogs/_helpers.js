// 예제 17-2 src/routes/dogs/_helpers.js 파일에 정의한 몽고 DB 도우미 함수

const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
let collection;

export async function getCollection() {
  if (!collection) {
    const client = await MongoClient.connect(url, options);
    const db = client.db('animals');
    collection = await db.collection('dogs');
  }

  return collection;
}