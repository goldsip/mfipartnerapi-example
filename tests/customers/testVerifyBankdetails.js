let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'dev';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const data =
    [
        {
            "customerId": "iamconsentcustomer",
            "bankAccount": { "accountNumber": "     31232123     ", "ifsc": "HDFC0210002", "accountName": "    Amit     ", "bankName": "   HDFC   ", "branchName": "    Pune    " },
            // "upiAccount": { address: "AICS002@hdfcb" }
        },
        // {
        //     "customerId": "0edaaf040de9bc7b0323e9065e3c735e",
        //     "bankAccount": { "accountNumber": "EXT0APIUpdatedNumber", "ifsc": "AXIS0210002", "accountName": "EXT0", "bankName": "AXIS", "branchName": "Mumbai" },
        //     "upiAccount": { address: "EXT0@axisb" }
        // },
        // {
        //     "customerId": "EXT2",
        //     "bankAccount": { "accountNumber": "EXT2APIUpdatedNumber", "ifsc": "UTI0210002", "accountName": "EXT2", "bankName": "UTI", "branchName": "DELHI" },
        //     "upiAccount": { address: "EXT2@axisb" }
        // }
    ]

async function test() {
    let client = await DvaraGold.Client(config)
    let customers = await client.verifyBankDetails(data)
    return customers;
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

