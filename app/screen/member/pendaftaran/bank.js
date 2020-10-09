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
    setModalVisible(false);
    props.navigation.navigate('MPendaftaranBank');
  }

  const onProcess = (): void => {
    props.navigation.navigate('MPendaftaranAntrian');
  }

  const closeModal = (): void => {
    setModalVisible(false);
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


          <Text style={styles.formText}>
          Lokasi Bank Tabungan Setoran Haji
          </Text>

          <View style={{
            borderRadius:10,
            padding:10,
            backgroundColor:'#ffffff', 
            marginBottom:5, 
            width:DeviceWidth-40,
            height:240}}>
            <Text style={{fontSize:14}}>
              View Lokasi
            </Text>
          </View>

          <Button
          accessoryRight={IconMap}
          //accessoryRight={IconMap}
          //appearance='ghost'
          style={styles.formButton} 
          size='medium'
          status='warning' 
          //onPress={()=> { onProcess() }}
          >
          Lihat di Maps
          </Button>

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
  formButton: {
    marginVertical: 5,
    width:DeviceWidth-40
  },
  formText: {
    color: '#ffffff',
    fontSize:14,
    marginVertical:10
  },
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