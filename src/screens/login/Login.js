import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  BG_COLOR,
  THEME_COLOR,
  THEME_COLOR2,
  Text_COLOR,
} from '../../utils/Color';
import CustomTextInput from '../../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const BASE_URL = 'http://localhost:8200/api';

  const validate = () => {
    let isValid = false;
    if (email == '') {
      setBademail('please enter email');
      isValid = false;
    } else if (
      email != '' &&
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setBademail('please enter valid email');
      isValid = false;
    } else if (
      email != '' &&
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      isValid = true;
      setBademail('');
    }
    if (password == '') {
      setBadpassword('Please enter password');
      isValid = false;
    } else if (password != '' && password.length < 6) {
      setBadpassword('Please enter Min 6 Character password');
      isValid = false;
    } else if (password != '' && password.length > 5) {
      setBadpassword('');
      isValid = true;
    }
    return isValid;
  };

  const login = async () => {
    const res = await fetch(
      'http://localhost:8200/socialApp/api/auth/register',
      {
        body: JSON.stringify({
          emailID: email,
          password: password,
          username: 'Ali',
          mobile: '03455403525',
          gender: 'Male',
        }),
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const result = await res.json();
    console.log(result);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/png/social.png')}
          style={styles.logo}
        />
        <Text style={[styles.title, {marginTop: 30}]}>{'Wellcome Back'}</Text>
        <Text style={[styles.title, {marginTop: 10}]}>
          {'to'}
          <Text style={styles.title1}>{' SocialApp'}</Text>
        </Text>
        <CustomTextInput
          icon={require('../../assets/png/mail.png')}
          placeholder={'Enter Email'}
          value={email}
          onChangeText={txt => setEmail(txt)}
          isValid={bademail === '' ? true : false}
        />
        {bademail !== '' && <Text style={styles.errortext}>{bademail}</Text>}

        <CustomTextInput
          icon={require('../../assets/png/padlock.png')}
          placeholder={'Enter password'}
          value={password}
          onChangeText={txt => setPassword(txt)}
          isValid={badpassword === '' ? true : false}
        />
        {badpassword !== '' && (
          <Text style={styles.errortext}>{badpassword}</Text>
        )}
        <LinearGradient colors={[THEME_COLOR, THEME_COLOR2]} style={styles.btn}>
          <TouchableOpacity
            style={[
              styles.btn,
              {justifyContent: 'center', alignItems: 'center', marginTop: 0},
            ]}
            onPress={() => {
              validate();
              login();
            }}>
            <Text style={styles.btnText}>{'Login'}</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text
          style={styles.signupText}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          Create New Account? <Text style={styles.signup}> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: BG_COLOR,
  },
  title: {
    color: Text_COLOR,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  title1: {
    color: THEME_COLOR,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  InputContainer: {
    marginTop: 30,
    gap: 15,
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 8,
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  btnText: {
    color: BG_COLOR,
    fontSize: 20,
    fontWeight: '600',
  },
  errortext: {
    color: 'red',
    marginLeft: 30,
    marginTop: 5,
  },
  signupText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 30,
  },
  signup: {
    fontSize: 20,
    fontWeight: '700',
    color: THEME_COLOR,
    // marginLeft: 10,
  },
});
export default Login;
