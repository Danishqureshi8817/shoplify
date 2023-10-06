import { StyleSheet, Text, View,Pressable,FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../../styles/colors';
import { wHeight, wWidht } from '../../utiles/Dimensions';
import { PromotionsData, allData } from '../../constants/DemoData';
import { notificationImg } from '../../constants/imagePath';



const Notification = ({navigation}) => {

    const [selectedOption, setSelectedOption] = useState('All')


    const Item = ({item, onPress,index}) => (
     
        <View style={[styles.cardWrapper,{flexDirection:!item.img ? 'row':'column', height: !item.img ? responsiveHeight(15):responsiveHeight(28),marginTop:(index===0)?responsiveHeight(1):0}]} >
         
  { !item.img && <View style={styles.cardLine}></View>}

  { item.img && <Image source={item.img} style={{resizeMode:'cover',width:'100%',height:responsiveHeight(15)}} /> }
        
         <View style={[styles.cardContianWrapper,{ alignSelf:!item.img ? 'center' :'auto'}]} >
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
         <View>
         <Text style={styles.cardHeading} >{item.titel}</Text>
     { item.descrp &&  <Text style={styles.cardDescrp} >{item.descrp}</Text>}
     { item.mrp &&  <Text style={styles.cardDescrp} >{item.mrp}</Text>}
     { item.offerPrice &&  <Text style={styles.cardDescrp} >{item.offerPrice}</Text>}


         </View>
    
         { !item.img && <Text style={styles.cardNew} >NEW</Text> }
         {/* <Text style={styles.cardNew} >NEW</Text>  */}

        </View>

        <TouchableOpacity style={styles.cardButton} >
            <Text style={styles.cardButtonText} >SHOP NOW</Text>
        </TouchableOpacity>

         </View>



        
           
                 
        </View>
    
      );


      const renderItem = ({item,index}) => {
        // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        // const color = item.id === selectedId ? 'white' : 'black';
         
       { item.img && console.log('image item');}
        return (
          <Item
            item={item}
            index={index}
            onPress={() => {console.warn('ADD-On')}}
            // backgroundColor={backgroundColor}
            // textColor={color}
          />
        );
      };


  return (
    <View style={styles.mainContainer} >
       
       <View style={styles.headerWrapper} >
       <Pressable onPress={()=>{navigation.goBack()}} >
       <Icon
          name="arrow-back-outline"
          size={responsiveWidth(6)}
          color={colors.black}
        /> 
     
       </Pressable>

       <Text style={styles.headerText} > Notifications </Text>
       </View>

       <View style={styles.optionsWrapper} >
         <View style={styles.subOptionsWrapper} >
         <Pressable onPress={()=>{setSelectedOption('All')}} styles={{}} >
         <Text style={[styles.optionsText,{borderRightWidth:1,borderRightColor:colors.black,backgroundColor:selectedOption ==='All'?colors.black:colors.white,
         color:selectedOption ==='All'?colors.white:colors.black}]} >All</Text>
         </Pressable>
         
         <Pressable>
         <Text style={[styles.optionsText,{borderRightWidth:1,borderRightColor:colors.black,color:colors.blackOpacity40}]} >Order Updates</Text>
         </Pressable>
          
          <Pressable onPress={()=>{setSelectedOption('Promotions')}}  >
          <Text style={[styles.optionsText,{backgroundColor:selectedOption ==='Promotions'?colors.black:colors.white,
         color:selectedOption ==='Promotions'?colors.white:colors.black}]} >Promotions</Text>
          </Pressable>
       

         </View>
        
       </View>
      
      <View style={{flex:1}}>
      <FlatList
    //    style={{marginTop:responsiveHeight(2)}}
        data={selectedOption === 'All'?allData:selectedOption === 'Promotions'&& PromotionsData}
       showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={ item => item.id}
        // extraData={selectedId}
      />
      </View>

       

    </View>
  )
}

export default Notification

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:colors.themeColor,
    },
    headerWrapper:{
        flexDirection:'row',
        alignItems:'center',
        width:wWidht,
        height:wHeight*0.07,
       paddingHorizontal:responsiveWidth(2),
        gap:responsiveWidth(4),
       paddingVertical:responsiveHeight(1),
        // elevation:5,
        borderBottomWidth:1,
        borderBottomColor:colors.blackOpacity15,
        backgroundColor:colors.white
        
    },
    headerText:{
        color:colors.black,
        fontSize:responsiveFontSize(2.1),
        fontWeight:'500'
    },
    optionsWrapper:{

   
        backgroundColor:colors.white,
        paddingVertical:responsiveHeight(2),
        paddingHorizontal:responsiveWidth(4),
  


    },
    subOptionsWrapper:{
        borderWidth:1,
        flexDirection:'row',
        // justifyContent:'space-around',
        // paddingVertical:responsiveHeight(0.5),
        // gap:responsiveWidth(3),
        alignSelf:'center',
        borderRadius:responsiveWidth(2),
        overflow:'hidden'

    },
    optionsText:{
        backgroundColor:colors.white,
        textAlign:'center',
        paddingHorizontal:responsiveWidth(8),
        // flex:1,
        color:colors.black,
        paddingVertical:responsiveHeight(0.8),
        fontSize:responsiveFontSize(1.5),
        // fontWeight:'500'

    },
    cardWrapper:{
        marginHorizontal:responsiveWidth(3),
        backgroundColor:colors.white,
        marginBottom:responsiveHeight(1),
        borderRadius:responsiveWidth(2),
        overflow:'hidden',
        elevation:3
       
        
        // justifyContent:'space-between'
        // alignItems:'center'
        // alignSelf:'center'
        
    },
    cardLine:{
        borderRightWidth:responsiveWidth(1.5),
        borderRightColor:'#f09f0e'

    },
    cardContianWrapper:{
        marginLeft:responsiveWidth(2),
        // alignSelf:'center',
        flex:1

    },
    cardHeading:{
        // width:responsiveWidth(50),
        fontSize:responsiveFontSize(1.8),
        fontWeight:'500',
        color:colors.blackOpacity80,
        marginBottom:responsiveHeight(0.3)
    },
    cardDescrp:{
        fontSize:responsiveFontSize(1.5),
        color:colors.blackOpacity70
    },
    cardNew:{
      backgroundColor:'#ff7778',
      paddingHorizontal:responsiveWidth(0.5),
      fontSize:responsiveFontSize(1.5),
      color:colors.blackOpacity80
     
    },
    cardButton:{
        // alignSelf:'center',
        borderWidth:1,
        paddingVertical:responsiveHeight(1.5),
        marginRight:responsiveWidth(3),
        marginTop:responsiveHeight(2),
        borderColor:colors.black,
        borderRadius:responsiveWidth(2)

    },
    cardButtonText:{
        textAlign:'center',
        color:colors.black,
        fontSize:responsiveFontSize(1.7),
        fontWeight:'500'
    }

})