/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackIcon from '../SvgIcon/BackIcon';
import ProfileIcon from '../SvgIcon/ProfileIcon';
import SettingIcon from '../SvgIcon/Setting';
import LogoutIcon from '../SvgIcon/LogoutIcon';
import HomeIcon from '../SvgIcon/HomeIcon';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity style={styles.header}>
          <BackIcon />
          <Text style={styles.header_title}>Menu</Text>
        </TouchableOpacity>
        <View style={styles.comtainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={styles.route_item}>
            <HomeIcon />
            <Text style={styles.header_title}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
            style={styles.route_item}>
            <ProfileIcon />
            <Text style={styles.header_title}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Setting')}
            style={styles.route_item}>
            <SettingIcon />
            <Text style={styles.header_title}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.toggleDrawer();
              Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: 'Confirm',
                    onPress: async () => {
                      await AsyncStorage.clear();
                      props.navigation.navigate('InitialScreen');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}
            style={styles.route_item}>
            <LogoutIcon />
            <Text style={styles.header_title}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  header: {
    paddingHorizontal: 20,
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  header_title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
  },
  route_item: {
    height: 30,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  route_itle: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default CustomDrawer;
