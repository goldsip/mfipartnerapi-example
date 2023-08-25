let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'ui-sdk-dev-direct';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const extCustomerId = 'EXT0'
const orderId = '6f9013b0-404f-11ec-af4e-bf65c3dfc175'
const queryParams = {
    api_key: config.api_key,

}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.advanceOrderInvoice(extCustomerId, orderId, queryParams)
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