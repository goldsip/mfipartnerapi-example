const shortid = require('shortid')
let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');

async function test() {
    let client = await DvaraGold.Client(config);

    var _id = shortid.generate();
    const _customers = []
    for (var i = 0; i < 1; i++) {
        var _id = shortid.generate();
        _customers.push(
            {
                name: {
                    first: `John Walk`,
                    middle: 'Trivia',
                    last: 'Somtune'
                },
                extCustomerId: `JohntnpnA3EZEk1670590590229`,
                phone: { mobile: `360036367${i}` },
                idProof: [],
                localLanguage: "Tamil",
                branchId: 'DVMFIBR001',
                kycReference: [{ refType: 'ckyc', refId: "123" }]
            }
        )
    }

    return await client.saveCustomers(_customers);
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