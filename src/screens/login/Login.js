import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  BG_COLOR,
  THEME_COLOR,
  THEME_COLOR2,
  Text_COLOR,
} from '../../utlis/Color';
import CustomTextInput from '../../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
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
        />
        <CustomTextInput
          icon={require('../../assets/png/padlock.png')}
          placeholder={'Enter password'}
        />
        <LinearGradient colors={[THEME_COLOR, THEME_COLOR2]} style={styles.btn}>
          <TouchableOpacity
            style={[
              styles.btn,
              {justifyContent: 'center', alignItems: 'center', marginTop: 0},
            ]}>
            <Text style={styles.btnText}>{'Login'}</Text>
          </TouchableOpacity>
        </LinearGradient>
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
});
export default Login;
