import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setMember } from '../../redux/actions/authActions';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollViewProps,
  Alert,
  ScrollView,
  Image
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
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = (): void => {
    setIsLoading(true);

      axios.post(Endpoint.Main+'api/register', {
        nama: name,
        no_hp: phone,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        Alert.alert('Sukses!', 'Akun berhasil dibuat. mulai login', 
          [{text: 'OK', onPress: () => {props.navigation.navigate('Login')}},]
          ,{ cancelable: false })
      })
      .catch(error => {
        Alert.alert('Gagal!', 'Data gagal diproses. mohon periksa kembali', 
          [{text: 'OK'},]
          ,{ cancelable: false })
      });

      setIsLoading(false);
  }

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
          placeholder='Nama Lengkap'
          //icon={PersonIcon}
          //accessoryLeft={PersonIcon}
          value={name}
          onChangeText={setName}
        />
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
          <Text style={styles.terms}>
          Dengan mendaftar saya setuju dan telah membaca Term & Condition dan Kebijakan Privasi pada Applikasi
          </Text>
        </View>

        <Button 
        style={styles.buttonReg} 
        size='medium' status='success' 
        //appearance='outline' 
        accessoryLeft={IconSignUp} 
        onPress={()=> { onSubmit() }}>
        Daftar Akun
        </Button>

        <Button 
        style={styles.button} 
        size='medium' status='primary' 
        //appearance='outline'
        accessoryLeft={IconSignIn} 
        onPress={()=> { props.navigation.navigate('Login') }}>
        Masuk Akun
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
  terms: {
    fontSize:14,
    marginVertical:5
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