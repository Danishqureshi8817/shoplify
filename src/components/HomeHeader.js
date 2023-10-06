import { StyleSheet,Text ,View, TextInput, Image, FlatList, TouchableOpacity,Pressable} from 'react-native';
import React from 'react'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize,responsiveHeight, responsiveWidth,} from 'react-native-responsive-dimensions';
import navigationStrings from '../constants/navigationStrings';

const HomeHeader = ({navigation}) => {
  return (
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

    <Pressable onPress={()=>{navigation.navigate(navigationStrings.Search)}}  style={styles.headerSubWrapper2}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={responsiveWidth(5)} color={colors.gray} />
        {/* <TextInput
          placeholder="Search by Product, Brand & more..."
          style={styles.textInput}
          selectTextOnFocus={false}
          editable={false}
        /> */}
        <Text style={styles.textInput} >Search by Product, Brand & more...</Text>
      </View>
    </Pressable>
  </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
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
        color:colors.blackOpacity50,
        // fontFamily: 'Avenir-Medium',
      },
})