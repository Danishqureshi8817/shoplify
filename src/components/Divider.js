import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const Divider = () => {
  return (
    <View style={styles.divider} ></View>
  )
}

export default Divider

const styles = StyleSheet.create({
      
    divider:{
        borderBottomWidth:2,
        borderBottomColor:colors.blackOpacity15,
        marginHorizontal:responsiveWidth(6)
      }

})