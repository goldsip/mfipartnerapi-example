let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'dev';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');

var test = async function (client, callback) {
    const extCustomerId = "47054";
    const additionalParametrs = {}    
    let client = await DvaraGold.Client(config);
    return client.getPassbook(extCustomerId)
}

test()
.then(result=>{
    console.dir(result)
})
.catch(err=>{
    console.error(err)
})
.finally(()=>{
    process.exit(0);
})