import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Formerror from '../components/Formerror';
import Formsuccess from '../components/Formsuccess';

import {auth} from '../../Firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Signup = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  // text input states
  const [successMessage, setSuccessMessage] = React.useState('');
  const [mobile, setMobile] = React.useState();
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [displayFormErr, setDisplayFormErr] = React.useState(false);
  const [errMessage, setErrorMessage] = React.useState('');

  function navigate() {
    navigation.push('Signin');
  }

  function createUser() {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setIsLoading(false);
        setSuccessMessage('Your account has been created Successfully');
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        setIsLoading(false);
        const errorMessage = error.code;
        console.log(error.code);
        setErrorMessage(errorMessage);
        return setDisplayFormErr(true);
      });
  }

  const validate_form = () => {
    var form_inputs = [fullname, email, mobile, password, confirmPassword];
    var password_match = password === confirmPassword;

    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      setErrorMessage('Please fill in all fields');
      return setDisplayFormErr(true);
    }

    if (!password_match) {
      setErrorMessage('Please fill in all fields');
      return setDisplayFormErr(true);
    }

    if (password_match) createUser();
  };

  return (
    <View style={styles.mainview}>
      {displayFormErr == true ? (
        <Formerror hideErrForm={setDisplayFormErr} err={errMessage} />
      ) : null}

      {isLoading == true ? (
        <Formsuccess />
      ) : successMessage == 'Your account has been created Successfully' ? (
        <Formsuccess
          successMessage={successMessage}
          close={setSuccessMessage}
        />
      ) : null}

      <View style={styles.Topview}>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 50,
            fontStyle: 'italic',
          }}>
          Swift
        </Text>
        <Text
          style={{
            color: '#0F1817',
            backgroundColor: '#CFFE58',
            width: '70%',
            textAlign: 'center',
            borderRadius: 10,
            paddingVertical: 1,
          }}>
          Qiuckest way to share links
        </Text>
      </View>
      <View style={styles.Bottomview}>
        <Text style={styles.heading}>
          Create {'\n'}
          <Text style={{color: '#E9713F', fontWeight: 'bold'}}>Account</Text>
        </Text>

        <View style={styles.Formview}>
          <TextInput
            onChangeText={val => setFullname(val)}
            value={fullname}
            style={styles.TextInput}
            placeholder={'Full name*'}
            placeholderTextColor={'#0F1817'}
          />
          <TextInput
            onChangeText={val => setEmail(val)}
            value={email}
            style={styles.TextInput}
            placeholder={'Email address*'}
            placeholderTextColor={'#0F1817'}
          />
          <TextInput
            onChangeText={val => setMobile(val)}
            value={mobile}
            style={styles.TextInput}
            placeholder={'Mobile*'}
            placeholderTextColor={'#0F1817'}
          />
          <TextInput
            onChangeText={val => setPassword(val)}
            value={password}
            style={styles.TextInput}
            secureTextEntry={true}
            placeholder={'Password*'}
            placeholderTextColor={'#0F1817'}
          />
          <TextInput
            onChangeText={val => setConfirmPassword(val)}
            value={confirmPassword}
            style={styles.TextInput}
            secureTextEntry={true}
            placeholder={'Confirm Password*'}
            placeholderTextColor={'#0F1817'}
          />

          <TouchableOpacity onPress={validate_form} style={styles.Btn}>
            <Text style={styles.BtnText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={navigate}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: '#0F1817'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1817',
  },
  Topview: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bottomview: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },

  Formview: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },

  TextInput: {
    width: '90%',
    height: 52,
    borderWidth: 1,
    borderColor: '#0F1817',
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 15,
    color: '#000',
  },
  heading: {
    fontSize: 36,
    color: '#0F1817',
    marginTop: 20,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  Btn: {
    borderRadius: 20,
    backgroundColor: '#0F1817',
    width: '90%',
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  BtnText: {
    color: '#CFFE57',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Signup;
