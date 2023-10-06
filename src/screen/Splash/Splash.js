import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { wHeight,wWidht,sHeight,sWidht } from '../../utiles/Dimensions'
import { Logo } from '../../constants/imagePath'
import colors from '../../styles/colors'
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'


const Splash = () => {
  return (
    <View style={styles.mainContainer} >
         

{/* <Image source={Logo} style={styles.logo} /> */}
  
    <Text style={styles.logoText} >Shopifly</Text>

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.black

    },
    logoText:{
      color:colors.whiteText,
      fontSize:responsiveFontSize(7),
      letterSpacing:0.5

    }
})