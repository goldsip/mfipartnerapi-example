let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../../../config/credentials.json')[STAGE];
const DvaraGold = require('../../../cliient/dvaragold');
const extCustomerId = 'AMITCS002'
const queryParams = {
    // bullionName: 'Silver',
    // category: 'coin'
    // maxredeemableweight: 10

}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.getProductCatalogue(extCustomerId, queryParams)
}
test()
    .then(result => {
        console.log(JSON.stringify(result))
    })
    .catch(err => {
        console.error(JSON.stringify(err))
    })
    .finally(() => {
        process.exit(0);
    })