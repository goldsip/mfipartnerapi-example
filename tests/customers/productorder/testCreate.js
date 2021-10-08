let STAGE = process.env.mygold_stage ? process.env.mygold_stage : "kgfs";
const config = require("../../../config/credentials.json")[STAGE];
const DvaraGold = require("../../../cliient/dvaragold");
const extCustomerId = "2105038865955008";
const bullion = {
    bullionShortName: "G22K",
    bullionName: "Gold",
    purity: { displayValue: "22Kt - (91.6%)", value: "916" },
    status: "available",
    isBaseBullion: false,
    id: "G3",
};

const products = ["883a86b0-0e33-11eb-a474-a3176ffc8b4e"];

const order = {
    "agent": { "extAgentId": "DV12AG", "name": { "first": "default", "last": "agent" } },
    "productItems": [],
    "paymentPlan": {
        "useBullionBalance": [{
            "bullion": {
                "id": "G3",
                "bullionName": "Gold",
                "purity": { "displayValue": "22Kt (91.6%)", "value": "916" }
            },
            "maxBullionWtGm": 12.748
        }]
    },
    "shipment": { "shippingAddress": { "houseNumber": "1", "streetName": "Baramati Phaltan raod", "area": "Khandaj", "cityOrVillage": "Baramati", "district": "Baramati", "pinCode": 413102, "state": "IN-MH", "landmark": "xyz", "country": "India" } },
    "extReferenceId": "vaibhavkailaslohakare"
}

async function getAvailableInventorytItem(client, productId) {
    try {
        let response = await client.getProductById(extCustomerId, productId)
        if (response && response.inventoryitems.length) {
            for (let inventory of response.inventoryitems) {
                if (inventory.chargesamountinr > 0 || inventory.taxamountinr > 0) {
                    return inventory
                }
            }
            return response.inventoryitems[0]
        } else {
            throw new Error('Inventory not available for product')
        }
    } catch (e) {
        throw e
    }
}

async function getProductItems(client) {
    try {
        let responses = []
        for (let productId of products) {
            let response = await getAvailableInventorytItem(client, productId)
            responses.push({
                productId: response.productid,
                serialNumber: response.inventoryserialnumber,
                bullionRateId: response.bullionrateid,
                totalAmountInr: response.totalwithtaxinr,
                chargesAmountInr: response.chargesamountinr,
                taxAmountInr: response.taxamountinr,
            })
        }
        return responses
    } catch (e) {
        throw e
    }

}

async function test() {
    let client = await DvaraGold.Client(config);
    order.productItems = await getProductItems(client)
    return await client.productOrderCreate(extCustomerId, order);

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