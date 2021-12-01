let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'dev';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
var extCustomerId = 'iamconsentcustomer';

const updateData = {
    "bankAccount": { "accountNumber": "     31232125445     ", "ifsc": "HDFC0210002", "accountName": " Amit, vighnesh mai paper rakh rha hu ", "bankName": "   HDFC   ", "branchName": "    Pune    " },
    branchId: "EXT002311",
    address: {
        houseNumber: "3029", streetName: "Narayan Ali", district: "Raigad", pinCode: 402202, state: "IN-MH", country: "India", stdCode: 0470
    },
    upiAccount: { address: '222@okaxis' }
}
async function test() {
    let client = await DvaraGold.Client(config);

    let getData = await client.getCustomer(extCustomerId);
    if (getData) {
        getData.bankAccount = updateData.bankAccount;
        getData.address = updateData.address,
            getData.upiAccount = updateData.upiAccount
        return await client.updateCustomer(extCustomerId, getData);
    } else {
        return 'enable to get record'
    }


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