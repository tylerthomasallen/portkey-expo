import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

// const deltas = {
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421
// }

// const getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//         this.setState({ errorMessage: 'Location mission access denied' })
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = location.coords;
//     const region = {
//         latitude,
//         longitude,
//         ...deltas
//     };

//     return region
// }

// const preloadedState = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//         this.setState({ errorMessage: 'Location mission access denied' })
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = location.coords;
//     const region = {
//         latitude,
//         longitude,
//         ...deltas
//     };

//     return (
//         {
//         currentLocation: region
//      }
//     )
// };


// const store = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//         this.setState({ errorMessage: 'Location mission access denied' })
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = location.coords;
//     const region = {
//         latitude,
//         longitude,
//         ...deltas
//     };

//     const preloadedState = {currentLocation: region}

//     return createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunk)
//     );

// }

const preloadedState = {}

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
)

export default store;