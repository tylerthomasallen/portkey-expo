import { UBER_SERVER_TOKEN } from '../constants/keys';

export const uberCost = async (tripData) => {
    const { origin, destination } = tripData;
    try {
        let costRes = await fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${origin.lat}&start_longitude=${origin.lng}&end_latitude=${destination.lat}&end_longitude=${destination.lng}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${UBER_SERVER_TOKEN}`,
                'Accept-Language': 'en_US'
            }
        });
        let costResJSON = await costRes.json();
        let uberX = costResJSON.prices.filter(price => price.display_name === 'UberX');
        let average = `${(uberX[0].low_estimate + uberX[0].high_estimate) / 2}`
        
        if (average.length >= 2) {
            return `$${average[0]}${average[1]}.00`
        } else {
            return `$${average[0]}.00`;
        }
    } catch (error) {
        console.log(error)
    }

}


convertPriceFromCents = (price) => {
    const dollars = parseInt(price / 100);
    let cents = price % 100;

    if (cents < 10) {
        cents = `0${cents}`
    }


    return `$${dollars}.${cents}`;
}