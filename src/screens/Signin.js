import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {auth} from '../../Firebase/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

import Formerror from '../components/Formerror';
import Formsuccess from '../components/Formsuccess';

const Signin = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState();
  const [displayFormErr, setDisplayFormErr] = React.useState(false);
  const [errMessage, setErrorMessage] = React.useState('');

  function navigate() {
    navigation.navigate('Signup');
  }

  const validate_input = () => {
    var form_inputs = [email, password];

    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      setErrorMessage('Please fill in all fields');
      return setDisplayFormErr(true);
    }
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setIsLoading(false);
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
  };

  return (
    <View style={styles.mainview}>
      {displayFormErr == true ? (
        <Formerror hideErrForm={setDisplayFormErr} err={errMessage} />
      ) : null}

      {isLoading == true ? <Formsuccess /> : null}

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
          Welcome {'\n'}
          <Text style={{color: '#E9713F', fontWeight: 'bold'}}>Back</Text>
        </Text>

        <View style={styles.Formview}>
          <TextInput
            style={styles.TextInput}
            onChangeText={val => setEmail(val)}
            value={email}
            placeholder={'Email address*'}
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

          <TouchableOpacity style={styles.Btn} onPress={validate_input}>
            <Text style={styles.BtnText}>Sign in</Text>
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
          <Text style={{color: '#0F1817'}}>Sign up</Text>
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
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bottomview: {
    width: '100%',
    height: '60%',
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
    marginTop: 30,
    color: '#000',
  },
  heading: {
    fontSize: 36,
    color: '#0F1817',
    marginTop: 50,
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

export default Signin;
