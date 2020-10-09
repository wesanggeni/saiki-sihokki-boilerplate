import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Icon, Button, Layout, Text, Avatar, Card } from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

import {
  IconSignIn,
  IconSignUp,
  IconNext,
  IconBack,
} from '../../../component/icon';

import CustomHeader from '../../../component/layout/header';
import CustomFooter from '../../../component/layout/footer';
import { Endpoint, Color } from '../../../config';

const SplashScreen = (props) => {

  const [modalLogout, setModalLogout] = React.useState(false);

  React.useEffect(() => {
    //console.log(props.navigation);
  });

  const onAction = (): void => {
    setModalLogout(false);
    props.navigation.navigate('Logout');
  }

  const renderItemHeader = (): React.ReactElement => (
    <ImageBackground
      style={styles.postHeader}
      source={require('../../../asset/icon/profile.png')}
    />
  );

  return (
  <ScrollView>
  <LinearGradient
  start={{x: 0, y: 0.5}}
  end={{x: 0, y: 0}}
  colors={[Color.First, Color.Second]}
  style={styles.containerWrap}>
  
  <CustomHeader/>

  <View style={styles.container}>

    <View style={styles.menuWrap}>
      <View style={styles.menuContainer}>
        <View>
          <TouchableOpacity style={styles.menuItem} key={1} onPress={() => props.navigation.navigate('AHistoryPendaftaran')}>
            <View style={{flexDirection: 'column', alignItems:'center'}}>
            <Image source={require('../../../asset/icon/menu-informasi.png')} style={styles.menuIcon} />
            
            <Text style={styles.menuText}>History Pendaftar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.menuItem} key={2} onPress={() => props.navigation.navigate('AHistoryPembatalan')}>
            <Image source={require('../../../asset/icon/menu-informasi.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>History Pembatalan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <CustomFooter/>
    </View>
  </LinearGradient>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuWrap: {
    //flex: 1,
    //marginBottom:100,
    //justifyContent: 'center',
    //alignItems: 'center',
    //flex:1,
    width:DeviceWidth,
    minHeight:200,
    marginTop: 15,
    marginBottom: 150,
    //marginHorizontal: 5,
    //backgroundColor: "#ffffff"
  },
  menuContainer: {
    flexDirection: 'row'
  },
  menuItem: {
    width: DeviceWidth*0.27, 
    height: DeviceWidth*0.3,
    marginVertical: 7,
    marginHorizontal:10,
    //backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    maxWidth:47,
    maxHeight:45,
  },
  menuText: {
    fontSize:14,
    color:'#ffffff',
    marginTop:2,
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
    textAlign:'center',
    alignSelf:'center'
  },

  //---

  containerWrap: {
    flex: 1,
    minHeight:DeviceHeight-24,
    //backgroundColor:'#ffffff'
  },
  container: {
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

  imageBg: {
    //flex: 1,
    marginTop: 20,
    width: 300,
    minHeight: 99,
    //resizeMode: "cover",
    justifyContent: "center"
  },
  postTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold"
  },
  postText: {
    color: "#f1f1f1",
    fontSize: 14,
    marginTop:-3,
    marginBottom:-3,
  },
  postTextW: {
    color: "#ffffff",
    fontSize: 14,
  },
  post: {
    marginHorizontal: 10,
    marginTop:20
  },
  postHeader: {
    height: 220,
  },
  postBody: {
    flexDirection: 'row',
    marginHorizontal: 0,
  },
  postAuthorContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  iconButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },

});

export default SplashScreen;