let STAGE = process.env.mygold_stage ? process.env.mygold_stage : "dev";
const config = require("../../../config/credentials.json")[STAGE];
const DvaraGold = require("../../../cliient/dvaragold");
const extCustomerId = "AAA111CST001";
const order = {
    jewellerySerialNumbers:[
        '175794cb-2310-4000-82a9-8b04fc1f2380',
    ]
};

async function test() {
  let client = await DvaraGold.Client(config);
  return await client.getJewelleryValue(extCustomerId, order);

}
test()
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    console.error(JSON.stringify(err));
  })
  .finally(() => {
    process.exit(0);
  });
