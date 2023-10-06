import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../../styles/colors';
import {bestselling1, bestselling2,bestselling3,bestselling4,bestselling5,bestselling6,bg1,bg2, bg3,bg4,
  bg5,bg6,
  c1,
  deal1,
  deal2,
  footer1,
  footerTitel,
  lineBrand,
  lineBrand1,
  lineBrand2,
  lineBrand3,
  lineBrand4,
  lineBrand5,
  season1,
  season2,
  season3,
  season4,
  season5,
  season6,
  starry1,
  starry2,
  starry3,
  starry4,
  sub1bg1,
  sub1bg2,
  sub1bg3,
  sub1bg4,
  trending1,
  trending2,
  trending3,
  trending4,
  trending5,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  footer2,
  c9,
  c8,
} from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import Slider from '../../components/Slider';
import DiscountSlider from '../../components/DiscountSlider';
import BestSelling from '../../components/BestSelling';
import {wWidht} from '../../utiles/Dimensions';
import DealSlider from '../../components/DealSlider';
import {ScrollView} from 'react-native-virtualized-view';
import HomeTopCategories from '../../components/HomeTopCategories';
import { TopCategoriesData } from '../../constants/DemoData';


const Home = ({navigation}) => {
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

  const FooterItem = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={item}
        style={{
          resizeMode: 'contain',
          width: wWidht / 3,
          height: responsiveHeight(8.4),
        }}
      />
    </TouchableOpacity>
  );

  const renderFooterItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <TouchableOpacity 
      activeOpacity={0}
        onPress={() => {
          console.warn('ff');
        }}>
        <Image
          source={item}
          style={{
            resizeMode: 'contain',
            width: wWidht / 3,
            height: responsiveHeight(8.4),
          }}
        />
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.mainConatiner}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerSubWrapper1}>
          <Icon
            onPress={() => {
              navigation.navigate(navigationStrings.Menu);
            }}
            name="menu"
            size={responsiveWidth(7)}
            color={colors.themeText}
          />

          <Text style={styles.LogoText}>Shopifly</Text>
          <View style={{position: 'relative'}}>
            <Icon
              name="notifications-outline"
              size={responsiveWidth(7)}
              color={colors.themeText}
            />
            <Text
              style={{
                backgroundColor: 'red',
                position: 'absolute',
                alignSelf: 'flex-end',
                borderRadius: responsiveWidth(3.5),
                width: responsiveWidth(4.5),
                textAlign: 'center',
                color: colors.white,
              }}>
              5
            </Text>
          </View>
        </View>

        <Pressable onPress={()=>{navigation.navigate(navigationStrings.Notification)}}  style={styles.headerSubWrapper2}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={responsiveWidth(5)} color={colors.gray} />
            {/* <TextInput
              placeholder="Search by Product, Brand & more..."
              style={styles.textInput}
            /> */}
            <Text style={styles.textInput} >Search by Product, Brand & more...</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView

        showsVerticalScrollIndicator={false}
        style={[styles.scrollWrapper]}>
          
          <HomeTopCategories data={TopCategoriesData} />

        <Slider image={[bg1, bg2, bg3, bg4, bg5, bg6]} />

        <DiscountSlider image={[sub1bg1, sub1bg2, sub1bg3, sub1bg4]} />

        <Image source={lineBrand} style={styles.brandNameImg} />

        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[lineBrand1, lineBrand2, lineBrand3, lineBrand4, lineBrand5]}
          renderItem={renderItem}
          keyExtractor={index => index}
          // extraData={selectedId}
        /> */}

        <DealSlider
          images={[lineBrand1, lineBrand2, lineBrand3, lineBrand4, lineBrand5]}
        />

        <Text style={[styles.titleofdeal, {color: colors.purple}]}>
          BESTSELLING STYLES
        </Text>

        <BestSelling
          image={[
            bestselling1,
            bestselling2,
            bestselling3,
            bestselling4,
            bestselling5,
            bestselling6,
          ]}
          sliderHeight={0.37}
        />

        <Text style={[styles.titleofdeal, {color: colors.purple}]}>
          LIMITED TIME DEALS
        </Text>

        <Image source={deal1} style={styles.deal1Img} />
        <Image source={deal2} style={styles.deal2Img} />

        <Text style={[styles.titleofdeal, {color: colors.orange}]}>
          SEASON'S TOPPERS
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[season1, season2, season3, season4, season5, season6]}
          renderItem={renderItem}
          keyExtractor={index => index}
          // extraData={selectedId}
        />

        <Text style={[styles.titleofdeal, {color: colors.orange}]}>
          NOW TREND-ING
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[trending1, trending2, trending3, trending4, trending5]}
          renderItem={renderItem}
          keyExtractor={index => index}
          // extraData={selectedId}
        />

        <Text style={[styles.titleofdeal, {color: colors.black}]}>
          A STARRY LINEUP
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[starry1, starry2, starry3, starry4]}
          renderItem={renderItem}
          keyExtractor={index => index}
          // extraData={selectedId}
        />

        <Image source={footerTitel} style={styles.footerTitel} />

        <Image source={footer1} style={styles.footer1} />

        <FlatList
          // showsHorizontalScrollIndicator={false}
          data={[c1, c2, c3, c4, c5, c6, c7, c8, c9]}
          renderItem={renderFooterItem}
          keyExtractor={index => index}
          numColumns={3}
          // extraData={selectedId}
        />

        <Image source={footer2} style={styles.footer1} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    backgroundColor: colors.themeColor,
    paddingVertical: responsiveHeight(2),
    gap: responsiveHeight(3),
  },
  headerSubWrapper1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(3),
  },
  LogoText: {
    color: colors.themeText,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
    textTransform: 'uppercase',
    // letterSpacing:1
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir-Medium',
    marginHorizontal: responsiveWidth(3),
    paddingLeft: responsiveWidth(2),
    paddingVertical:responsiveHeight(1.5),
    gap:responsiveWidth(2)
  },
  textInput: {
    fontSize: responsiveFontSize(1.7),
    // fontWeight: '500',
    flex: 1,
    color:colors.blackOpacity50
  },
  brandNameImg: {
    resizeMode: 'contain',
    width: '100%',
    height: responsiveHeight(4),
  },
  lineBrandProduct: {
    resizeMode: 'contain',
    width: responsiveWidth(60),
    height: responsiveHeight(36),
  },
  deal1Img: {
    resizeMode: 'contain',
    width: '100%',
    height: responsiveHeight(32),
  },
  deal2Img: {
    resizeMode: 'contain',
    width: '100%',
    height: responsiveHeight(12),
    // borderRadius:responsiveWidth(2)
    paddingHorizontal: responsiveWidth(1),
  },
  titleofdeal: {
    fontSize: responsiveFontSize(2.6),
    paddingVertical: responsiveHeight(2),
    fontWeight: '600',
    paddingLeft: responsiveWidth(3),
  },
  footerTitel: {
    resizeMode: 'contain',
    width: '100%',
    height: responsiveHeight(4.1),
  },
  footer1: {
    resizeMode: 'stretch',
    width: '100%',
    height: responsiveHeight(15),
  },
});
