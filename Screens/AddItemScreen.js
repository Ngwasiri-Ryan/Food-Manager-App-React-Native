import { View, Text ,TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddItemScreen = ({navigation}) => {
  return (
   <SafeAreaView>
      {/**Header */}
    <View style= {styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}> 
       <Feather name="chevron-left" size={30} color="black" style={{marginRight:20}} />
    </TouchableOpacity>
    
      <Text style= {styles.headerName}>Add New Food</Text>
    </View> 


   </SafeAreaView>
  )
}

export default AddItemScreen

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        flex:1,
    },
    header: {
        display:'flex',
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
    },
    headerName:{
        fontSize: 20,
    },
    headerUnder:{
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:10,
    },
    addIcon:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
    },
    box:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        width:'100%',
        height: 78,
        marginBottom:15,
    },
    imgbox:{
        width:'27%',
        height:'100%',
        backgroundColor:'#cccc',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
    },
    image:{
        height:'80%',
        width:'80%',
    },
    content:{
         flex:1,
         justifyContent:'center',
         gap:10,
    },
    flexed:{
        width:'98%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    flex:{
        width:'98%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',    
        gap:20,  
    },
    bigText:{
        fontSize:18,
        fontWeight:'bold'
    },
    bigText2:{
        fontSize:14,
        fontWeight:'bold',
    },
    smallText:{
        fontSize:11, 
    }
    
})