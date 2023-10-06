import { StyleSheet, Text, View,ScrollView, TouchableHighlight,Image } from 'react-native'
import React,{useEffect,useLayoutEffect,useState} from 'react'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Foundation';
import OIcon from 'react-native-vector-icons/Octicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import { wHeight } from '../../utiles/Dimensions';
import { fb, menuImg } from '../../constants/imagePath';
import Divider from '../../components/Divider';
import navigationStrings from '../../constants/navigationStrings';

 
const Menu = ({navigation}) => {

// console.log(navigation);

 //Header

 useLayoutEffect(() => {
   
    navigation.setOptions({
        
     headerLeft:()=>(<Icon onPress={()=>{navigation.navigate('Tabs')}}  name='close-outline' size={responsiveWidth(7)} color={colors.black} />),
     headerTitleStyle:{color:colors.themeText, fontSize:responsiveFontSize(2.2),fontWeight:'700',letterSpacing:1,textTransform:'lowercase'},headerTitle:'SHOPIFLY',headerTitleAlign:'center',
     headerRight:()=>(
      <View style={{gap:responsiveWidth(4),flexDirection:'row'}}>
 <Icon onPress={()=>{navigation.navigate('Tabs')}}  name='home-outline' size={responsiveWidth(6)} color={colors.black} />
 {/* <Icon  name='search' size={responsiveWidth(6)} color={colors.black} /> */}
      </View>
    ),
    })
 }, [])



  return (
    <View style={styles.mainConatiner} >
      
      <Text style={styles.shopText} >Shop by</Text>
      
      <ScrollView style={styles.scrollWrapper} showsVerticalScrollIndicator={false} >

      {/* <FIcon name="burst-new" size={responsiveWidth(5)} color={colors.gray}/> */}
      <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate(navigationStrings.Login)}} style={styles.buttonWrapper} >
      <>
        
       <View style={styles.buttonSubWrapper} >
        <FIcon  name="burst-new" size={responsiveWidth(7)} color={colors.black}/>
         <Text style={styles.buttonText} >New Season</Text>
         </View>
         <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
         </>
       </TouchableHighlight>

      <Divider/>

      <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <MIcon  name="face-woman-outline" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Women</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>

          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <MIcon  name="face-man-outline" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Men</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <MIcon  name="baby-face-outline" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Kids</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <MIcon  name="safety-goggles" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Accessories</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <Icon  name="home-outline" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Home & Kitchen</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <MIcon  name="mirror" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Beauty</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <FIcon  name="burst-new" size={responsiveWidth(7)} color={colors.black}/>
         <Text style={styles.buttonText} >Jewellery</Text>
        </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        
        <View style={styles.buttonSubWrapper} >
         <MIcon  name="lingerie" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >Lingerie</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 
       <Divider/>

       <TouchableHighlight   activeOpacity={0.6} underlayColor={colors.white} onPress={()=>{navigation.navigate('')}} style={styles.buttonWrapper} >
      <>
        <View style={styles.buttonSubWrapper} >
         <Icon  name="gift-outline" size={responsiveWidth(7)} color={colors.black}/>
          <Text style={styles.buttonText} >E-gift Card</Text>
          </View>
          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
          </>
       </TouchableHighlight>
 

         
         


     
          
      </ScrollView>
      
      <Image source={menuImg} style={styles.menuimg} />

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    mainConatiner:{
        flex:1,
        backgroundColor:colors.themeColor,
        
        
      },
      shopText:{
        color:colors.black,
        fontSize:responsiveFontSize(1.8),
        marginTop:responsiveHeight(3),
        marginBottom:responsiveHeight(2),
        marginHorizontal:responsiveWidth(5)
      },
      scrollWrapper:{
        backgroundColor:colors.white,
        borderRadius:responsiveWidth(2),
        marginHorizontal:responsiveWidth(5),
        marginBottom:responsiveHeight(3)

      },
      menuimg:{
        width:'100%',
        height:'9%',
        resizeMode:'cover'

      },
      buttonWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:responsiveWidth(5),
        paddingVertical:responsiveWidth(4),
        alignItems:'center',
      },
      buttonSubWrapper:{
        flexDirection:'row',
        gap:responsiveWidth(5),
        alignItems:'center',

      },
      buttonText:{
        color:colors.black,
        fontSize:responsiveFontSize(1.9)
      },

})