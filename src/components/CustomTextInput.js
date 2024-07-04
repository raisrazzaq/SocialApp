import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({
  mt,
  placeholder,
  onChangeText,
  isValid,
  keyboardType,
  value,
  icon,
}) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 0.4,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: mt ? mt : 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
      }}>
      {icon && (
        <Image
          source={icon}
          style={{width: 24, height: 24, tintColor: '#9e9e9e'}}
        />
      )}

      <TextInput style={{marginLeft: 10}} placeholder={placeholder} />
    </View>
  );
};

export default CustomTextInput;
