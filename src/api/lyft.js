const base64 = require('base-64');

export const lyftAuthToken = async () => {
    debugger;
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

export const lyftCost = async (accessToken, sampleTrip) => {
    try {
        let costResponse = await fetch(
            `https://api.lyft.com/v1/cost?start_lat=${sampleTrip.startLat}&start_lng=${sampleTrip.startLng}&end_lat=${sampleTrip.endLat}&end_lng=${sampleTrip.endLng}`, {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${accessToken}`
                }
            });
        let costJSON = await costResponse.json();
        return costJSON;
    } catch (error) {
        console.log(error)
    }
}

export const lyftNearbyRides = async (accessToken, sampleTrip) => {
    try {
        let rideResponse = await fetch(
            `https://api.lyft.com/v1/drivers?lat=${sampleTrip.startLat}&lng=${sampleTrip.startLng}`, {
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