import { View, Text , StyleSheet , FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { items } from '../constants/constants'

const ItemsScreen = ({navigation}) => {
   
  return (
   <SafeAreaView style= {styles.container}>
     {/**Header */}
    <View style= {styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}> 
       <Feather name="chevron-left" size={30} color="black" style={{marginRight:20}} />
    </TouchableOpacity>
    
      <Text style= {styles.headerName}>Food Manager</Text>
    </View> 

    {/**ingredient quantity and new button */}
    <View style={styles.headerUnder}> 
        <Text style={{fontWeight:'bold'}}>ingredients({items.length})</Text>
    <TouchableOpacity  onPress={() => navigation.navigate("AddItemScreen")}>
        <View style={styles.addIcon}>
          <Ionicons name="add-circle-outline" size={24} color="#FF7F00" />
          <Text style={{color:'#FF7F00'}}>Add New</Text>
        </View>
    </TouchableOpacity>
       
    </View>

    {/**itemlist */}
    <View style={{flex:1}}>
      <FlatList data={items} renderItem={({item})=>
      <View style={styles.box}>
        {/**image */}
         <View style={styles.imgbox}>
           <Image source={item.image} style={styles.image}/> 
         </View>
        {/*flexed box */}
        <View style={styles.content}>
            {/**item name and quantity */}
            <View style={styles.flex}>
                <Text style={styles.bigText}>{item.name}</Text>
                <Text style={styles.bigText2}>{item.quantity}</Text>
            </View>
            {/*added date and expiry date */}
            <View style={styles.flexed}>
                <Text style={styles.smallText}>Added:{item.added_date}</Text>
                <Text style={styles.smallText}>Exp:{item.expiry_date}</Text>
            </View>

        </View>

     </View>
     }
    showsVerticalScrollIndicator={false}
  />
    </View>

   </SafeAreaView>
  )
}

export default ItemsScreen
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
        backgroundColor:'#DDDDDD',
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