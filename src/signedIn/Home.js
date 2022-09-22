import {Image} from '@rneui/base';
import {Icon} from '@rneui/themed';
import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signOut} from 'firebase/auth';
import {auth} from '../../Firebase/firebase';

const Home = ({navigation, route}) => {
  function navigate() {
    navigation.navigate('Share');
  }

  const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.Topview}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 30,
          }}>
          <View>
            <Image
              style={styles.userpic}
              source={require('../assets/user.png')}
            />
          </View>
          <View>
            <Text style={styles.textFunfun}>Kinsey Locke </Text>
            <Text
              style={{
                color: '#0F1817',
                backgroundColor: '#CFFE58',
                width: '100%',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 6,
                paddingHorizontal: 8,
                paddingVertical: 1,
              }}>
              Sales manager at Meta
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 8,
            justifyContent: 'center',
          }}>
          <Text style={styles.TextInput}>share.me/kinseylocke</Text>
          <TouchableOpacity>
            <Icon
              onPress={navigate}
              style={styles.Icon}
              name="rocket1"
              type="antdesign"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Bottomview}></View>
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
  text: {
    color: '#E9713F',
    fontSize: 50,
    textAlign: 'justify',
  },
  userpic: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },

  textFunfun: {
    color: '#ededed',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  TextInput: {
    width: '80%',
    height: 38,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 30,
    fontSize: 16,
    marginTop: 30,
    color: '#ededed',
    height: 40,
    padding: 5,
    paddingLeft: 10,
    textAlign: 'left',
  },
  Topview: {
    width: '100%',
    height: '30%',
  },
  Bottomview: {
    width: '100%',
    height: '70%',
    backgroundColor: '#FFFFFF',
  },
  Icon: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 30,
    backgroundColor: '#ededed',
    marginLeft: 20,
    padding: 6,
  },
});

export default Home;
