import React from 'react';
//import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import LinearGradient from 'react-native-linear-gradient';

import ScreenSwitcher from './switcher';
import ScreenSplash from '../screen/splash';
import ScreenBlank from '../screen/blank';

import ScreenLogin from '../screen/auth';
import ScreenRegister from '../screen/auth/register';
import ScreenLogout from '../screen/auth/logout';

import Screens from '../screen/screens';

//---
import ScreenMember from '../screen/member';

import ScreenMPendaftaran from '../screen/member/pendaftaran';
import ScreenMPendaftaranBank from '../screen/member/pendaftaran/bank';
import ScreenMPendaftaranForm from '../screen/member/pendaftaran/form';
import ScreenMPendaftaranSyarat from '../screen/member/pendaftaran/syarat';
import ScreenMPendaftaranAntrian from '../screen/member/pendaftaran/antrian';

import ScreenMPembatalan from '../screen/member/pembatalan';
import ScreenMPembatalanSyarat from '../screen/member/pembatalan/syarat';
import ScreenMPembatalanAntrian from '../screen/member/pembatalan/antrian';

import ScreenMPorsi from '../screen/member/porsi';

import ScreenMInformasi from '../screen/member/informasi';
import ScreenMInformasiDetail from '../screen/member/informasi/detail';

import ScreenMStatus from '../screen/member/status';

import ScreenMPengaturan from '../screen/member/pengaturan';

//---

import ScreenAdmin from '../screen/admin';

import ScreenAPendaftaran from '../screen/admin/pendaftaran';
import ScreenAPembatalan from '../screen/admin/pembatalan';

import ScreenAHistory from '../screen/admin/history';
import ScreenAHistoryPendaftaran from '../screen/admin/history/pendaftaran';
import ScreenAHistoryPembatalan from '../screen/admin/history/pembatalan';

import ScreenAPengaturan from '../screen/admin/pengaturan';

//---

import ScreenSAdmin from '../screen/superadmin';

import ScreenSAPendaftaran from '../screen/superadmin/pendaftaran';
import ScreenSAPembatalan from '../screen/superadmin/pembatalan';

import ScreenSAPengaturan from '../screen/superadmin/pengaturan';

//---

export default function App() {
  const Stack = createStackNavigator();
  //const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Switcher" component={ScreenSwitcher} />
        <Stack.Screen name="Splash" component={ScreenSplash} />
        <Stack.Screen name="Blank" component={ScreenBlank} />
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Logout" component={ScreenLogout} />
        <Stack.Screen name="Register" component={ScreenRegister} />
        <Stack.Screen name="Screens" component={Screens} />

        <Stack.Screen name="Member" component={ScreenMember} />
        <Stack.Screen name="MPendaftaran" component={ScreenMPendaftaran} />
        <Stack.Screen name="MPendaftaranBank" component={ScreenMPendaftaranBank} />
        <Stack.Screen name="MPendaftaranForm" component={ScreenMPendaftaranForm} />
        <Stack.Screen name="MPendaftaranSyarat" component={ScreenMPendaftaranSyarat} />
        <Stack.Screen name="MPendaftaranAntrian" component={ScreenMPendaftaranAntrian} />
        <Stack.Screen name="MPembatalan" component={ScreenMPembatalan} />
        <Stack.Screen name="MPembatalanSyarat" component={ScreenMPembatalanSyarat} />
        <Stack.Screen name="MPembatalanAntrian" component={ScreenMPembatalanAntrian} />
        <Stack.Screen name="MPorsi" component={ScreenMPorsi} />
        <Stack.Screen name="MInformasi" component={ScreenMInformasi} />
        <Stack.Screen name="MInformasiDetail" component={ScreenMInformasiDetail} />
        <Stack.Screen name="MStatus" component={ScreenMStatus} />
        <Stack.Screen name="MPengaturan" component={ScreenMPengaturan} />

        <Stack.Screen name="Admin" component={ScreenAdmin} />
        <Stack.Screen name="APendaftaran" component={ScreenAPendaftaran} />
        <Stack.Screen name="APembatalan" component={ScreenAPembatalan} />
        <Stack.Screen name="AHistory" component={ScreenAHistory} />
        <Stack.Screen name="AHistoryPendaftaran" component={ScreenAHistoryPendaftaran} />
        <Stack.Screen name="AHistoryPembatalan" component={ScreenAHistoryPembatalan} />
        <Stack.Screen name="APengaturan" component={ScreenAPengaturan} />

        <Stack.Screen name="SAdmin" component={ScreenSAdmin} />
        <Stack.Screen name="SAPendaftaran" component={ScreenSAPendaftaran} />
        <Stack.Screen name="SAPembatalan" component={ScreenSAPembatalan} />
        <Stack.Screen name="SAPengaturan" component={ScreenSAPengaturan} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}
