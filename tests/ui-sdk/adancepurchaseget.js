let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'ui-sdk-dev-direct';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const extCustomerId = 'EXT0'
const productId = '6d155500-b86e-11eb-a716-41c9c96a4181'
const queryParams = {
    api_key: config.api_key,

}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.advancepurchaseget(extCustomerId, productId, queryParams)
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