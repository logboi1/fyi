import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Home =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0F1817',
    },
    text:{
        color:'#E9713F',
        fontSize:50,
        textAlign:'justify'
      },
  });
  

export default Home;