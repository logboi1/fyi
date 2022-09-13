import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Splash = ({navigation}) => {
  function SigninNavigate() {
    navigation.navigate('Signin');
  }

  function SignupNavigate() {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Text style={{color: '#CFFE58', fontSize: 70, fontStyle: 'italic'}}>
          Swift
        </Text>
      </View>
      <View>
        <Text style={styles.text}>Qiuckest way</Text>
        <Text style={styles.text2}>to share links</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={SignupNavigate}>
        <Text style={styles.btntext}>Sign up</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{color: '#FFFFFF'}}>Already have a account?</Text>
        <TouchableOpacity onPress={SigninNavigate}>
          <Text
            style={{
              color: '#CFFE58',
              borderBottomColor: '#CFFE58',
              borderBottomWidth: 1,
              marginLeft: 2,
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1817',
  },
  img: {
    height: '50%',
  },
  text: {
    color: '#E9713F',
    fontSize: 50,
    textAlign: 'justify',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 50,
    textAlign: 'justify',
  },
  btn: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    width: '90%',
    paddingVertical: 14,
    marginTop: 20,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Splash;
