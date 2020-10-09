import React, { Component } from 'react';
import {
  Image,
  View
} from "react-native";
import {
  Layout,
  
  Text
} from "@ui-kitten/components";

const CustomFooter = (props) => {
  return (
    <View style={{
      //position: 'absolute',
      //bottom:0,
      //flex:1,
      marginVertical:20,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center'
      }}>

      <Image style={{
      width:30,
      height:29,
      marginBottom:5
      }}
      source={require('../../asset/logo-kemenag.png')}
      />

      <Text 
      style={{
      fontSize:12,
      color:'#f1f1f1'
      }} 
      category='s1'>Di kelola oleh Kementrian Agama
      </Text>

      <Text 
      style={{
      fontSize:12,
      color:'#f1f1f1'
      }}
      category='s1'>
      Kab. Ogan Komering Ilir
      </Text>
    </View>
  );
};

export default CustomFooter;