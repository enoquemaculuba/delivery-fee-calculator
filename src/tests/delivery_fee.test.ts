import calculateDeliveryFee from "../util/Calculator";

interface Data{
    cartValue:number,
    deliveryDistance:number,
    items:number,
    dateTime:Date
}

test("Fee should be correct", async () => {
    const testData:Data = {
        cartValue:10,
        deliveryDistance:100,
        items:1,
        dateTime: new Date('2022-01-01')
    }
    const fee = calculateDeliveryFee(testData.cartValue, testData.deliveryDistance,testData.items,testData.dateTime)
    console.log('Fee:', fee)
    expect(fee).toBe(2)
});

test("Fee should be correct 2", async () => {
    const testData:Data = {
        cartValue:100,
        deliveryDistance:100,
        items:1,
        dateTime: new Date('2022-01-01')
    }
    const fee = calculateDeliveryFee(testData.cartValue, testData.deliveryDistance,testData.items,testData.dateTime)
    console.log('Fee:', fee)
    expect(fee).toBe(0)
});

test("Fee should be correct 3", async () => {
    const testData:Data = {
        cartValue:NaN,
        deliveryDistance:NaN,
        items:NaN,
        dateTime: new Date('2022-01-01')
    }
    const t = () => {
        calculateDeliveryFee(testData.cartValue, testData.deliveryDistance,testData.items,testData.dateTime)
    };
    expect(t).toThrowError(TypeError)
});

test("Fee should be correct 4", async () => {
    const testData:Data = {
        cartValue:1,
        deliveryDistance:1,
        items:1,
        dateTime: new Date('a')
    }
    const t = () => {
        calculateDeliveryFee(testData.cartValue, testData.deliveryDistance,testData.items,testData.dateTime)
    };
    expect(t).toThrowError(TypeError)
});