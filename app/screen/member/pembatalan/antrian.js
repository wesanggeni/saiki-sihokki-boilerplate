import React, { Component, useEffect } from 'react';
//import { connect } from 'react-redux';
//import axios from 'axios';
import {
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  View,
  ScrollView,
  TouchableOpacity,
  //SafeAreaView,
  //ListRenderItemInfo,
  //Modal,
  TouchableHighlight,
} from 'react-native';
import {
  Icon,
  Button,
  Layout,
  Text,
  //Avatar,
  TopNavigationAction,
  TopNavigation,
  //Card,
  //CardElement,
  //CardProps,
  //List,
  Input,
  Divider
} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
//import { setMember } from '../../../redux/actions/authActions';
import Modal from 'react-native-modal';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

import {
  //IconSignIn,
  //IconSignUp,
  BackIcon,
  IconStatus,
  IconCorrect,
  IconSave,
  IconMap,
  IconNext,
  //IconWrong,
  //IconLogout,
} from '../../../component/icon';

import CustomFooter from '../../../component/layout/footer';
import { Endpoint, Color } from '../../../config';

export const Screen = (props) => {
  const [mounted, setMounted] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);

  /*
  useEffect(() => {
    if (mounted == true) {

      setMounted(false);
    }
  });
  */

  /*
  const onSubmit = (): void => {
    axios.post(Endpoint.Main+'api/login', {
      no_hp: phone,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
    })
    .catch(error => {
    });
  }
  */

  const onAction = (): void => {
    props.navigation.navigate('Member');
  }

  const onProcess = (): void => {
    props.navigation.navigate('MStatus');
  }

  //---

  const renderLeftMenu = () => (
    <TopNavigationAction icon={BackIcon} onPress={()=> { props.navigation.goBack(null) }}/>
  );

  const renderTitle = (props) => (
    <React.Fragment>
    <Image style={{width:25, height:24}}
      source={require('../../../asset/logo-kemenag.png')}
    />
    <Text
    category='s2' style={{color:'#ffffff'}}>SiHokki</Text>
    </React.Fragment>
  );

  const renderItemHeader = (): React.ReactElement => (
    <ImageBackground
      style={styles.postHeader}
      source={require('../../../asset/icon/profile.png')}
    />
  );
  
  //---

  return (
  
    <LinearGradient
    start={{x: 0, y: 0.5}}
    end={{x: 0, y: 0}}
    colors={[Color.First, Color.Second]}
    style={styles.containerWrap}>
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
        accessoryLeft={renderLeftMenu}
      />
      </LinearGradient>
      <View style={styles.container}>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:10,
            padding:10,
            backgroundColor:'#ffffff', 
            marginTop:20, 
            marginBottom:15, 
            width:DeviceWidth-40,
            height:320}}>
            <Text style={{color:'green', fontSize:14}}>
               Nomor Antrian Anda
            </Text>
            <Text style={{color:'green', fontSize:42, fontWeight:'bold'}}>
               P001
            </Text>
            <Text style={{color:'green', fontSize:14}}>
               Nama Lengkap
            </Text>
            <Text style={{color:'green', fontSize:14}}>
               0812345678
            </Text>
            <Text style={{color:'green', fontSize:14, borderBottomColor:'#cccccc', borderBottomWidth:1, paddingBottom:10, marginBottom:10}}>
               Kamis, 01 Oktober 2020
            </Text>
            <Text style={{color:'green', fontSize:14}}>
               Dilayani oleh :
            </Text>
            <Text style={{color:'green', fontSize:14}}>
               Nama Petugas, S.Ag
            </Text>
          </View>

          <Layout style={styles.wrapButton} level='1'>
            <Button
            accessoryLeft={IconSave}
            //accessoryRight={IconMap}
            //appearance='ghost'
            style={styles.formButtonLeft} 
            size='medium'
            status='success' 
            onPress={()=> { onAction() }}>
            Simpan
            </Button>

            <Button
            accessoryLeft={IconStatus}
            //accessoryRight={IconMap}
            //appearance='outline'
            style={styles.formButtonRight} 
            size='medium'
            status='primary' 
            onPress={()=> { onProcess() }}>
            Cek Status
            </Button>
          </Layout>

      <CustomFooter/>
      </View>
    </LinearGradient>
  
  );
};

const styles = StyleSheet.create({


  //---

  containerWrap: {
    flex: 1,
    minHeight:DeviceHeight-24,
    backgroundColor:'#ffffff'
  },
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    width:DeviceWidth-40,
    marginHorizontal:20
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
    marginVertical: 5,
    width:250
  },
  //---
  formContainer: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 50,
    //paddingHorizontal: 20,
    backgroundColor: 'transparent',
    //borderTopLeftRadius:30,
    //borderTopRightRadius:30,
  },
  formInput: {
    marginVertical: 5,
  },
  formButtonLeft: {
    marginVertical: 5,
    width:DeviceWidth / 2 - 30
  },
  formButtonRight: {
    marginLeft:15,
    marginVertical: 5,
    width:DeviceWidth / 2 - 30
  },
  formText: {
    color: '#ffffff',
    fontSize:14,
    marginVertical:10
  },
  wrapButton: {
    marginTop:5,
    marginBottom:20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
});

/*
const mapStateToProps = (state) => {
  return {
    dataMember: state.authReducer.dataMember,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setMember:(payload) => dispatch(setMember(payload)),
   };
};
*/

export default Screen;
//export default connect(mapStateToProps)(Screen);
//export default connect(mapStateToProps, mapDispatchToProps)(Screen);