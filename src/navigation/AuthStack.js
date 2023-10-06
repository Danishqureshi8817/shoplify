import { View, Text } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Splash,StartPage,Home,LessonChat, CompletePay } from '../screen';
import navigationStrings from '../constants/navigationStrings';





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
    <Stack.Navigator screenOptions={{headerShown:false}} >
     {splashShow?<Stack.Screen name={navigationStrings.Splash} component={Splash}/>:null}
     {/* {login && <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> } */}
     {/* <Stack.Screen name={navigationStrings.Home} component={Home} options={{headerShown:true}} /> */}
     <Stack.Screen name={navigationStrings.Login} component={Login} />
     
 


  </Stack.Navigator>
  )
}

export default AuthStack