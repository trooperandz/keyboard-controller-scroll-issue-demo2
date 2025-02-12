import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAwareScrollViewDemoScreen} from './KeyboardAwareScrollViewDemoScreen';
import {KeyboardControllerDemoScreen} from './KeyboardControllerDemoScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {KeyboardProvider} from 'react-native-keyboard-controller';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <KeyboardProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="KeyboardControllerDemoScreen"
            component={KeyboardControllerDemoScreen}
            options={{title: 'Keyboard Controller Demo'}}
          />
          <Stack.Screen
            name="KeyboardAwareScrollViewDemoScreen"
            component={KeyboardAwareScrollViewDemoScreen}
            options={{title: 'Keyboard Aware Scrollview Demo'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardProvider>
  );
};
