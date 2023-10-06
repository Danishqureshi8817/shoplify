import { StyleSheet, Text, View,Image,TouchableOpacity,TouchableHighlight } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import colors from '../../styles/colors'
import {responsiveFontSize,responsiveHeight,responsiveWidth,} from 'react-native-responsive-dimensions';
import { NameIcon, dq, dr } from '../../constants/imagePath';
import { ScrollView } from 'react-native-virtualized-view';
import OIcon from 'react-native-vector-icons/Octicons';
import navigationStrings from '../../constants/navigationStrings';



const Account = ({navigation}) => {

const [user, setUser] = useState(false)

  //header
 useLayoutEffect(() => {
   
  navigation.setOptions({
      
 
   headerTitleStyle:{color:colors.black, fontSize:responsiveFontSize(2.1),fontWeight:'500',letterSpacing:1,},headerTitle:'My Account',
 
  })
}, [])



  return (
    <ScrollView style={styles.mainConatiner}
          
     showsVerticalScrollIndicator={false} >

      <View style={styles.userDataWrapper} >
        {/* <Image source={NameIcon} style={styles.nameLogo} /> */}
        <View style={styles.nameLogo} >
         {user ? 
            <Text style={styles.nameLogoText}  >DQ</Text> :

            <OIcon  name="person" size={responsiveWidth(5)} color={colors.white}/> }
        </View>
        
        {user ? <>
          <View style={styles.userDetailWrapper} >
          <Text style={styles.userName} >Danish</Text>
          <Text style={styles.userEmail} >danishqureshi8817@gmail.com</Text>
          <Text style={styles.userMob}>8817589668</Text>
        </View>

        <Text onPress={()=>{console.warn('Edit')}} style={styles.userEdit} >Edit</Text>
        </> : 
        <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.Login)}} style={styles.signinButtonWrapper} >
          <Text style={styles.signinButtonText}  >Sign in / Join</Text>
        </TouchableOpacity>
        
        }

      </View>

      <View style={styles.subOptionWrapper}  >
        
     { user &&  <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Orders</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>}
        
        <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Customer Care</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
           <View>
          <Text style={styles.optionButtonText}>Invite Friemds & Earn</Text>
          <Text style={styles.optionButtonSubText}>You get {'\u20B9'}50 for every friend</Text>
          </View>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>

      </View>


      <View style={[styles.subOptionWrapper,{marginTop:responsiveHeight(1)}]} >

{  user &&    <TouchableOpacity>
      <View style={styles.optionButtonWrapper} >
           <View>
          <Text style={styles.optionButtonText}>SHOPIFLY Wallet</Text>
          <Text style={styles.optionButtonSubText}>Add Gift Card | Manage rewards and refunds</Text>
          </View>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>}
        
     { user &&  <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Saved Cards</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>}
         
{    user &&    <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>My Rewards</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>}
         
      { user &&  <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Address</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>}


        <TouchableOpacity onPress={()=>{navigation.navigate(navigationStrings.Notification)}} >
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Notifications</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>
      </View>


      <View style={[styles.subOptionWrapper,{marginTop:responsiveHeight(1)}]}  >
        
        <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>How To Return</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Terms & Conditions</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Returns & Refunds Policy</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.optionButtonWrapper} >
          <Text style={styles.optionButtonText}>Join Out Team</Text>

          <OIcon  name="chevron-right" size={responsiveWidth(5)} color={colors.black}/>
        </View>
        </TouchableOpacity>

      </View>

      <View style={styles.logoutButtonWrapper} >
  
  {user ? 
   <>
   <TouchableOpacity style={styles.logoutButton} >
          <Text style={styles.logoutButtonText} >Logout</Text>
        </TouchableOpacity> 

        <Text style={styles.versionText} >Version 9.2.4 Build 3034</Text>

   </>
         :

        <Text style={styles.versionText} >Version 9.2.4 Build 3034</Text>

  }

      </View>

    </ScrollView>
  )
}

export default Account

const styles = StyleSheet.create({

  mainConatiner:{
    flex:1,
    backgroundColor:colors.themeColor

  },
  nameLogo:{
    resizeMode:'contain',
    width:responsiveWidth(20),
    height:responsiveHeight(10),
    borderRadius:responsiveWidth(10),
    backgroundColor:colors.black,
    justifyContent:'center',
    alignItems:'center'
  },
  nameLogoText:{
    color:colors.white,
    fontSize:responsiveFontSize(2.3),
    fontWeight:'600'

  },
  userDataWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:colors.themeColor,
    marginHorizontal:responsiveWidth(4),
    paddingVertical:responsiveHeight(2)
  },
  userName:{
    color:colors.black,
    fontSize:responsiveFontSize(2.1),
    fontWeight:'500',

  },
  userEmail:{
    color:colors.black,

  },
  userMob:{
    color:colors.black,

  },
  userEdit:{
    color:colors.edit,
    fontSize:responsiveFontSize(2),
    fontWeight:'600'
  },
  subOptionWrapper:{
    backgroundColor:colors.white,
    paddingHorizontal:responsiveWidth(4)
  },
  optionButtonWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:responsiveHeight(2),
    borderBottomWidth:1,
    borderBottomColor:colors.themeColor

  },
  optionButtonText:{
    color:colors.black,
    fontSize:responsiveFontSize(1.9),
    // fontWeight:'500'
  },
  optionButtonSubText:{
    color:colors.blackOpacity40,
    fontSize:responsiveFontSize(1.4),
    fontWeight:'500'
  },
  logoutButtonWrapper:{
    marginTop:responsiveHeight(1),
    backgroundColor:colors.white,
  },
  logoutButton:{
    borderColor:colors.black,
    borderWidth:1,
    marginHorizontal:responsiveWidth(6),
    marginVertical:responsiveHeight(1.5),
    paddingVertical:responsiveHeight(2),
    borderRadius:responsiveWidth(2)
    
  },
  logoutButtonText:{
    textAlign:'center',
    fontSize:responsiveFontSize(1.9),
    fontWeight:'600',
    color:colors.black
  },
  versionText:{
    textAlign:'center',
    marginVertical:responsiveHeight(1),
    color:colors.blackOpacity40
  },
  signinButtonWrapper:{
    backgroundColor:colors.black,
    paddingHorizontal:responsiveWidth(22),
    paddingVertical:responsiveHeight(2),
    borderRadius:responsiveWidth(2)
    
  },
  signinButtonText:{
    color:colors.white,
    fontSize:responsiveFontSize(1.9),
    fontWeight:'600'

  }



})