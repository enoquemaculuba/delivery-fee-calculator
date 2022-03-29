export default function calculateDeliveryFee(cartValue:number, deliveryDistance:number, items:number, dateTime:Date):number{
    //check values just in case
    if([cartValue, deliveryDistance,cartValue,dateTime.getTime()].some(isNaN)){
        throw new TypeError('Parsing data failed')
    }
    if (cartValue >= 100) {
        return 0
    }
        const surcharge = Math.max(0, 10 - cartValue); //check that cart value is at least 10

        const deliveryFee = 2 + Math.max(0, Math.ceil(deliveryDistance / 500) - 2); //calculate delivery fee based on distance

        const itemSurcharge = Math.max(0, items - 4) * 0.5 //calculate surcharge for items

        let totalFee = surcharge + deliveryFee + itemSurcharge

        const hours = dateTime.getHours()
        //Multiply with 1.1 during the Friday rush (3 - 7 PM)
        if (dateTime.getDay() === 5 && hours >= 15 && (hours < 19 || (hours === 19 && dateTime.getMinutes() === 0))) {
            totalFee *= 1.1;
        }

        return parseFloat(Math.min(totalFee, 15).toFixed(2))

}