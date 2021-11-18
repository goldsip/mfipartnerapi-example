let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'ui-sdk-dev-direct';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const extCustomerId = 'EXT0'
const productId = '083954a0-0eb0-11eb-aa60-1ba43d87674d'
const headers = {
    headers: {
        api_key: config.api_key,
    }
}
const queryParams = {


}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.createadvanceorder(extCustomerId, productId, queryParams, headers)
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