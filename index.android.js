/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';

import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDFjGRYPlL4omQ5gs085clhyXRSY2D-lQ",
    authDomain: "todoproject-8f566.firebaseapp.com",
    databaseURL: "https://todoproject-8f566.firebaseio.com",
    storageBucket: "todoproject-8f566.appspot.com",
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

     class ToDoApp extends Component {
         render() {
             return (
                 <Navigator
                     initialRoute={{component: Login}}
                     configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}




                     renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebaseApp});
          }
      }}/>

             );

         }


     }


AppRegistry.registerComponent('ToDoApp', () => ToDoApp);
