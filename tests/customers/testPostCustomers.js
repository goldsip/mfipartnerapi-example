const shortid = require('shortid')
let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'nstore';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const uuid = require('uuid');

async function test() {
    let client = await DvaraGold.Client(config);

    var _id = shortid.generate();
    const _customers = []
    for (var i = 0; i < 1; i++) {
        var _id = shortid.generate();
        _customers.push(
            {
                name: {
                    fullName:"John wick"
                },
                extCustomerId: '9398393292899', // unique customerId in your system
                phone: { mobile: `86003636711` },
                localLanguage: "en",
                branchId: 'bba71e61-cabd-42a6-afe9-34c5ba1e8473', // extBranchId 
                agentId: '7901cb32-7ea5-4c07-ad40-dafe2266462f'  //extAgentId of a branch

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