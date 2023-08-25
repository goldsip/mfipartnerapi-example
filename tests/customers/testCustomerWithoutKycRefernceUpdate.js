let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
var extCustomerId = 'JohntnpnA3EZEk1670590590229';

const updateData = {
    name: {
        first: `John Snow`,
        middle: 'Trivia',
        last: 'Somtune'
    },
    extCustomerId: `JohntnpnA3EZEk1670590590229`,
    phone: { mobile: `3600363671` },
    idProof: [],
    localLanguage: "Tamil",
    branchId: 'DVMFIBR001',
    kycReference: [{ refType: 'ckyc', refId: "123" }]
}
async function test() {
    let client = await DvaraGold.Client(config);
    return await client.updateCustomer(extCustomerId, updateData);
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