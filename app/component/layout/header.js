import React, { Component } from 'react';
import {
  Image
} from "react-native";
import {
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  View
} from "@ui-kitten/components";
import LinearGradient from 'react-native-linear-gradient';
import { Endpoint, Color } from '../../config';

import {
  LogoIcon,
  BackIcon
} from '../icon';

const CustomHeader = (props) => {

  const renderLeftMenu = () => (
    <TopNavigationAction icon={BackIcon} onPress={()=> { props.navigation.goBack(null); }}/>
  );

  const renderTitle = (props) => (
    <React.Fragment>
    <Image style={{width:25, height:24}}
      source={require('../../asset/logo-kemenag.png')}
    />
    <Text
    category='s2' style={{color:'#ffffff'}}>SiHokki</Text>
    </React.Fragment>
  );

  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 0.7, y: 0}}
    colors={[Color.First, Color.Second]}
    >

    <TopNavigation
      style={{
      backgroundColor:'transparent',
      elevation: 2
    }}
      title={renderTitle}
      alignment='center'
      //accessoryLeft={renderLeftMenu}
    />
    </LinearGradient>
  );
};

export default CustomHeader;