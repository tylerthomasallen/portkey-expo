const base64 = require('base-64');

export const lyftAuthToken = async () => {
    try {
        let tokenRes = await fetch('https://api.lyft.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Basic " + base64.encode("aERGoL7SWDbx:GjX02y9Rrp3q79obFfhHUW_Y4zZCiHe3")
            },
            body: JSON.stringify({
                grant_type: "client_credentials",
                scope: 'public',
            })
        });
        let tokenResJSON = await tokenRes.json();
        let token = tokenResJSON.access_token;
        return token;
    } catch (error) {
        console.log(error)
    }

}

export const lyftCost = async (tripData) => {
    const { origin, destination, authToken } = tripData;
    debugger;
    try {
        let costResponse = await fetch(
            `https://api.lyft.com/v1/cost?start_lat=${origin.lat}&start_lng=${origin.lng}&end_lat=${destination.lat}&end_lng=${destination.lng}`, {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${authToken}`
                }
            });
        let costJSON = await costResponse.json();
        const estimatedPriceCentsMin = costJSON.cost_estimates[1].estimated_cost_cents_min;
        const estimatedPriceCentsMax = costJSON.cost_estimates[1].estimated_cost_cents_max;
        const average = ((estimatedPriceCentsMin + estimatedPriceCentsMax) / 2)

        const formattedAverage = convertPriceFromCents(average);
        return formattedAverage;
    } catch (error) {
        console.log(error)
    }
}

export const lyftNearbyRides = async (accessToken, location) => {
    try {
        let rideResponse = await fetch(
            `https://api.lyft.com/v1/drivers?lat=${location.latitude}&lng=${location.longitude}`, {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${accessToken}`
                }
            });
        let driverJSON = await rideResponse.json();
        return driverJSON;
    } catch (error) {
        console.log(error)
    }
}

// helpers to format response of lyftCost function call

convertPriceFromCents = (price) => {
    const dollars = parseInt(price / 100);
    let cents = price % 100;

    if (cents < 10) {
        cents = `0${cents}`
    }


    return `$${dollars}.${cents}`;
}