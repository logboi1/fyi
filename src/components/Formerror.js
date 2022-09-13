import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, Overlay, Icon} from '@rneui/themed';

const Formerror = props => {
  return (
    <Overlay
      overlayStyle={styles.overlay}
      isVisible={true}
      onBackdropPress={() => props.hideErrForm(false)}>
      <Text style={styles.erroricon}>!</Text>
      <Text style={styles.errortext}>{props.err}</Text>
      <TouchableOpacity
        style={styles.Btn}
        onPress={() => props.hideErrForm(false)}>
        <Text style={styles.btnText}>Okay</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

export default Formerror;

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
    backgroundColor: 'red',
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
