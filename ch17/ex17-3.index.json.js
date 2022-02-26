// 예제 17-3 src/routes/dogs/index.json.js 파일에 정의한 GET 및 POST 라우트

import {getCollection} from "./_helpers";

export async function get(req, res) {
  try {
    const collection = await getCollection();
    const result = await collection.find().toArray();
    res.end(JSON.stringify(result));
  } catch (e) {
    console.error('index.json.js get:', e);
    res.status(500).json({error: e.message});
  }
}

export async function post(req, res) {
  const dog = req.body;
  try {
    const collection = await getCollection();
    const result = await collection.insertOne(dog);
    const [obj] = result.ops;
    res.end(JSON.stringify(obj));
  } catch (e) {
    console.error('index.json.js post:', e);
    res.status(500).json({error: e.message});
  }
}