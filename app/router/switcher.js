import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Switcher = (props) => {
  const [mounted, setMounted] = React.useState(true);

  useEffect(() => {
    if (mounted == true) {
      if (props.dataMember.length != 0) {
        if (props.dataMember.role == 'Super Admin') {
          props.navigation.navigate('SAdmin');
        } else if (props.dataMember.role == 'Petugas') {
          props.navigation.navigate('Admin');
        } else if (props.dataMember.role == 'Calon Jemaah') {
          props.navigation.navigate('Member');
        } else {
          props.navigation.navigate('Splash');
        }
      } else {
        props.navigation.navigate('Splash');
      }
      //console.log(props.dataMember);
      setMounted(false);
    }
  });

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const mapStateToProps = (state) => {
  return {
    dataMember: state.authReducer.dataMember,
  };
};

export default connect(mapStateToProps)(Switcher);