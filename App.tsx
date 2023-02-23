import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from './types';
import AddContactsPage from './components/AddContactsPage'
import HomeScreen from './components/HomeScreen';
import ProfilePage from './components/ProfilePage';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { contactCreationReducer } from './reducers/contact-reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/contact-saga';


const Stack = createNativeStackNavigator<RootStackParamList>();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(contactCreationReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Add' component={AddContactsPage}/>
        <Stack.Screen name='Profile' component={ProfilePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
