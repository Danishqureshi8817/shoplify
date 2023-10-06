import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import { Logo,fb,google } from '../../constants/imagePath';
import { wHeight } from '../../utiles/Dimensions';
import navigationStrings from '../../constants/navigationStrings';
import DeviceNumber from 'react-native-device-number';

const Login = ({navigation}) => {

  const [userNumber, setuserNumber] = useState('')

  

  return (
    <View style={styles.mainContainer} >


  <Icon onPress={()=>{navigation.goBack()}}  name="close-outline" size={responsiveWidth(8)} color={colors.black} style={styles.closeIcon}/>
    
    
    <Image source={Logo} style={styles.LogoImg} />
    <Text style={styles.textLogin} >Login <Text style={styles.textOr} >or</Text> Signup</Text>

    <TextInput
    placeholder='Enter Mobile Number'
    style={styles.inputField}
  
    keyboardType='phone-pad'
    placeholderTextColor={'#939598'}
    value={userNumber}
    onChangeText={(text)=>{setuserNumber(text)}}
    maxLength={10}
    onFocus={()=>{
      DeviceNumber.get().then((res) => {
  console.log(res);

  setuserNumber(res.mobileNumber.slice(3))
}).catch((e)=>{console.log(e)});
    }}
   
    

    />

    { userNumber.length === 10 && <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.Otp,{number:userNumber})}} style={styles.continueButtonWrapper} >
      <Text style={styles.continueButtonText} >Continue</Text>
    </TouchableOpacity>}
  
  
  

    <View style={{marginTop:wHeight*0.2,gap:responsiveHeight(3)}} >

    
 
     
  <Text style={styles.textSocial} >Or continue with social account</Text>

    
      <View style={styles.socialIconWrapper}>
         <Image source={fb} style={styles.fbLogo} />
         <Image source={google} style={styles.googleLogo} />
      </View>

      <Text style={styles.footerText1} >By Signing in, I agree to <Text style={styles.footerText2}>Terms & Conditions</Text> </Text>

     </View>
  

     

    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    paddingTop:responsiveHeight(2),
    backgroundColor:colors.white

  },
  closeIcon:{
    alignSelf:'flex-end',
    marginRight:responsiveWidth(4)
  },
  LogoImg:{
    resizeMode:'contain',
    width:responsiveWidth(15),
    height:responsiveHeight(8),
    alignSelf:'center',
    marginTop:wHeight*0.15
  },
  textLogin:{
    alignSelf:'center',
    marginTop:responsiveHeight(4),
    color:colors.black,
    fontSize:responsiveFontSize(2.4),
    fontWeight:'500'
  },
  textOr:{
    color:'#757575',
    fontSize:responsiveFontSize(2.4),
    fontWeight:'500'

  },
  inputField:{
    backgroundColor:colors.themeColor,
    marginHorizontal:responsiveWidth(6),
    elevation:1,
    borderRadius:responsiveWidth(1),
    fontSize:responsiveFontSize(2.1),
    fontWeight:'500',
    marginTop:responsiveHeight(6),
    paddingVertical:responsiveHeight(1.5),
    textAlign:'center'
   




  },
  textSocial:{
    color:colors.black,
    alignSelf:'center',
    fontSize:responsiveFontSize(1.8),
    fontWeight:'400',
  },
  socialIconWrapper:{
     flexDirection:'row',
     alignSelf:'center',
     gap:responsiveWidth(4)
  },
  fbLogo:{
    resizeMode:'contain',
    width:responsiveWidth(8),
    height:responsiveHeight(4)
  },
  googleLogo:{
    resizeMode:'contain',
    width:responsiveWidth(8),
    height:responsiveHeight(4)
  },
  footerText1:{
    alignSelf:'center',
    fontSize:responsiveFontSize(1.6),
    fontWeight:'500',
    color:colors.blackOpacity40
  },
  footerText2:{
    color:'#5391b6',
    fontSize:responsiveFontSize(1.6),
    fontWeight:'500',
  },
  continueButtonWrapper:{
    backgroundColor:colors.black,
    marginHorizontal:responsiveWidth(10),
    marginTop:responsiveHeight(2),
    borderRadius:responsiveWidth(2)
  },
  continueButtonText:{
    color:colors.white,
    paddingVertical:responsiveHeight(2),
    textAlign:'center',
    fontSize:responsiveFontSize(2.1),
    letterSpacing:0.5
    
  }


 
})