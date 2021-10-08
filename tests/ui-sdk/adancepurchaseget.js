let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../../../config/credentials.json')[STAGE];
const DvaraGold = require('../../../cliient/dvaragold');
const extCustomerId = 'AMITCS002'
const queryParams = {
    // bullionName: 'Silver',
    // category: 'coin'
}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.advancepurchaseget(extCustomerId, productId)
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