import { createStackNavigator } from 'react-navigation';
import HomeScreen from './home'

const Index = createStackNavigator({
    Home: { screen: HomeScreen }
});

export default Index;