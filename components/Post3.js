import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Post() {
    return (
      <View style={styles.fullpost}>
            <View style={styles.org}>
                <Image style={styles.fotoOrg} source={require('../assets/post3.png')}/>
                <Text style={styles.nomeOrg}>ONG Nossa Esperança</Text>
            </View>
            <Image style={styles.foto} source={require('../assets/post3.png')}/>
            <Text style={styles.texto} >Cuidar do nosso planeta é a missão mais importante que temos, pois sem ele não temos nada</Text>

      </View>
    );
  }

  const styles = StyleSheet.create({

    foto:{
        height:400,
        width:380,
        borderRadius:10,
    },

    org:{
        display:'flex',
        flexDirection:'row',
        marginBottom:8,
        textAlign:'center',
        alignItems:'center',
    },

    nomeOrg:{
        fontSize:15,
        fontWeight:'bold',
    },

    fotoOrg:{
        height:30,
        width:30,
        borderRadius:50,
        marginRight:5,
    },

    fullpost:{
        backgroundColor:'#e7e9e8',
        padding:5,
        maxWidth:400,
        borderRadius:7,
        marginBottom:30,
    },

    texto:{
        marginTop:2,
        fontSize:18,
    },

    like:{
        marginTop:3,
        padding:5,
        height:20,
        width:20,
    },

  });