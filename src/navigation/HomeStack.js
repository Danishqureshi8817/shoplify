import { View, Text,StyleSheet } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Menu, Otp, WelcomeDetail, Search, Notification, Notifications, Alert, } from '../screen';
import navigationStrings from '../constants/navigationStrings';
import TabStack from './TabStack';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import colors from '../styles/colors';



const Stack = createNativeStackNavigator();


const AuthStack = () => {

//   const {userData,setUserData} = useContext(AuthContext)
  const [splashShow, setSplashShow] = useState(true)
  const [login, setlogin] = useState(true)


   const splashStatus = async() => {
   await setSplashShow(false)
   }

//    const load = async() => {
//     Services.getUserAuth().then( resp => {
//       console.log("mmmain",resp)
//       if(resp){
//         setUserData(resp)
//         console.log("DAT...")
//         setlogin(false)
        
//       }
//       else{
//         setUserData(null)
//       }
//     })
//    }

  useEffect(() => {
    
//    load()

    setTimeout( async () => {
      await splashStatus()
   }, 2000);



  }, [])


  return (
    <Stack.Navigator screenOptions={{headerShown:false,}} >
     {/* {splashShow?<Stack.Screen name={navigationStrings.Splash} component={Splash}/>:null} */}
    
     <Stack.Screen name='Tabs' component={TabStack}  />
     
     <Stack.Screen name={navigationStrings.Menu} component={Menu} options={{headerShown:true,}} />
     <Stack.Screen name={navigationStrings.Login} component={Login} />
     <Stack.Screen name={navigationStrings.Otp} component={Otp} />
     <Stack.Screen name={navigationStrings.WelcomeDetail} component={WelcomeDetail} />

     <Stack.Screen name={navigationStrings.Search} component={Search} />
     <Stack.Screen name={navigationStrings.Notification} component={Notification} />
    
     
   

    
     {/* <Stack.Screen name={navigationStrings.Login} component={Login} /> */}
     
 


  </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({
    headerTitel:{
      color:colors.themeText, fontSize:responsiveFontSize(2.1),
    fontWeight:'600',
    textTransform:'uppercase',
    letterSpacing:1
    }
})