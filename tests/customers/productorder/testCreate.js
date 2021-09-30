let STAGE = process.env.mygold_stage ? process.env.mygold_stage : "dev";
const config = require("../../../config/credentials.json")[STAGE];
const DvaraGold = require("../../../cliient/dvaragold");
const extCustomerId = "BMFIBR001CST002";
const bullion = {
    bullionShortName: "G22K",
    bullionName: "Gold",
    purity: { displayValue: "22Kt - (91.6%)", value: "916" },
    status: "available",
    isBaseBullion: false,
    id: "G3",
};

const order = {
    "agent": {
        "name": {
            "first": "default",
            "middle": "",
            "last": "default"
        },
        "extAgentId": "DEFAULT_AGENT"
    },
    "productItems": [{
        productId: '376d8750-0eb0-11eb-aa60-1ba43d87674d',
        serialNumber: '17540b28-f9b0-4000-875b-d3280d833780'
    }],
    "paymentPlan": {
        "useBullionBalance": [{
            "bullion": bullion,
            "maxBullionWtGm": 1
        }],
        "alternatePaymentMode": "partnercollect"
    },
    "productPaymentDetails": [{
        "paymentTotalValueInr": 0,
        "paymentDate": new Date().toISOString(),
        "txnReference": "string",
        "txnDetails": {
            "neft_reference": "OC45rt456"
        },
        "paymentInstrumentType": "NEFT"
    }],
    "shipment": {
        "shippingAddress": {
            "houseNumber": "string",
            "streetName": "string",
            "area": "string",
            "cityOrVillage": "string",
            "postOffice": "string",
            "district": "string",
            "pinCode": 0,
            "state": "IN-AN",
            "stdCode": 0,
            "landmark": "string",
            "country": "string"
        },
    },
    "extReferenceId": "string",
    "orderdetail": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
    }
};

async function getRate(client) {
    let rates = await client.bookBullionRate(extCustomerId, 'Gold', 'G3', 'jewellery')
    if (rates && rates.length) {
        return rates[0]
    } else {
        throw 'enable to get rates'
    }
}

async function test() {
    let client = await DvaraGold.Client(config);
    const bullionRate = await getRate(client)
    for (let item of order.productItems) {
        item.bullionRateId = bullionRate.id
    }

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