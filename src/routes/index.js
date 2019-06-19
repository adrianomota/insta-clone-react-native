import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import New from '../pages/New';
import Feeds from '../pages/Feeds';
import logo from '../assets/logo.jpg';

export default createAppContainer(
  createStackNavigator(
    {
      Feeds,
      New,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#000',
        headerTitle: <Image source={logo} />,
        headerBackTitle: null,
      },
      mode: 'modal',
    },
  ),
);
