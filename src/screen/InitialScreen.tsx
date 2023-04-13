import React, {useRef, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../theme/colors';

const InitialScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 1000);
  }, []);

  const authUser = async () => {
    try {
      AsyncStorage.getItem('user').then(value =>
        props.navigation.replace(value === null ? 'Auth' : 'DrawerNavigation'),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary_color,
      }}>
      <Text style={{fontSize: 30, color: colors.white, fontWeight: '500'}}>
        Todo
      </Text>
    </View>
  );
};

export default InitialScreen;
