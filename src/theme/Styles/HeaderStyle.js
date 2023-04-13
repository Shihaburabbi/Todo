import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../colors';
let width = Dimensions.get('window').width;
const HeaderStyle = {
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 20,
  },
};
export const styles = StyleSheet.create(HeaderStyle);
