import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';

import themes from '../styles/theme.style';

const Route = createStackNavigator(
	{
		Products: Products,// { screen: Products },
		Checkout: Checkout, //{ screen: Checkout },
		Receipt: Receipt// { screen: Receipt }
	},
	{
		navigationOptions: {
			headerStyle: {
				backgroundColor: themes.BACKGROUND_COLOR,
				paddingHorizontal: 10,
			},
			headerTintColor: '#fff'
		}
	}
);

const AppContainer = createAppContainer(Route);

export default AppContainer;