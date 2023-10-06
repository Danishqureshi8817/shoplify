import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

const DealSlider = ({images}) => {

    console.log('dealslider')

    const Item = ({item, onPress}) => (
        <TouchableOpacity onPress={onPress}>
          <Image source={item} style={styles.lineBrandProduct} />
        </TouchableOpacity>
      );
    
      const renderItem = ({item}) => {
        // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        // const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => {
              console.warn('bnd');
            }}
            // backgroundColor={backgroundColor}
            // textColor={color}
          />
        );
      };

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={images}
    renderItem={renderItem}
    keyExtractor={index => index}
    // extraData={selectedId}
  />
  )
}

export default DealSlider

const styles = StyleSheet.create({

    lineBrandProduct: {
        resizeMode: 'contain',
        width: responsiveWidth(60),
        height: responsiveHeight(36),
      },

})