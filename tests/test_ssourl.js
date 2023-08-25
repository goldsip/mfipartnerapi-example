let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'nstore';
const config = require('../config/credentials.json')[STAGE];
const DvaraGold = require('../cliient/dvaragold');

const data = {
    id: '4959e821-f955-4436-b673-a6acd6ad0bfe',
    role: 'customer'
}

async function test() {
    let client = await DvaraGold.Client(config);
    return await client.ssoUrl(data)
}
test()
    .then(result => {
        console.dir(result)
    })
    .catch(err => {
        console.error(err)
    })
    .finally(() => {
        process.exit(0);
    })
