import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Share = () => {
  let logoFromFile = require('../assets/user.png');
  return (
    <View style={styles.container}>
      <View style={styles.Topview}></View>
      <View style={styles.Bottomview}>
        <View style={styles.EachView}>
          <Text style={styles.text}>QR code</Text>
          <Text style={styles.textinfo}>
            Share your unique QR code and it will redirect people to your
            profile when scanned
          </Text>
        </View>
        <View style={styles.EachView}>
          <QRCode
            style={{marginTop: 10}}
            value="share.me/kinseylocke"
            size={200}
            logo={logoFromFile}
            logoSize={30}
            logoBorderRadius={50}
            logoBackgroundColor="#CFFE58"
            logoMargin={2}
          />
          <Text
            style={{
              color: '#0F1817',
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 10,
            }}>
            share.me/kinseylocke
          </Text>
        </View>

        <View style={styles.EachViewBtn}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0F1817',
              paddingHorizontal: 50,
              borderRadius: 30,
              paddingVertical: 15,
              margin: 3,
            }}>
            <Text style={{color: '#ededed', fontWeight: 'bold', fontSize: 16}}>
              Share link
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#0F1817',
              backgroundColor: 'transparent',
              borderWidth: 1,
              paddingHorizontal: 30,
              borderRadius: 30,
              paddingVertical: 15,
              margin: 3,
            }}>
            <Text style={{color: '#0F1817', fontWeight: 'bold', fontSize: 16}}>
              Save as photo
            </Text>
          </TouchableOpacity>
        </View>
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
  EachView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EachViewBtn: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#0F1817',
    fontSize: 50,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  textinfo: {
    textAlign: 'center',
    fontSize: 16,
    paddingLeft: 80,
    paddingRight: 80,
  },
  Topview: {
    width: '100%',
    height: '10%',
  },
  Bottomview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFFFFF',
  },
});

export default Share;
