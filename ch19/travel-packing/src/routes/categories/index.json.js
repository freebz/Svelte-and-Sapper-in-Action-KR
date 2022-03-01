const send = require('@polka/send-type');
import {getCollection} from './_helpers';

export async function get(req, res) {
  try {
    const collection = await getCollection();
    const result = await collection.find().toArray();
    res.end(JSON.stringify(result));
  } catch (e) {
    console.error('categories/index.json.js get:', e);
    send(res, 500, {error: e});
  }
}

export async function post(req, res) {
  const category = req.body;
  try {
    const collection = await getCollection();
    const result = await collection.insertOne(category);
    res.end(JSON.stringify(category));
  } catch (e) {
    console.error('categories/index.json.js post:', e);
    send(res, 500, {error: e});
  }
}