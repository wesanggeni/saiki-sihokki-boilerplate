import React, { Component } from 'react';
import { StyleSheet, Image  } from 'react-native';
import { Icon, Button, Layout, Text} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';

import {
  IconSignIn,
  IconSignUp,
} from './../component/icon';

import CustomFooter from './../component/layout/footer';
import { Endpoint, Color } from './../config';

const SplashScreen = (props) => (
  <LinearGradient
  start={{x: 0, y: 0.5}}
  end={{x: 0, y: 0}}
  colors={[Color.First, Color.Second]}
  style={styles.container}>

    <Image style={styles.logo}
      source={require('./../asset/logo.png')}
    />

    <Text 
    style={styles.text} 
    category='s1'>Selamat Datang di 
    <Text style={styles.textLogo}> SiHokki</Text>
    </Text>

    <Text 
    style={[styles.text, styles.marginBottom]} 
    category='s1'>Sistem Haji Online Kemenag Kab.OKI
    </Text>

    <Button 
    style={styles.button} 
    size='medium' status='success' 
    accessoryLeft={IconSignIn} 
    onPress={()=> { props.navigation.navigate('Login'); }}>
    Masuk Akun
    </Button>

    <Button 
    style={styles.button} 
    size='medium' status='success' 
    appearance='outline' 
    accessoryLeft={IconSignUp} 
    onPress={()=> { props.navigation.navigate('Register'); }}>
    Daftar Akun
    </Button>

    <CustomFooter/>

  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width:180,
    height:160,
    marginBottom:10,
    marginTop:10
  },
  marginBottom: {
    marginBottom:10
  },
  text: {
    marginBottom: 0,
    color: '#f1f1f1'
  },
  textLogo: {
    color: '#ffff',
    fontWeight:'bold'
  },
  button: {
    marginTop: 10,
    paddingHorizontal:80
  },
});

export default SplashScreen;