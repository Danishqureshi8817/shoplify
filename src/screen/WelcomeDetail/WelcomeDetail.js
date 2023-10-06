import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize,responsiveHeight,responsiveWidth} from 'react-native-responsive-dimensions'
import { Formik } from 'formik';
import * as Yup from 'yup';
import navigationStrings from '../../constants/navigationStrings';


const WelcomeDetail = ({navigation}) => {

  const [gender, setGender] = useState('')
  const [genderError, setgenderError] = useState(false)

  console.log({gender});

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Please enter your full name.'),

    email: Yup.string().email('Invalid email').required('Please enter your email address.'),
  });

  return (
    <View style={styles.maiContainer} >

<Icon onPress={()=>{navigation.goBack()}}  name="close-outline" size={responsiveWidth(8)} color={colors.black} style={styles.closeIcon}/>

      <Text style={styles.welcomeText} >Welcome to SHOPIFLY</Text>

      <Formik initialValues={{
        name:'',
        email:''
      }} validationSchema={SignupSchema} 
       
       onSubmit={values => {
        
        if(gender===''){
          setgenderError(true)
        }
        else{
          console.log("submit",{...values,gender})
        }
        
        }}
       >

      {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid})=>(
      <>
        <TextInput 
        placeholder='Email ID*'
        style={styles.inputField}
        keyboardType='email-address'
        placeholderTextColor={colors.blackOpacity50}
 
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={()=>{setFieldTouched('email')}}
      />
      { touched.email && errors.email && (<Text style={{color:'red',}}>{errors.email}</Text>)}

      <TextInput 
        placeholder='Name*'
        style={[styles.inputField,{marginTop:responsiveHeight(3),}]}
        keyboardType='default'
        placeholderTextColor={colors.blackOpacity50}
        value={values.name}
        onChangeText={handleChange('name')}
        onBlur={()=>{setFieldTouched('name')}}
      />
      { touched.name && errors.name && (<Text style={{color:'red',}}>{errors.name}</Text>)}
   

   
     
      <Text style={styles.genderText} >Gender</Text>

      <View  style={styles.genderWrapper} >
        <TouchableOpacity onPress={()=>{setGender('female')}} style={[styles.genderBox,{backgroundColor:gender==='female'?colors.themeColor:colors.white}]} >
          <Text style={styles.genderTypeText} >Female</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setGender('male')}} style={[styles.genderBox,{backgroundColor:gender==='male'?colors.themeColor:colors.white}]} >
          <Text style={styles.genderTypeText} >Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setGender('other')}} style={[styles.genderBox,{backgroundColor:gender==='other'?colors.themeColor:colors.white}]} >
          <Text style={styles.genderTypeText} >Other</Text>
        </TouchableOpacity>
      </View>

      { genderError && gender===''  && <Text style={{color:'red',}}>Please select Gender</Text>}


      <Text style={styles.footerText1}  >By Signing in, I agree to <Text style={styles.footerText2}  >Terms & Conditions.</Text> </Text>


      <TouchableOpacity disabled={!isValid}  onPress={handleSubmit} style={[styles.continueWrapper,{backgroundColor:!isValid?colors.blackOpacity50:colors.black}]} >
      <Text style={styles.continueButtonText}  >Continue</Text>
      </TouchableOpacity>
      </>
     
      )}

      </Formik>


    </View>
  )
}

export default WelcomeDetail

const styles = StyleSheet.create({

  maiContainer:{
    flex:1,
    backgroundColor:colors.white,
    paddingTop:responsiveHeight(2),
    paddingHorizontal:responsiveWidth(4)


  },
  closeIcon:{
    alignSelf:'flex-end',
    // marginRight:responsiveWidth(4)
  },
  welcomeText:{
    color:colors.black,
    fontSize:responsiveFontSize(2.2),
    fontWeight:'600',
    marginVertical:responsiveHeight(6),
    
  },
  inputField:{

    backgroundColor:colors.themeColor,
    borderRadius:responsiveWidth(1),

    paddingLeft:responsiveWidth(3),
    


  },
  genderText:{
    color:colors.gray,
    fontWeight:'500',
    marginTop:responsiveHeight(2)
  },
  genderWrapper:{
    flexDirection:'row',
    gap:responsiveWidth(3),
    marginTop:responsiveHeight(2)
  },
  genderBox:{
    borderWidth:1,
    borderColor:colors.black,
    paddingHorizontal:responsiveWidth(6),
    paddingVertical:responsiveHeight(1.5),
    borderRadius:responsiveWidth(1)
  },
  genderTypeText:{
    color:colors.black,
    fontSize:responsiveFontSize(1.8)
  },
  footerText1:{
    color:colors.black,
    marginTop:responsiveHeight(5)
  },
  footerText2:{
    color:colors.edit,
    fontWeight:'500'
  },
  continueWrapper:{
    // backgroundColor:colors.black,
    paddingHorizontal:responsiveWidth(22),
    paddingVertical:responsiveHeight(2),
    borderRadius:responsiveWidth(2),
    marginTop:responsiveHeight(4)
    
  },
  continueButtonText:{
    color:colors.white,
    fontSize:responsiveFontSize(1.9),
    textAlign:'center'

  }



})