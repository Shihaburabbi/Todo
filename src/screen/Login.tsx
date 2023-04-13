import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from 'react-native';
import Input from '../components/Input';
import useLoginController from '../mvvm/useLoginController';
import {styles} from '../theme/Styles/LoginStyle';
import Button from '../components/Button';
const windowWidth = Dimensions.get('window').width;

interface LoginScreen {
  navigation: any;
  username: string;
  password: string;
}

const Login: FC<LoginScreen> = props => {
  const {onChangeText, fromValidation, handleError, errors} =
    useLoginController();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.logo}>LOGO</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.login}>
            Login
          </Text>
          <Input
            Width={windowWidth / 1.3}
            placeholder="username"
            onChangeText={(text: string) => onChangeText(text, 'username')}
            onFocus={() => handleError(null, 'username')}
            error={errors.username}
            keyboardType={undefined}
            secureTextEntry={false}
          />
          <Input
            Width={windowWidth / 1.3}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(text: string) => onChangeText(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            error={errors.password}
            keyboardType={undefined}
          />

          <Button
            width={windowWidth / 1.1}
            title="Login"
            onPress={fromValidation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
