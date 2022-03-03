const MongoClient = require('mongodb').MongoClient;

// 몽고 DB는 localhost와 127.0.0.1의 데이터베이스 인스턴스를 서로 다른 것이라고
// 간주합니다. 몽고 DB 셸에서는 127.0.0.1을 사용하므로 여기에서도 같은
// 인스턴스를 사용하겠습니다.
// /etc/hosts 파일 내용 문제일 수도 있지만, 해당 파일에서 127.0.0.1과 관련된
// 내용은 전부 주석 처리해도 동일한 동작을 보였습니다.

//const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';

// 더는 지원하지 않는 기능을 사용하는 것에 대한 경고 메시지를 피할 수 있는
// 권장 옵션입니다.
const options = {useNewUrlParser: true, useUnifiedTopology: true};

async function logCollection(coll) {
  let result = await coll.find().toArray();
  console.log(coll.collectionName, 'contains', result);
}

async function logCollections(db) {
  let items = await db.listCollections().toArray();
  console.log(
    'collections are',
    items.map(item => item.name)
  );
}

async function logDatabases(client) {
  const dbs = await client
    .db()
    .admin()
    .listDatabases();
  console.log(
    'databases are',
    dbs.databases.map(db => db.name)
  );
}

// "await" 키워드는 "async" 함수 내에서만 사용할 수 있습니다.
async function doIt() {
  let client;
  try {
    client = await MongoClient.connect(url, options);
    // 아직 "animals" 데이터베이스가 없는 것을 확인할 수 있습니다.
    await logDatabases(client);

    // "animals" 데이터베이스를 사용합니다.
    const db = client.db('animals');

    // "animals" 데이터베이스에 두 개의 컬렉션을 만듭니다.
    const dogs = await db.createCollection('dogs');
    const cats = await db.createCollection('cats');

    // 이제 "animals" 데이터베이스가 존재한다는 것을 알 수 있습니다.
    await logDatabases(client);

    // 컬렉션이 만들어졌는지 확인합니다.
    await logCollections(db);

    // "dogs" 컬렉션에 네 개의 도큐먼트를 만듭니다.
    await dogs.insertOne({breed: 'Whippet', name: 'Dasher'});
    await dogs.insertOne({breed: 'TWC', name: 'Maisey'});
    await dogs.insertOne({breed: 'NAID', name: 'Ramsay'});
    await dogs.insertOne({breed: 'GSP', name: 'Oscar'});

    // 생성한 네 개의 도큐먼트가 "dogs" 컬렉션에 있는지 확인합니다.
    const count = await dogs.countDocuments();
    console.log('dog count = ', count);

    // "dogs" 컬렉션의 도큐먼트들을 가져옵니다.
    await logCollection(dogs);

    // "dogs" 컬렉션에서 breed가 "Whippet" 인 모든 도큐먼트를 가져옵니다.
    result = await dogs.find({breed: 'Whippet'}).toArray();
    console.log('whippets are', result);

    // "dogs" 컬렉션에서 breed가 "Whippet" 인 모든 도큐먼트를 삭제합니다.
    console.log('deleting Whippets');
    await dogs.deleteMany({breed: 'Whippet'});

    // "dogs" 컬렉션에 breed가 "Whippet"인 도큐먼트가 존재하지 않는 것을 확인합니다.
    await logCollection(dogs);

    // breed가 "GSP"인 모든 도큐먼트의 name을 변경합니다.
    console.log('updating GSP name');
    await dogs.updateMany({breed: 'GSP'}, {$set: {name: 'Oscar Wilde'}});
    await logCollection(dogs);

    // "dogs" 컬렉션에서 특정 도큐먼트를 찾습니다.
    const dog = await dogs.findOne({name: 'Oscar Wilde'});

    // "dogs" 컬렉션에서 특정 도큐먼트의 name 값을 변경합니다.
    await dogs.updateOne({_id: dog._id}, {$set: {name: 'Oscar Wilde'}});
    await logCollection(dogs);

    // "dogs" 컬렉션을 삭제합니다.
    await dogs.drop();

    // "animals" 데이터베이스에 "dogs" 컬렉션이 없음을 확인할 수 있습니다.
    logCollections(db);

    // "animals" 데이터베이스를 삭제합니다.
    await db.dropDatabase();

    // "animals" 데이터베이스가 더는 존재하지 않음을 확인할 수 있습니다.
    await logDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    if (client) client.close();
  }
}

doIt();