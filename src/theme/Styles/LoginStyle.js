import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../colors';

const windowHeight = Dimensions.get('window').height;

const LoginStyle = {
  container: {
    flex: 1,
    backgroundColor: colors.primary_color,
    justifyContent: 'flex-end',
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  button: {
    width: 170,
    height: 48,
    backgroundColor: colors.primary_color,
    borderRadius: 22.5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: windowHeight / 16,
  },
  btn_text: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
  },
  header: {
    height: windowHeight / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
  },
  footer: {
    height: windowHeight / 1.5,
    backgroundColor: colors.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
  },
  login: {
    color: '#002D53',
    fontSize: 20,
    fontWeight: '500',
  },
};
export const styles = StyleSheet.create(LoginStyle);
