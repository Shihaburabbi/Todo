import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../colors';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const HomeStyle = {
  input: {
    height: 45,
    width: windowWidth / 1.1,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary_color,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
    color: colors.primary_color,
  },

  button_layout: {
    width: windowWidth / 1.1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.primary_color,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary_color,
  },
};
export const styles = StyleSheet.create(HomeStyle);
