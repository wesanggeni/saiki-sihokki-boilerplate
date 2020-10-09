import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setMember } from '../../redux/actions/authActions';
import {
  StyleSheet,
  View,
  ScrollViewProps,
  Alert,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { 
  Icon,
  Button,
  Input,
  Layout,
  Text,
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {
  BackIcon,
  IconSignIn,
  IconSignUp,
} from '../../component/icon';
import LinearGradient from 'react-native-linear-gradient';
import { Endpoint, Color } from '../../config';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const KeyboardAvoidingView = (props): React.ReactElement => {
  const lib = require('react-native-keyboard-aware-scroll-view');

  const defaultProps: ScrollViewProps = {
    style: { flex: 1 },
    contentContainerStyle: { flexGrow: 1 },
    bounces: false,
    bouncesZoom: false,
    alwaysBounceVertical: false,
    alwaysBounceHorizontal: false,
  };

  return React.createElement(lib.KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
};

export const Auth = (props: mapStateToProps) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={()=> { props.navigation.navigate('Splash'); }} />
  );

  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onLoginSubmit = (): void => {
    setIsLoading(true);

      axios.post(Endpoint.Main+'api/login', {
        no_hp: phone,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.data.length != 0) {
          if (response.data.status == 'success') {
            //console.log(response);
            props.setMember(response.data);

            if (response.data.role == 'Super Admin') {
              props.navigation.navigate('SAdmin');
            } else if (response.data.role == 'Petugas') {
              props.navigation.navigate('Admin');
            } else if (response.data.role == 'Calon Jemaah') {
              props.navigation.navigate('Member');
            } else {
              props.navigation.navigate('Splash');
            }
            
          } else {
            Alert.alert('Gagal!', 'Data gagal diproses. mohon periksa kembali', 
            [{text: 'OK'},]
            ,{ cancelable: false });
          }
        } else {
          Alert.alert('Gagal!', 'Data gagal diproses. mohon periksa kembali', 
          [{text: 'OK'},]
          ,{ cancelable: false });
        }
      })
      .catch(error => {
        //console.log(error);
        Alert.alert('Gagal!', 'Data gagal diproses. mohon periksa kembali', 
          [{text: 'OK'},]
          ,{ cancelable: false })
      });

      setIsLoading(false);
  }

  const onForgotPasswordButtonPress = (): void => {
    props.navigation.navigate('Forget');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
  <ScrollView>
  <LinearGradient
  start={{x: 0, y: 0.5}}
  end={{x: 0, y: 0}}
  colors={[Color.First, Color.Second]}
  style={styles.containerWrap}>

    <KeyboardAvoidingView style={styles.container}>
      
        <TopNavigation
          style={{backgroundColor: 'transparent'}}
          //title='Login'
          //alignment='center'
          accessoryLeft={BackAction}
        />

      <View style={styles.contain}>
        <Image style={styles.logo}
          source={require('../../asset/logo.png')}
        />
        <Text 
        style={styles.text} 
        category='s1'>Login Akun 
        <Text style={styles.textLogo}>SiHokki</Text>
        </Text>
      </View>

      <Layout
        style={styles.formContainer}
        level='1'>
        <Input
          style={styles.fieldInput}
          size='medium'
          placeholder='No Handphone'
          //icon={PersonIcon}
          //accessoryLeft={PersonIcon}
          value={phone}
          onChangeText={setPhone}
        />
        <Input
          size='medium'
          //accessoryLeft={passwordVisible ? EyeIcon : EyeOffIcon}
          style={styles.fieldInput}
          placeholder='Kata Sandi'
          //icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          //onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            size='medium'
            style={styles.forgotPasswordButton}
            appearance='ghost'
            status='basic'
            //onPress={onForgotPasswordButtonPress}
            >
            Lupa Sandi?
          </Button>
        </View>

        <Button 
        style={styles.button} 
        size='medium' status='success' 
        accessoryLeft={IconSignIn} 
        onPress={()=> { onLoginSubmit(); }}>
        Masuk Akun
        </Button>

        <Button 
        style={styles.buttonReg} 
        size='medium' status='primary' 
        //appearance='outline' 
        accessoryLeft={IconSignUp} 
        onPress={()=> { props.navigation.navigate('Register') }}>
        Daftar Akun
        </Button>

      </Layout>




    </KeyboardAvoidingView>
  </LinearGradient>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerWrap: {
    flex: 1,
    minHeight:500,
  },
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:30
  },
  button: {
    marginTop: 10,
    paddingHorizontal:80
  },
  buttonReg: {
    marginTop: 10,
    paddingHorizontal:80,
    color:'green'
  },
  text: {
    marginBottom: 0,
    color: '#f1f1f1',
    fontSize:14
  },
  textLogo: {
    color: '#ffff',
    fontWeight:'bold'
  },
  logo: {
    width:150,
    height:140,
    marginBottom:10,
    marginTop:5
  },

  //---
  
  container: {
    backgroundColor: 'transparent',
  },
  formContainer: {
    minHeight:DeviceHeight-270,
    flex: 1,
    paddingTop: 25,
    paddingBottom: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fieldInput: {
    marginVertical: 5,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    //color:'#ffffff'
  },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);