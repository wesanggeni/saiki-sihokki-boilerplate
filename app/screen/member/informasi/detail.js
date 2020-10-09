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
  <ScrollView>
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
          Informasi Kemenag Kab. OKI
          </Text>

          <View style={{
            borderRadius:0,
            padding:10,
            backgroundColor:'#00543C', 
            marginBottom:5, 
            width:DeviceWidth-40,
            minHeight:DeviceHeight-230}}>

            <Image
            style={{width:DeviceWidth-60,height:230, marginBottom:10}}
            source={require('../../../asset/gambar-informasi.png')} />

            <Text style={{color:'#ffffff', fontSize:14}}>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, 
{"\n"}
{"\n"}
but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design.
{"\n"}
{"\n"}
Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.
{"\n"}
{"\n"}
Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors including Pages and Microsoft Word have since adopted Lorem ipsum as well.
            </Text>
          </View>

      <CustomFooter/>
      </View>
    </LinearGradient>
  </ScrollView>
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
    marginTop: 10,
    marginBottom: 90,
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