let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'kgfs';
const config = require('../config/credentials.json')[STAGE];
const DvaraGold = require('../cliient/dvaragold');

async function test(){
    let client = await DvaraGold.Client(config);
    return await client.testSetup()
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
