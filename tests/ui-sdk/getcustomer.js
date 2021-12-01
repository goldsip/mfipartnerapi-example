let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'ui-sdk-dev-direct';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const extCustomerId = 'EXT0'
const queryParams = {
    api_key: config.api_key
}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.getcustomerForSDK(extCustomerId, queryParams)
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