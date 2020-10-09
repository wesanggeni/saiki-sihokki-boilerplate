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
  Avatar,
  TopNavigationAction,
  TopNavigation,
  //Card,
  //CardElement,
  //CardProps,
  //List,
  Input,
  Tab,
  TabView
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
  IconLogout,
} from '../../../component/icon';

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import CustomFooter from '../../../component/layout/footer';
import { Endpoint, Color } from '../../../config';


const items = [
  {
    id: 1,
    nama: 'Ade Haryanto 1',
    nomor: 'P001',
    tanggal: '01 Oktober 2020',
    status: 'Menunggu di Layani',
  },
  {
    id:2,
    nama: 'Ade Haryanto 2',
    nomor: 'P002',
    tanggal: '02 Oktober 2020',
    status: 'Menunggu di Layani',
  },
  {
    id:3,
    nama: 'Ade Haryanto 3',
    nomor: 'P003',
    tanggal: '03 Oktober 2020',
    status: 'Menunggu di Layani',
  },
];

export const Screen = (props) => {
  const [mounted, setMounted] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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

  const accordionHeader = ({ item, index }) => (
    <View style={{backgroundColor:'#18916E', marginTop:10, marginBottom:10}}>
      <Text style={{color:'#ffffff', fontSize:14, padding:10  }}>
        {item.nama}
      </Text>
    </View>
  );

  const accordionBody = ({ item, index }) => (
    <View style={{backgroundColor:'#015842', marginTop:10, marginBottom:10}}>
      <Text style={{color:'#ffffff', fontSize:14, padding:10  }}>
        {item.tanggal}
      </Text>
    </View>
  );

  const onAction = (): void => {
    setModalVisible(false);
    props.navigation.navigate('MPendaftaranBank');
  }

  const onProcess = (): void => {
    setModalVisible(true);
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

        <Layout
          style={styles.formContainer}
          level='1'>

          <Text style={styles.formText}>
          List Pendaftar Oktober 2020
          </Text>





      <AccordionList
        list={items}
        header={(item) => {
          //console.log(item);
          return(
          <View style={styles.listWrap}>
            <View style={styles.listCol}>
              <Text style={styles.listTa}>
                {item.nama}
              </Text>
              <Text style={styles.listTb}>
                {item.tanggal}
              </Text>
            </View>
            <View style={styles.listCol}>
              <Text style={styles.listTc}>
                {item.nomor}
              </Text>
              <Text style={styles.listTd}>
                {item.status}
              </Text>
            </View>
          </View>
          )}}
        body={(item) => (
        <View>
          <View style={styles.post}>
            <View style={styles.postBody}>
              <Avatar
              size='medium'
              source={require('../../../asset/icon/profile.png')} />
              <View style={styles.postWrap}>
                <View style={styles.postLeft}>
                  <Text style={styles.postText}>
                    No HP
                  </Text>
                  <Text style={styles.postText}>
                    Alamat
                  </Text>
                  <Text style={styles.postText}>
                    Kecamatan
                  </Text>
                  <Text style={styles.postText}>
                    Desa
                  </Text>
                </View>
                <View style={styles.postRight}>
                  <Text style={styles.postText}>
                    : 08123456789
                  </Text>
                  <Text style={styles.postText}>
                    : Jln Jendral ano
                  </Text>
                  <Text style={styles.postText}>
                    : Teluk Gelam
                  </Text>
                  <Text style={styles.postText}>
                    : Muara Burnai
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.postStatus}>
            <Text style={styles.postTextSecond}>Update Status</Text>
            <Button 
            //style={styles.buttonReg} 
            size='medium'
            status='warning' 
            //appearance='outline' 
            accessoryLeft={IconCorrect} 
            //onPress={()=> {  }}
            >
            Proses di Layani
            </Button>
          </View>
          <View style={styles.postPorsi}>
            <Text style={styles.postTextSecond}>-</Text>
            <Text style={styles.postTextSecond}>Update Nomor Porsi Pendaftar</Text>
            <Input
              //style={styles.fieldInput}
              size='medium'
              placeholder='Input Nomor Porsi'
              //icon={PersonIcon}
              //accessoryLeft={PersonIcon}
              //value={phone}
              //onChangeText={setPhone}
            />

          </View>
        </View>
          )}
        //keyExtractor={item => item.key}
        keyExtractor={(item, index) => index.toString()}
      />


        </Layout>

      <CustomFooter/>
      </View>
    </LinearGradient>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  listWrap: {
    backgroundColor:'#00543C', marginTop:10, marginBottom:0, flex:1, flexDirection: 'row'
  },
  listCol: {
    width:DeviceWidth/2-20,
    padding:5
  },
  listTa: {
    color:'#ffffff', fontSize:14, paddingHorizontal:10, paddingVertical:5
  },
  listTb: {
    color:'#fafafa', fontSize:12, paddingHorizontal:10, paddingBottom:5
  },
  listTc: {
    color:'#ffffff', fontSize:20, fontWeight:'bold', paddingHorizontal:10, paddingBottom:3, alignSelf: 'flex-end'
  },
  listTd: {
    color:'#ffffff', fontSize:12, backgroundColor:'red', borderRadius:2, paddingHorizontal:10, marginRight:10, paddingBottom:2, alignSelf: 'flex-end'
  },

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
    paddingTop: 20,
    paddingBottom: 50,
    //paddingHorizontal: 20,
    backgroundColor: 'transparent',
    //borderTopLeftRadius:30,
    //borderTopRightRadius:30,
    width: DeviceWidth - 40
  },
  formInput: {
    marginVertical: 5,
  },
  formButton: {
    marginVertical: 5,
    width:250
  },
  formText: {
    color: '#ffffff',
    fontSize:14,
    marginBottom:10
  },
  //---
  tabContainer: {
    backgroundColor: '#dadada',
    padding:10
  },
  //---

  post: {
    backgroundColor:'#18916E',
    marginTop:0,
    marginBottom:2,
    padding:7
  },
  postBody: {
    flexDirection: 'row',
    marginHorizontal: 0,
  },
  postText: {
    color: "#ffffff",
    fontSize: 13,
  },
  postWrap: {
    flex:1,
    flexDirection: 'row'
  },
  postLeft: {
    width:DeviceWidth/5,
    paddingLeft:5
  },
  postRight: {
    width:DeviceWidth/2
  },
  postStatus: {
    backgroundColor:'#18916E',
    marginTop:0,
    marginBottom:2,
    paddingHorizontal:10,
    paddingBottom:10
  },
  postPorsi: {
    backgroundColor:'#18916E',
    marginTop:0,
    marginBottom:2,
    paddingHorizontal:10,
    paddingBottom:10
  },
  postTextSecond: {
    alignSelf:'center',
    fontSize:16,
    color:'#ffffff',
    padding:7
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