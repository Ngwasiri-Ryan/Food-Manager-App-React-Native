import { View, Text ,TouchableOpacity, TextInput, StyleSheet, FlatList, Dimensions} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { data } from '../constants/constants';
import { FontAwesome5 } from '@expo/vector-icons';


const AddItemScreen = ({navigation}) => {

    const windowHeight = Dimensions.get('window').height;

    const [selectedItem, setSelectedItem] = useState(null);

    {/**rendering data for quantity types */}
    const renderItem = ({ item }) => (
        <TouchableOpacity style={[
            styles.item,
            selectedItem === item.id && { borderColor: '#FF7F00' , borderWidth:1},
          ]}
          onPress={() => setSelectedItem(item.id)}
          >
          <Text style={[styles.text, selectedItem === item.id && { color: '#FF7F00' }]}>{item.word}</Text>
        </TouchableOpacity>
      );

      const renderSeparator = () => (
        <View style={styles.separator}/>
      );

  return (
   <SafeAreaView style={styles.Maincontainer}>
     <View style={styles.container}>
  {/**Header */}
    <View style= {styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}> 
       <Feather name="chevron-left" size={30} color="black" style={{marginRight:20}} />
    </TouchableOpacity>
      <Text style= {styles.headerName}>Add New Food</Text>
    </View> 

    {/**Navigator */}
        <View style={styles.navigatorContainer}>
        {/**ADD ITEM */}
            <View style={styles.FirstNav}>
                <Text style={styles.NavText1}>Add Manually</Text>
            </View>
        {/**SCAN QR CODE */}
            <View style={styles.SecondNav}>
                <Text style={styles.NavText2}>Scan QR Code</Text>
            </View>
        </View>
    {/**End of navigator */}

    {/*form */}
    <View style={styles.form}>

     {/**first input */}
    <View style={styles.input}>
        <Text>Name</Text>
        <TextInput
        style={styles.textInput} 
         />
    </View>

    {/**quantity flatlist options */}
    <View>
        <Text>Quantity</Text>
    </View>

    <FlatList
    style={{top:20,marginBottom:50}}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={renderSeparator}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
    {/**end of quantitu options */}

    {/**expiry date */}
    <View style={styles.input}>
      <Text>Expiry Date</Text>
        <View style={styles.holder} >
            <TextInput
            style={{width:'90%', backgroundColor:'transparent'}}
             />
             <FontAwesome5 name="calendar-alt" size={24} color="black" />
        </View>
    </View>


     {/**BOTTOM CONTAINER */}
       <View style={{ bottom: windowHeight * -0.25 }}>
          <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Add Food</Text>
          </TouchableOpacity>
       </View>
    
    </View>
  </View>
</SafeAreaView>
  )
}

export default AddItemScreen

const styles = StyleSheet.create({
    Maincontainer:{
        flex:1,
        backgroundColor:'#E0E0E0',
        borderRadius:15,
        marginHorizontal:12,
        marginVertical:12,
    },
    container:{
        marginHorizontal:20,
    },
    header: {
        display:'flex',
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:20,
        alignItems:'center',
    },
    headerName:{
        fontSize: 20,
    },
    navigatorContainer:{
        width:'100%',
        height:'10%',
        alignItems:'center',
        flexDirection:'row',
        borderColor:"#FF7F00",
        borderWidth:1,
    },
    FirstNav:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'baseline',
        backgroundColor:"#FF7F00", 
    },
    SecondNav:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'baseline',
        backgroundColor:"#FFF", 
    },
    NavText1:{
        color:'#fff',
        fontSize:13,
        textAlign:'center',
        marginLeft:'25%'
    },
    NavText2:{
        color:'#FF7F00',
        fontSize:13,
        textAlign:'center',
        marginLeft:'20%'
    },
    form:{
       top:30,
    },
    input: {
       gap:10,
       width:'100%',
       marginBottom:20,
    },
    input2: {
        gap:10,
        width:'100%',
        marginBottom:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
     },
    textInput: {
        backgroundColor: '#fff', // Set background color to transparent
        borderWidth: 0, // Remove border
        borderRadius: 5, // Apply border radius
        padding: 10, // Add padding for better appearance
        color: 'black', // Set text color
      },
      textInput2: {
        backgroundColor: 'red', // Set background color to transparent
        borderWidth: 0, // Remove border
        borderRadius: 5, // Apply border radius
        padding: 10, // Add padding for better appearance
        color: 'black', // Set text color
      },
    item:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'transparent', // Initial border color
    },
    separator: {
        width: 10, // Adjust spacing width as needed
      },
    text:{
        fontSize:15,
    },
    holder:{
        width:'100%',
         backgroundColor:'red',
         flexDirection:'row',
         padding:10,
         backgroundColor:'#fff',
         borderRadius:5,
    },
      button: {
        backgroundColor: '#FF7F00',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      },
})