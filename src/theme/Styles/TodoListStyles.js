import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../colors';
let width = Dimensions.get('window').width;
const TodoListStyles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  list: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.white,
    width: width * 0.85,
    height: 40,
    backgroundColor: colors.list_color,
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },

  remove_btn: {
    marginLeft: 5,
  },

  checkbox: {
    marginRight: 5,
    marginLeft: 4,
  },
};
export const styles = StyleSheet.create(TodoListStyles);
