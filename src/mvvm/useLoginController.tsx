import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Errors = {
  username?: string;
  password?: string;
};

const useLoginController = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({username: '', password: ''});
  const [errors, setErrors] = useState<Errors>({});

  const onChangeText = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error: string, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  // from validation
  const fromValidation = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.username) {
      handleError('Please input username', 'username');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      onClickLogin();
    }
  };

  const onClickLogin = async () => {
    if (inputs.username === 'admin' || inputs.password === 'admin') {
      AsyncStorage.setItem('user', inputs.username);
      navigation.navigate('DrawerNavigation');
    } else {
      alert('username and password not match');
    }
  };

  return {
    onChangeText,
    fromValidation,
    errors,
    handleError,
  };
};

export default useLoginController;
