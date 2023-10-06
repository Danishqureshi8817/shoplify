import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../styles/colors';

const HomeTopCategories = ({data}) => {
  

    const Item = ({item}) => (
        <TouchableOpacity onPress={()=>{alert("Clicked")}} style={styles.categoryWrapper}>
      { item?.name ? 
      <>
      <Image source={item.img}  style={[styles.categoryIcon,{height:responsiveHeight(10)}]} />
        <Text style={styles.categoryText}>{item?.name}</Text>
        </> : <Image source={item.img} style={[styles.categoryIcon,{height:item?.name?responsiveHeight(10):'100%'}]}/> }
        </TouchableOpacity>
      );
    

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={data}
    renderItem={({item}) => <Item item={item} />}
    keyExtractor={item => item.id}
  />
  )
}

export default HomeTopCategories

const styles = StyleSheet.create({
   categoryIcon:{
    resizeMode:'contain',
    width:responsiveWidth(20),
    // height:responsiveHeight(10),
    alignSelf:'center'
   },
   categoryWrapper:{
    // alignSelf:'center',
    width:responsiveWidth(20),
    height:responsiveHeight(13),
    justifyContent:'center',
    

    // justifyContent:'center',
    // alignItems:'center'
   },
   categoryText:{
    textAlign:'center',
    fontSize:responsiveFontSize(1.3),
    fontWeight:'600',
    color:colors.black,
    
   }
})