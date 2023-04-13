import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../colors';

const windowHeight = Dimensions.get('window').height;

const ButtonStyle = {
  button: {
    height: 48,
    backgroundColor: colors.primary_color,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btn_text: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '400',
  },
};
export const styles = StyleSheet.create(ButtonStyle);
