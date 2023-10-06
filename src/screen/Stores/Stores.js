import { StyleSheet, Text, View , Image,FlatList,Pressable} from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import {ScrollView} from 'react-native-virtualized-view';
import { store} from '../../constants/imagePath';
import { wHeight, wWidht } from '../../utiles/Dimensions';
import Slider from '../../components/Slider';
import BestSelling from '../../components/BestSelling';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../../styles/colors';

const Stores = ({navigation}) => {


  const Item = ({item, onPress}) => (
    <Pressable  onPress={onPress}>
          <Image source={item} style={{width:wWidht/3,height:responsiveHeight(26),resizeMode:'stretch'}} />
    </Pressable>

  );



  const renderItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {console.warn('ADD-On')}}
        // backgroundColor={backgroundColor}
        // textColor={color}
      />
    );
  };

  const BrandItem = ({item, onPress}) => (
    <Pressable  onPress={onPress}>
          <Image source={item} style={{width:wWidht/3,height:responsiveHeight(19.3),resizeMode:'stretch'}} />
    </Pressable>

  );

    const renderBrand = ({item}) => {
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <BrandItem
        item={item}
        onPress={() => {console.warn('ADD-On')}}
        // backgroundColor={backgroundColor}
        // textColor={color}
      />
    );
  };

  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} >
       <HomeHeader navigation={navigation} />
       
       <Image source={store.storeTop} style={{width:wWidht,height:wHeight*0.14,resizeMode:'contain'}} />
       <BestSelling
          image={[ store.sd11,store.sd12,store.sd13,store.sd14,store.sd15 ]}
          sliderHeight={0.36}
        />
       <BestSelling image={[ store.store2sd1,store.store2sd2]}
          sliderHeight={0.54}
        />

        <Text style={styles.BrandTopic} >STYLES FOR <Text style={styles.BrandTopicSub} >EVERY MOOD</Text></Text>

        <View style={styles.emWrapper} >
          <Image source={store.em1} style={styles.everMImg} />
          <Image source={store.em2} style={styles.everMImg} />
          <Image source={store.em3} style={styles.everMImg} />
        </View>
        <Image source={store.emDivider} style={styles.everyMDivider} />

        <View style={styles.emWrapper} >
          <Image source={store.em4} style={styles.everMImg} />
          <Image source={store.em5} style={styles.everMImg} />
          <Image source={store.em6} style={styles.everMImg} />
        </View>
        <Image source={store.emDivider} style={styles.everyMDivider} />

        <View style={styles.emWrapper} >
          <Image source={store.em7} style={styles.everMImg} />
          <Image source={store.em8} style={styles.everMImg} />
          <Image source={store.em9} style={styles.everMImg} />
        </View>
        <Image source={store.emDivider} style={styles.everyMDivider} />

        <Text style={styles.BrandTopic} >THE PERFECT <Text style={styles.BrandTopicSub} >ADD-ONS</Text></Text>
        
        <FlatList
        data={[store.ad1,store.ad2,store.ad3,store.ad4,store.ad5,store.ad6]}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={index => index}
        // extraData={selectedId}
      />

        
        <Text style={styles.BrandTopic} >THE <Text style={styles.BrandTopicSub} >BRAND</Text> BRIGADE </Text>

        <BestSelling image={[ store.brigade1,store.brigade2,store.brigade3]}
          sliderHeight={0.23}
        />

        <Image source={store.emDivider} style={styles.everyMDivider} /> 

        <FlatList
        data={[store.brand1,store.brand2,store.brand3,store.brand4,store.brand5,store.brand6,store.brand7,store.brand8,store.brand9,store.brand10,store.brand11,store.brand12]}
        numColumns={3}
        renderItem={renderBrand}
        keyExtractor={index => index}
        // extraData={selectedId}
        />

       <Text style={styles.BrandTopic} >THERE'S MORE TO <Text style={styles.BrandTopicSub} >EXPLORE</Text></Text>

       <View style={styles.emWrapper} >
       <Image source={store.explore1} style={styles.everMImg} />
       <Image source={store.explore2} style={styles.everMImg} />
       <Image source={store.explore3} style={styles.everMImg} />
       </View> 
       <Image source={store.emDivider} style={styles.everyMDivider} />
       <View style={styles.emWrapper} >
       <Image source={store.explore4} style={styles.everMImg} />
       <Image source={store.explore5} style={styles.everMImg} />
       <Image source={store.explore6} style={styles.everMImg} />
       </View> 
       <Image source={store.emDivider} style={styles.everyMDivider} /> 
       <View style={styles.emWrapper} >
       <Image source={store.explore7} style={styles.everMImg} />
       <Image source={store.explore8} style={styles.everMImg} />
       <Image source={store.explore9} style={styles.everMImg} />
       </View> 
       <Image source={store.emDivider} style={styles.everyMDivider} />

       <View style={{paddingVertical:responsiveHeight(2)}}>
         <Text style={{textAlign:'center',color:colors.black,fontWeight:'600',fontSize:responsiveFontSize(2.3)}} >AJIO</Text>
         <Text style={{textAlign:'center',color:colors.black,fontWeight:'600',fontSize:responsiveFontSize(1.6)}} >
          We do not ask for your bank account or card details verbally or
          telephonically. Do not divulge these to fraudsters & Imposters
          claiming to be calling on our behalf.
         </Text>

       </View>  


    </ScrollView>
  )
}

export default Stores

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.white,
  },
  BrandTopic:{
    textAlign:'center',
    fontSize:responsiveFontSize(2.1),
    color:colors.gray,
    paddingVertical:responsiveHeight(3)
  },
  BrandTopicSub:{
    fontWeight:'bold',
    color:colors.black,
  },
  emWrapper:{
    flexDirection:'row',
  },
  everMImg:{
    width:wWidht/3,
    height:responsiveHeight(24.3),
    resizeMode:'contain'
  },
  everyMDivider:{
    width:wWidht,
    resizeMode:'stretch',
    height:responsiveHeight(1.65)
    
  }
})