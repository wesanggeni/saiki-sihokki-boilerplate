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
  Select,
  SelectItem,
  Datepicker
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

const CalendarIcon = (props) => (
  <Icon {...props} name='calendar'/>
);

export const Screen = (props) => {
  const [mounted, setMounted] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [date, setDate] = React.useState(new Date());

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
    props.navigation.navigate('MPendaftaranSyarat');
  }

  const onProcess = (): void => {
    setModalVisible(true);
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

        <Modal style={{alignItems: 'center', justifyContent: 'center'}} isVisible={modalVisible}>
          <View style={{flex: 1, maxHeight:300, maxWidth:280, backgroundColor:'#ffffff', padding:10, alignItems: 'center', justifyContent: 'center', borderRadius:10}}>
            <Image style={{width:37,height:30, marginBottom:10}}
              source={require('../../../asset/icon/centang.png')}
            />
            <Text style={{textAlign: 'center', fontSize:14, paddingHorizontal:20, marginTop:10, marginBottom:20}}>
            Pendaftaran Berhasil, Silahkan membawa Persyaratan Pendaftaran dan datang ke kantor Kemenag Kab. Ogan komering Ilir
            </Text>

            <Button 
            style={styles.button} 
            size='medium' status='success' 
            accessoryRight={IconNext} 
            onPress={()=> { onAction() }}>
            Lihat Persyaratan
            </Button>

          </View>
        </Modal>

        <Layout
          style={styles.formContainer}
          level='1'>

          <Text style={styles.formText}>Nama Lengkap</Text>
          <Input
            style={styles.formInput}
            size='medium'
            placeholder='Contoh : Hary Pratama'
            //accessoryLeft={Icon}
            //value={phone}
            //onChangeText={setPhone}
          />

          <Text style={styles.formText}>Nomor Handphone</Text>
          <Input
            style={styles.formInput}
            size='medium'
            placeholder='Contoh : 081234567'
            //accessoryLeft={Icon}
            //value={phone}
            //onChangeText={setPhone}
          />

          <Text style={styles.formText}>Alamat Lengkap</Text>
          <Input
            multiline={true}
            textStyle={{ minHeight: 50 }}
            style={styles.formInput}
            size='medium'
            placeholder='Contoh : Jl. Dr. Soetomo No.123'
            //accessoryLeft={Icon}
            //value={phone}
            //onChangeText={setPhone}
          />

          <Text style={styles.formText}>Kecamatan</Text>
          <Select
            style={styles.formInput}
            size='medium'
            placeholder='Pilih Kecamatan'
            //{...mediumSelectState}
            >
            <SelectItem title='Option 1'/>
            <SelectItem title='Option 2'/>
            <SelectItem title='Option 3'/>
          </Select>

          <Text style={styles.formText}>Desa</Text>
          <Select
            style={styles.formInput}
            size='medium'
            placeholder='Pilih Desa'
            //{...mediumSelectState}
            >
            <SelectItem title='Option 1'/>
            <SelectItem title='Option 2'/>
            <SelectItem title='Option 3'/>
          </Select>

          <Text style={styles.formText}>Golongan Darah</Text>
          <Select
            style={styles.formInput}
            size='medium'
            placeholder='Pilih Golongan Darah'
            //{...mediumSelectState}
            >
            <SelectItem title='Option 1'/>
            <SelectItem title='Option 2'/>
            <SelectItem title='Option 3'/>
          </Select>

          <Text style={styles.formText}>Tinggi badan (cm)</Text>
          <Input
            style={styles.formInput}
            size='medium'
            placeholder='Contoh : 175'
            //accessoryLeft={Icon}
            //value={phone}
            //onChangeText={setPhone}
          />

          <Text style={styles.formText}>Pilih Tanggal Kedatangan</Text>
          <Datepicker
            style={styles.formInput}
            size='medium'
            //label='Label'
            //caption='Caption'
            placeholder='Pilih Tanggal'
            date={date}
            onSelect={nextDate => setDate(nextDate)}
            accessoryRight={CalendarIcon}
          />

          <Text style={styles.formText}>Nomor Validasi Bank</Text>
          <Input
            style={styles.formInput}
            size='medium'
            placeholder='Masukan Nomor Validasi Bank'
            //accessoryLeft={Icon}
            //value={phone}
            //onChangeText={setPhone}
          />

          <Button
          accessoryRight={IconNext}
          //accessoryRight={IconMap}
          //appearance='ghost'
          style={styles.formButton} 
          size='medium'
          status='success' 
          onPress={()=> { onProcess() }}>
          Daftar
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
  },
  formInput: {
    marginVertical: 5,
    fontSize:14
  },
  formButton: {
    marginTop: 10,
    width:DeviceWidth - 40
  },
  formText: {
    color: '#ffffff',
    fontSize:14,
    marginTop:2
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