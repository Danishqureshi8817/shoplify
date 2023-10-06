import { StyleSheet, Text, View,TextInput,Image,Pressable } from 'react-native'
import React,{useState} from 'react'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { wHeight, wWidht } from '../../utiles/Dimensions';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { search } from '../../constants/imagePath';

const Search = ({navigation}) => {

   const [searchText, setSearchText] = useState('')

   console.log({searchText})

  return (
    <View style={styles.mainContainer}>
       
       <View style={styles.headerWrapper} >
       <Pressable onPress={()=>{navigation.goBack()}} >
       <Icon
          name="arrow-back-outline"
          size={responsiveWidth(6)}
          color={colors.black}
        /> 
       </Pressable>


      <View style={styles.searchContainer}>
        {/* <Icon name="search" size={responsiveWidth(5)} color={colors.gray} /> */}
         <TextInput
            placeholder='Search by Product, Brand & more...'
            style={styles.textInput}
            placeholderTextColor={colors.blackOpacity80}
         
            onChangeText={ (text) => {
              setSearchText(text)
                // console.log({searchText})
     
            }}
            value={searchText}
         />

       
      </View>

       </View>

       <View style={{height:wHeight*0.48,marginTop:responsiveHeight(40)}} >

       <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      // index={1}
      showPagination
      data={[search.search1,search.search2,search.search3,search.search4,search.search5,search.search6]}
      paginationActiveColor={colors.bestSellingPegination}
      paginationStyleItem={{width:responsiveWidth(6),height:responsiveHeight(0.5),marginTop:responsiveHeight(1)}}
      paginationStyleItemInactive={{backgroundColor:colors.white}}
      renderItem={({ item }) =>{ 
        // console.log("slider",item)
     return (
        <View style={[styles.child, ]}>
          <Image source={item} style={{width:wWidht,height:'100%',resizeMode:'contain'}} />
        </View>
      )}
      }
    />


       </View>



    </View>
  )
}

export default Search

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
    searchContainer: {

        // alignItems: 'center',
        borderRadius: responsiveWidth(2),
        backgroundColor: colors.themeColor,
        // marginHorizontal: responsiveWidth(3),
        paddingLeft: responsiveWidth(2),
        // paddingVertical:responsiveHeight(1),
        width:'85%',
        // marginBottom:responsiveHeight(1)
  
      },
      textInput: {
        fontSize: responsiveFontSize(1.7),
        // fontWeight: '500',
        // flex: 1,
        color:colors.blackOpacity80,
        // backgroundColor:'red'
        // fontFamily: 'Avenir-Medium',
      },
      container: { justifyContent:'center',overflow:'hidden',width:wWidht*0.8,},
      child: { width:wWidht, justifyContent: 'center',height:wHeight*0.48 },
      text: { fontSize: wWidht * 0.5, textAlign: 'center' },

})