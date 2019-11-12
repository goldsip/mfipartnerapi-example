let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'dev';
const config = require('../../../config/credentials.json')[STAGE];
const DvaraGold = require('../../../cliient/dvaragold');
const extCustomerId = "BMFIBR001CST022";
const bullion = {
    bullionShortName: 'G24K',
    bullionName: 'Gold',
    purity: { displayValue: '24Kt - (99.9%)', value: '999' },
    status: 'available',
    isBaseBullion: false,
    id: 'G3'
}

const order = {
    agent:{extAgentId:'EXTAGT007',name:{first:"Koshi",middle:"Venkateshwara",last:"Shaikh"}},
    bullion:bullion,
    sellType:'FixedWeight',
    weightInGm:1,
    payoutMode:'Bank'
}

async function test(){
    let client = await DvaraGold.Client(config);
    return await client.createInstntSellOrder(extCustomerId,order)
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