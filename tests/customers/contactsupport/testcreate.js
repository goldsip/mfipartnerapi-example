let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../../../config/credentials.json')[STAGE];
const DvaraGold = require('../../../cliient/dvaragold');
const extCustomerId = 'AMITCS002'
const data = {
    "type": "profile",
    "comment": "unable to load profile getting server error",
}


async function test() {
    let client = await DvaraGold.Client(config);
    return await client.createContactSupport(extCustomerId, data)
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