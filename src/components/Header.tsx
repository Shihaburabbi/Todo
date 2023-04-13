import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import MenuIcon from '../SvgIcon/MenuIcon';
import {styles} from '../theme/Styles/HeaderStyle';

interface Props {
  title: string;
}

const Header: FC<Props> = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#f0ddcc"
        onPress={() => {
          navigation.openDrawer();
        }}>
        <MenuIcon color="#333" size={30} />
      </TouchableHighlight>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
