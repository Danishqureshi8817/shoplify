import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{useEffect,useState,useCallback} from 'react'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import navigationStrings from '../../constants/navigationStrings';

const Otp = ({navigation,route}) => {
    const [count, setCount] = useState(60)


   

    useEffect(() => {
  
    const intervel = setInterval(() => {
             if(count == 0){
                clearInterval(intervel)
             }
             else{
                setCount(count-1)
             }
        }, 1000);
    
      return () => {
        clearInterval(intervel)
      }
    }, [count])
    



  return (
    <View style={styles.mainContainer} >
    
    <Icon onPress={()=>{navigation.goBack()}}  name="close-outline" size={responsiveWidth(8)} color={colors.black} style={styles.closeIcon}/>
    
   
      <Text style={styles.joinText} >Join SHOPIFLY</Text>

      <Text style={styles.sentText}  >Please enter OTP sent on <Text style={styles.numText}  >{route?.params.number}</Text></Text>

      <View style={styles.otpWrapper} >
        <TextInput
        placeholder='Enter OTP'
        style={styles.inputField}
        placeholderTextColor={colors.blackOpacity50}
        maxLength={6}
        keyboardType='number-pad'
        />

        { 
            count !== 0 ?
            <Text style={[styles.resendText,{color:colors.blackOpacity30}]}  >Resend OTP</Text> :
            <Text onPress={()=>{setCount(60)}} style={[styles.resendText,{color:colors.edit}]}  >Resend OTP</Text>
        }
 
      </View>

      {count !== 0 &&   <Text style={styles.expireText} >Expires in {count}s </Text> }

      <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.WelcomeDetail)}} style={styles.startShoppingWrapper} >
      <Text style={styles.startShoppingButtonText}  >Start Shopping</Text>
    </TouchableOpacity>

    </View>
  )
}

export default Otp

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:colors.white,
        paddingTop:responsiveHeight(2),
        paddingHorizontal:responsiveWidth(4)

    },
    closeIcon:{
        alignSelf:'flex-end',
        // marginRight:responsiveWidth(4)
      },
      joinText:{
        color:colors.black,
        fontSize:responsiveFontSize(2.2),
        fontWeight:'600',
        marginTop:responsiveHeight(8)
      },
      sentText:{
        color:colors.blackOpacity40,
        fontSize:responsiveFontSize(1.8),

        marginTop:responsiveHeight(3)
      },
      numText:{
        color:colors.black,
        fontSize:responsiveFontSize(1.8),
        fontWeight:'600'
      },
      otpWrapper:{
        backgroundColor:colors.themeColor,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:responsiveWidth(2),
        marginTop:responsiveHeight(3),
        borderRadius:responsiveWidth(1)

      },
      inputField:{
     
        flex:1,
        fontWeight:'600'
      },
      resendText:{
       
        fontWeight:'500'
      },
      expireText:{
        color:colors.blackOpacity80,
        fontSize:responsiveFontSize(1.8),

        marginTop:responsiveHeight(1),
        fontWeight:'500'

      },
      startShoppingWrapper:{
        backgroundColor:colors.black,
        paddingHorizontal:responsiveWidth(22),
        paddingVertical:responsiveHeight(2),
        borderRadius:responsiveWidth(2),
        marginTop:responsiveHeight(4)
        
      },
      startShoppingButtonText:{
        color:colors.white,
        fontSize:responsiveFontSize(1.9),
        textAlign:'center'
    
      }





})