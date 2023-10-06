import { View, Text } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';


const Routes = () => {

    // const {userData,setUserData} = useContext(AuthContext)
      
    const [Login, setLogin] = useState(false)

  
    return (
     <NavigationContainer>
  
       {/* {AuthStack()} */}
       {HomeStack()}

     </NavigationContainer>
    )
  }
  
  export default Routes

