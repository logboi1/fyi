import * as React from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Button, Overlay, Icon} from '@rneui/themed';

const Formsuccess = props => {
  return props.successMessage ? (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.close('')}>
      <Text style={styles.erroricon}>!</Text>
      <Text style={styles.errortext}>{props.successMessage}</Text>
      <TouchableOpacity style={styles.Btn} onPress={() => props.close('')}>
        <Text style={styles.btnText}>Okay</Text>
      </TouchableOpacity>
    </Overlay>
  ) : (
    <Overlay overlayStyle={styles.overlay} isVisible={true}>
      <ActivityIndicator size={100} color={'#0F1817'} />
    </Overlay>
  );
};

export default Formsuccess;

const styles = StyleSheet.create({
  overlay: {
    width: '80%',
    height: 349,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  erroricon: {
    width: 72,
    height: 72,
    backgroundColor: 'green',
    color: '#ededed',
    borderRadius: 50,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  errortext: {
    color: '#0F1817',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  Btn: {
    borderRadius: 20,
    backgroundColor: '#0F1817',
    width: '90%',
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  btnText: {
    color: '#ededed',
  },
});
