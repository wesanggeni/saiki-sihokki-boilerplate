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
  IconBack,
  //IconWrong,
  //IconLogout,
} from '../../../component/icon';

import CustomFooter from '../../../component/layout/footer';
import { Endpoint, Color } from '../../../config';

export const Screen = (props) => {
  const [mounted, setMounted] = React.useState(true);
  const [modalA, setModalA] = React.useState(true);
  const [modalB, setModalB] = React.useState(false);
  const [modalC, setModalC] = React.useState(false);
  const [field, setField] = React.useState('');

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
    setModalA(false);
    props.navigation.navigate('MPendaftaranBank');
  }

  const onActionA = (): void => {
    setModalB(false);
    props.navigation.navigate('MPendaftaranForm');
  }

  const onActionB = (): void => {
    setModalC(false);
    props.navigation.goBack('Member');
  }

  const onProcess = (): void => {
    var checkThis = field.substring(0,4);
    if (field.length == 16 && checkThis == 1602) {
      setModalB(true);
    } else {
      setModalC(true);
    }
  }

  const closeModal = (): void => {
    setModalA(false);
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

        <Modal style={{alignItems: 'center', justifyContent: 'center'}} isVisible={modalA}>
          <View style={{flex: 1, maxHeight:300, maxWidth:280, backgroundColor:'#ffffff', padding:10, alignItems: 'center', justifyContent: 'center', borderRadius:10}}>
            <Image style={{width:40,height:52, marginBottom:10}}
              source={require('../../../asset/icon/kunci.png')}
            />
            <Text style={{textAlign: 'center', fontSize:14, paddingHorizontal:20, marginTop:10, marginBottom:20}}>
            Sebelum melakukan pendaftaran pastikan Anda sudah membuka Tabungan Setoran Haji ke Bank untuk mendapatkan Nomor Validasi Bank.
            </Text>

            <Button 
            style={styles.button} 
            size='medium' status='success' 
            accessoryRight={IconNext} 
            onPress={()=> { setModalA(false) }}>
            Saya sudah punya
            </Button>

            <Button 
            style={styles.button} 
            size='medium' status='warning'
            accessoryRight={IconMap} 
            onPress={()=> { onAction() }}>
            Cek lokasi bank
            </Button>

          </View>
        </Modal>

        <Modal style={{alignItems: 'center', justifyContent: 'center'}} isVisible={modalB}>
          <View style={{flex: 1, maxHeight:300, maxWidth:280, backgroundColor:'#ffffff', padding:10, alignItems: 'center', justifyContent: 'center', borderRadius:10}}>
            <Image style={{width:37,height:30, marginBottom:10}}
              source={require('../../../asset/icon/centang.png')}
            />
            <Text style={{textAlign: 'center', fontSize:14, paddingHorizontal:20, marginTop:10, marginBottom:20}}>
            Nomor KTP sesuai dengan wilayah, Silahkan lanjutkan pendaftaran Anda.
            </Text>

            <Button 
            style={styles.button} 
            size='medium' status='success' 
            accessoryRight={IconNext} 
            onPress={()=> { onActionA() }}>
            OK
            </Button>

          </View>
        </Modal>

        <Modal style={{alignItems: 'center', justifyContent: 'center'}} isVisible={modalC}>
          <View style={{flex: 1, maxHeight:300, maxWidth:280, backgroundColor:'#ffffff', padding:10, alignItems: 'center', justifyContent: 'center', borderRadius:10}}>
            <Image style={{width:30,height:30, marginBottom:10}}
              source={require('../../../asset/icon/ditolak.png')}
            />
            <Text style={{textAlign: 'center', fontSize:14, paddingHorizontal:20, marginTop:10, marginBottom:20}}>
            Mohon Maaf, Nomor KTP tidak sesuai dengan wilayah Kab. OKI, Mohon maaf Anda tidak dapat melanjutkan pendaftaran.
            </Text>

            <Button 
            style={styles.button} 
            size='medium' status='success' 
            accessoryLeft={IconBack} 
            onPress={()=> { onActionB() }}>
            Kembali
            </Button>

          </View>
        </Modal>


        <Layout
          style={styles.formContainer}
          level='1'>

          <Text style={styles.formText}>Masukan Nomor KTP</Text>
          <Input
            style={styles.formInput}
            size='medium'
            placeholder='Masukan Nomor KTP'
            //accessoryLeft={Icon}
            value={field}
            onChangeText={setField}
          />

          <Button
          accessoryLeft={IconCorrect}
          //accessoryRight={IconMap}
          //appearance='ghost'
          style={styles.formButton} 
          size='medium'
          status='success' 
          onPress={()=> { onProcess() }}>
          Cek Nomor KTP
          </Button>
        </Layout>

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
    marginBottom:DeviceHeight - 400
  },
  formInput: {
    marginVertical: 5,
  },
  formButton: {
    marginVertical: 5,
    width:DeviceWidth - 40
  },
  formText: {
    color: '#ffffff',
    fontSize:14,
    marginVertical:5
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