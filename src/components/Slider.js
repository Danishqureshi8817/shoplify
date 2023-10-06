import React from 'react';
import { Text, Dimensions, StyleSheet, View,Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import colors from '../styles/colors';
import { bg1, bg2, bg3, bg4, bg5, bg6 } from '../constants/imagePath';

// const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const carouselData = [
 
     bg1
    ,
    
    bg2
    ,
  
       bg3
    
]


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Slider = ({image}) => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={image}
      paginationActiveColor={colors.gray}
      paginationStyleItem={{width:responsiveWidth(6),height:responsiveHeight(0.5),marginTop:responsiveHeight(1)}}
      paginationStyleItemInactive={{backgroundColor:colors.white}}
      renderItem={({ item }) =>{ 
        // console.log("slider",item)
     return (
        <View style={[styles.child, ]}>
          <Image source={item} style={{width:WIDTH,height:'100%',resizeMode:'contain'}} />
        </View>
      )}
      }
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { height:HEIGHT*0.15,justifyContent:'center',overflow:'hidden',width:WIDTH },
  child: { width:WIDTH, justifyContent: 'center', },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Slider;