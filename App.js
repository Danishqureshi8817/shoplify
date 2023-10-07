import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import Routes from './src/navigation/Routes'
import {requestUserPermission, notificationListener} from './src/utiles/NotificationServices'

const App = () => {

  useEffect(() => {
    
    requestUserPermission()
    notificationListener()
     
    }, [])



  return (

         <Routes/>

 
  )
}

export default App

const styles = StyleSheet.create({})