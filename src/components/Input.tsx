import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
const width = Dimensions.get('window').width;

interface Input {
  placeholder: string;
  Width: any;
  onChangeText: any;
  keyboardType: any;
  secureTextEntry: boolean;
  error: any;
  onFocus: () => void;
}

const Input: FC<Input> = ({
  placeholder,
  Width,
  onChangeText,
  keyboardType,
  secureTextEntry,
  error,
  onFocus = () => {},
}) => {
  const {content, input, text} = styles;
  const [isFocused, setIsFocused] = React.useState(false);

  const border_style = {
    borderBottomColor: error ? 1 : null,
    marginBottom: error ? 5 : 15,
    width: Width,
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={[content, border_style]}>
        <TextInput
          placeholderTextColor={'black'}
          placeholder={placeholder}
          style={[
            input,
            {
              width: Width,
              borderBottomColor: error ? 'red' : isFocused ? 'gray' : 'gray',
            },
          ]}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {error && (
        <Text style={{marginBottom: 10, color: 'red', fontSize: 12}}>
          {error}
        </Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    height: 51,
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
});
