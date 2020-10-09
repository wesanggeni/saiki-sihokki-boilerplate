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
  //IconLogout,
} from '../../../component/icon';

import CustomFooter from '../../../component/layout/footer';
import { Endpoint, Color } from '../../../config';

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
          Informasi Kemenag Kab. OKI
          </Text>

          <TabView
          style={{backgroundColor:'#00543C'}}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <Tab title='Manasik'>
              <Layout style={styles.tabContainer}>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

              </Layout>
            </Tab>
            <Tab title='Pelunasan'>
              <Layout style={styles.tabContainer}>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> { props.navigation.navigate('MInformasiDetail') }}>
                  <View style={styles.post}>
                    <View style={styles.postBody}>
                      <Image
                      style={styles.postImg}
                      //size='small'
                      source={require('../../../asset/gambar-informasi.png')} />
                      <View style={styles.postAuthorContainer}>
                        <Text
                          style={styles.postText}
                          //appearance='hint'
                          category='c1'>
                          01 Oktober 2020
                        </Text>
                        <Text
                          style={styles.postTitle}
                          category='s2'>
                          Kemenag Susun Aturan Protokol Kesehatan penyelenggaraan Umroh
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

              </Layout>
            </Tab>
            <Tab title='Lainnya'>
              <Layout style={styles.tabContainer}>

              </Layout>
            </Tab>
          </TabView>

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
    backgroundColor: '#00543C',
    padding:10
  },
  //---
  postTitle: {
    color: "#ffffff",
    fontSize: 14,
    //fontWeight: "bold"
  },
  postText: {
    color: "#f1f1f1",
    fontSize: 13,
    marginTop:-3,
    marginBottom:-3,
  },
  post: {
    marginHorizontal: 10,
    marginVertical:5
  },
  postImg: {
    width:50,
    height:50,
    borderRadius:4
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