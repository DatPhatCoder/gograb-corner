
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccountPage from './screens/CreateAccountPage';
import LoginPage from './screens/LoginPage';
import OrderPage from './screens/OrderPage';
import OrderMenuPage from './screens/OrderMenuPage';
import CheckoutPage from './screens/CheckoutPage';
import EmptyOrdersPage from './screens/EmptyOrdersPage';
import SettingsPage from './screens/SettingsPage';
import {CartProvider} from './CartContext';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Order"
            component={OrderPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="OrderMenuPage"
            component={OrderMenuPage} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="CheckoutPage"
            component={CheckoutPage} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Storage"
            component={EmptyOrdersPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsPage}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

export default App;
