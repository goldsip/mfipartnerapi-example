let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../../../config/credentials.json')[STAGE];
const DvaraGold = require('../../../cliient/dvaragold');
const extCustomerId = 'AMITCS002'
const prouctId = '03c78ce0-6476-11eb-a3ac-b533f1a95933';


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.getProductById(extCustomerId, prouctId)
}
test()
    .then(result => {
        console.dir(result)
    })
    .catch(err => {
        console.error(JSON.stringify(err))
    })
    .finally(() => {
        process.exit(0);
    })