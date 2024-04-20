import { View, Text ,Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
        <View>
           {/* welcome text */}
           <Text style={styles.Welcome}>Welcome to <Text style={styles.appName}> Food Manager |</Text></Text>
           
             
             {/*image */}
            <View style={styles.imgbox}>
                <Image
                 source={require('../assets/images/img.png')}
                 style={styles.image}
                />
             </View>

           {/*button */}
           <View style={styles.container}>
             <TouchableOpacity 
             onPress={() => navigation.navigate("ItemsScreen")}
             style= {styles.button} >
                <Text style= {styles.text}>Get Started</Text>
             </TouchableOpacity>
           </View>
          
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      gap:10,
    },
    text: {
      fontSize: 19,
      fontWeight: 'bold',
      color: '#fff',
    },
    button: {
        width: 300,
        height:70,
        padding:5,
        borderRadius:50,
        backgroundColor:'#FF7F00',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:60,
        paddingRight:60,
    },
    Welcome:{
        fontSize:26,
        fontWeight: '800',
        textAlign:'center',
        paddingTop:30,
  },
  appName:{
    fontSize:26,
    fontWeight: '800',
    color:'#FF7F00',
},
  imgbox:{
         width: 350,
         height:400,
         marginTop:80,
  }, 
  image:{
    width:'100%',
    height:'100%',
  }
});