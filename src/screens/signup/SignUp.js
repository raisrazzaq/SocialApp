import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
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

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [bademail, setBademail] = useState('');
  const [badpassword, setBadpassword] = useState('');
  const [badMobile, setBadMobile] = useState('');
  const [badUsername, setBadUsername] = useState('');
  const [selectedGender, setSelectedGender] = useState(0);
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
    if (username == '') {
      setBadUsername('please enter username');
      isValid = false;
    } else if (username != '') {
      setBadUsername('');
      isValid = true;
    }
    if (mobile == '') {
      setBadMobile('please enter Mobile number');
      isValid = false;
    } else if (mobile != '' && mobile.length < 10) {
      setBadUsername('please enter valid Mobile number');
      isValid = false;
    } else if (mobile != '') {
      setBadMobile('');
      isValid = true;
    }
    return isValid;
  };

  const signup = async () => {
    const res = await fetch(
      'http://localhost:8200/socialApp/api/auth/register',
      {
        body: JSON.stringify({
          emailID: email,
          password: password,
          username: username,
          mobile: mobile,
          gender: selectedGender == 0 ? 'Male' : 'Female',
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
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/png/social.png')}
            style={styles.logo}
          />
          <Text style={[styles.title, {marginTop: 30}]}>
            {'Create Account'}
          </Text>
          <Text style={[styles.title, {marginTop: 10}]}>
            {'in'}
            <Text style={styles.title1}>{' SocialApp'}</Text>
          </Text>
          <CustomTextInput
            icon={require('../../assets/png/user.png')}
            placeholder={'Enter Username'}
            value={username}
            onChangeText={txt => setUsername(txt)}
            isValid={badUsername === '' ? true : false}
          />
          {badUsername !== '' && (
            <Text style={styles.errortext}>{badUsername}</Text>
          )}
          <CustomTextInput
            icon={require('../../assets/png/mail.png')}
            placeholder={'Enter Email'}
            value={email}
            onChangeText={txt => setEmail(txt)}
            isValid={bademail === '' ? true : false}
          />
          {bademail !== '' && <Text style={styles.errortext}>{bademail}</Text>}
          <CustomTextInput
            icon={require('../../assets/png/mobile.png')}
            placeholder={'Enter Mobile No'}
            value={mobile}
            onChangeText={txt => setMobile(txt)}
            isValid={badMobile === '' ? true : false}
          />
          {badMobile !== '' && (
            <Text style={styles.errortext}>{badMobile}</Text>
          )}
          <Text style={styles.heading}>Select Gender</Text>
          <View style={styles.genderView}>
            <TouchableOpacity
              style={[
                styles.genderbtn,
                {borderColor: selectedGender == 0 ? 'green' : '#9e9e9e'},
              ]}
              onPress={() => {
                setSelectedGender(0);
              }}>
              <Image
                source={require('../../assets/png/male.png')}
                style={styles.genderIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderbtn,
                {borderColor: selectedGender == 1 ? 'green' : '#9e9e9e'},
              ]}
              onPress={() => {
                setSelectedGender(1);
              }}>
              <Image
                source={require('../../assets/png/female.png')}
                style={styles.genderIcon}
              />
            </TouchableOpacity>
          </View>
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

          <LinearGradient
            colors={[THEME_COLOR, THEME_COLOR2]}
            style={styles.btn}>
            <TouchableOpacity
              style={[
                styles.btn,
                {justifyContent: 'center', alignItems: 'center', marginTop: 0},
              ]}
              onPress={() => {
                validate();
                signup();
              }}>
              <Text style={styles.btnText}>{'Signup'}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text
            style={styles.signupText}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            already have Account? <Text style={styles.signup}> Login</Text>
          </Text>
        </View>
      </ScrollView>
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
    marginTop: Dimensions.get('window').height / 65,
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
    marginBottom: 100,
  },
  signup: {
    fontSize: 20,
    fontWeight: '700',
    color: THEME_COLOR,
    // marginLeft: 10,
  },
  heading: {
    color: Text_COLOR,
    marginLeft: 30,
    marginTop: 10,
  },
  genderView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  genderbtn: {
    width: '45%',
    height: 90,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  genderIcon: {
    height: 40,
    width: 40,
  },
});
export default SignUp;
