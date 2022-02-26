// 예제 17-4 src/routes/dogs/[id].json.js 파일의 DELETE 및 PUT 서버 라우트 코드

const {ObjectId} = require('mongodb');
import {getCollection} from './_helpers';

export async function del(req, res) {
  const {id} = req.params;
  try {
    const collection = await getCollection();
    const result = await collection.deleteOne({_id: ObjectId(id)});
    if (result.deletedCount === 0) {
      res.status(404).send(`no dog with id ${id} found`);
    } else {
      res.end();
    }
  } catch (e) {
    console.error('[id].json.js del:', e);
    res.status(500).json({error: e.message});
  }
}

export async function put(req, res) {
  const {id} = req.params;
  const replacement = req.body;

  delete replacement._id;

  try {
    const collection = await getCollection();
    const result = await collection.replaceOne(
      {_id: ObjectId(id)},
      replacement
    );
    const obj = replacement;
    obj._id = ObjectId(id);
    res.end(JSON.stringify(obj));
  } catch (e) {
    console.error('[id].json.js put:', e);
    res.status(500).json({error: e.message});
  }
}