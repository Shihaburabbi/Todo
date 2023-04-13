import {Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {FC} from 'react';
import {styles} from '../theme/Styles/ButtonStyle';

interface Props {
  title: string;
  onPress: () => void;
  color?: any;
  width?: any;
}

const Button: FC<Props> = ({width, title, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, {width: width}]} onPress={onPress}>
      <Text style={styles.btn_text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
