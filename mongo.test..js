// @ts-check
const { MongoClient, ServerApiVersion } = require('mongodb');
const { userInfo } = require('os');
const uri = 'mongodb+srv://areum:ahdtlf!237@cluster0.uf6iqgu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });

client.connect((err, db) => {
    const member = client.db('kdt4').collection('member');
    member.deleteMany({}, (err) => {
        member.insertMany([
            {
                id: 'tetz',
                name: '이효석',
                isMarried: false,
                age: 38,
                },
                {
                id: 'eric',
                name: '김성재',
                isMarried: true,
                age: 38,
                },
                {
                id: 'ailee',
                name: '이재연',
                isMarried: false,
                age: 35,
                },
                {
                id: 'alex',
                name: '하승호',
                isMarried: false,
                age: 34,
                },
                {
                id: 'uncle',
                name: '박동희',
                isMarried: true,
                age: 38,
                },
                {
                    id: 'ted',
                    name: '방성민',
                    isMarried: false,
                    age: 38,
                    },
                ],
    (err, result) => {
    // if (result.acknowledged) {
    // const findData = members.find({});
    // findData.toArray((err, data) => {
    // console.log(data);
    });
    }
    )});
// });
// });
