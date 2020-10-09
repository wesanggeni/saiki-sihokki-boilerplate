import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
	Image,
	ImageStyle
} from "react-native";
import {
	Icon,
	IconElement,
  Text
} from "@ui-kitten/components";


export const IconSignIn = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/welcome-masuk.png')}
  />
);

export const IconSignUp = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/welcome-daftar.png')}
  />
);

export const LogoIcon = () => (
  <Image style={{width:73, height:30}}
    source={require('../../asset/logo-kemenag.png')}
  />
  //<Text>SiHokki</Text>
);

export const BackIcon = (style) => (
  <Image style={{width:8, height:14}}
    source={require('../../asset/icon/kembali.png')}
  />
);

export const IconNext = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/selanjutnya.png')}
  />
);

export const IconBack = () => (
  <Image style={{width:6, height:10}}
    source={require('../../asset/icon/kembali.png')}
  />
);

export const IconMap = () => (
  <Image style={{width:11, height:14}}
    source={require('../../asset/icon/maps.png')}
  />
);

export const IconSave = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/simpan.png')}
  />
);

export const IconCorrect = () => (
  <Image style={{width:12, height:12}}
    source={require('../../asset/icon/centang-putih.png')}
  />
);

export const IconStatus = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/cekstatus.png')}
  />
);

export const IconWrong = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/ditolak.png')}
  />
);

export const IconLogout = () => (
  <Image style={{width:14, height:14}}
    source={require('../../asset/icon/logout.png')}
  />
);
//--------
/*
export const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical'/>
);

export const InfoIcon = (props) => (
  <Icon {...props} name='info'/>
);

export const LogoutIcon = (props) => (
  <Icon {...props} name='log-out'/>
);

export const BackIcon = (style) => (
  <Icon {...style} name='arrow-back'/>
);

export const CloseIcon = (style) => (
  <Icon {...style} name='close-outline'/>
);

export const MinusIcon = (style) => (
  <Icon {...style} size={7} name='minus'/>
);

export const PlusIcon = (style) => (
  <Icon {...style} size={7} name='plus'/>
);

export const FilterIcon = () => (
  <Icon name='menu-outline'/>
);

export const CartIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='shopping-cart-outline'/>
);

export const ArrowForward = (style) => (
  <Icon {...style} name='chevron-right-outline'/>
);

export const SettingIcon = (style) => (
  <Icon {...style} name='settings-outline'/>
);

export const EyeIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='eye'/>
);

export const EyeOffIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='eye-off'/>
);

export const PersonIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='person'/>
);

export const CameraIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='camera'/>
);

export const ChatIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='message-square-outline'/>
);
*/