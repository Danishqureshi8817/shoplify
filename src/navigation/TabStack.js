import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Bag, Home, Stores, Wishlist } from '../screen';
import navigationStrings from '../constants/navigationStrings';
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import colors from '../styles/colors';
import { wHeight } from '../utiles/Dimensions';



const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{height:wHeight*0.065,backgroundColor:colors.themeColor},headerShown:false}} >


    <Tab.Screen name={navigationStrings.Home} component={Home} 
    options={{tabBarIcon:({focused})=>(<Icon  name={focused?"home":"home-outline"} size={responsiveWidth(6)} color={colors.black} />),  
    tabBarLabel: ({focused}) => {
   return focused ? <View><Text style={{color:colors.blackOpacity80,alignSelf:'center'}}>Home</Text>
   <View style={{backgroundColor:'#ffc134',width:responsiveWidth(15),height:3,borderTopRightRadius:responsiveWidth(1),borderTopLeftRadius:responsiveWidth(1),alignSelf:'center'}}></View></View> : <Text style={{color:colors.blackOpacity80,marginBottom:4}}>Home</Text>;
 }}} />


    <Tab.Screen name={navigationStrings.Stores} component={Stores} 
      options={{tabBarIcon:({focused})=>(<Icon  name={focused?"storefront":"storefront-outline"} size={responsiveWidth(6)} color={colors.black} />),
      tabBarLabel: ({focused}) => {
   return focused ? <View><Text style={{color:colors.blackOpacity80,alignSelf:'center'}}>Store</Text>
   <View style={{backgroundColor:'#ffc134',width:responsiveWidth(15),height:3,borderTopRightRadius:responsiveWidth(1),borderTopLeftRadius:responsiveWidth(1),alignSelf:'center'}}></View></View> : <Text style={{color:colors.blackOpacity80,marginBottom:4}}>Store</Text>;
 } }} />


    <Tab.Screen name={navigationStrings.Account} component={Account} 
          options={{tabBarIcon:({focused})=>(<Icon  name={focused?"person":"person-outline"} size={responsiveWidth(6)} color={colors.black} />),
          tabBarLabel: ({focused}) => {
   return focused ? <View><Text style={{color:colors.blackOpacity80,alignSelf:'center'}}>Account</Text>
   <View style={{backgroundColor:'#ffc134',width:responsiveWidth(15),height:3,borderTopRightRadius:responsiveWidth(1),borderTopLeftRadius:responsiveWidth(1),alignSelf:'center'}}></View></View> : <Text style={{color:colors.blackOpacity80,marginBottom:4}}>Account</Text>;
 },headerShown:true }}
    />


    <Tab.Screen name={navigationStrings.Wishlist} component={Wishlist} 
      options={{tabBarIcon:({focused})=>(<Icon  name={focused?"heart":"heart-outline"} size={responsiveWidth(6)} color={colors.black} />),
      tabBarLabel: ({focused}) => {
   return focused ? <View><Text style={{color:colors.blackOpacity80,alignSelf:'center'}}>Wishlist</Text>
   <View style={{backgroundColor:'#ffc134',width:responsiveWidth(15),height:3,borderTopRightRadius:responsiveWidth(1),borderTopLeftRadius:responsiveWidth(1),alignSelf:'center'}}></View></View> : <Text style={{color:colors.blackOpacity80,marginBottom:4}}>Wishlist</Text>;
 },}} />


    <Tab.Screen name={navigationStrings.Bag} component={Bag} 
      options={{tabBarIcon:({focused})=>(<Icon  name={focused?"bag":"bag-outline"} size={responsiveWidth(6)} color={colors.black} />),
      tabBarLabel: ({focused}) => {
   return focused ? <View><Text style={{color:colors.blackOpacity80,alignSelf:'center'}}>Bag</Text>
   <View style={{backgroundColor:'#ffc134',width:responsiveWidth(15),height:3,borderTopRightRadius:responsiveWidth(1),borderTopLeftRadius:responsiveWidth(1),alignSelf:'center'}}></View></View> : <Text style={{color:colors.blackOpacity80,marginBottom:4}}>Bag</Text>;
    },}} />
    
 
  </Tab.Navigator>
  )
}

export default TabStack