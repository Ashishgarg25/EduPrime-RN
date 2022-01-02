import React,{useState,useEffect} from 'react'
import {Text, View,TouchableOpacity, TextInput, Image} from 'react-native'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Constants from '../../utilities/constants/Constants'
import Colors from '../../utilities/constants/Colors'
import axiosInstance from '../../api/APIConfig'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {

  useEffect(()=>{
    getLevelAPI()
    getStateAPI()
  },[])

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [secureEntry,setSecureEntry] = useState(true)

    const loginAPI = () => {
      const bodyFormData = new FormData();
      bodyFormData.append('grant_type', 'password');
      bodyFormData.append('username', 'siswa&' + email);
      bodyFormData.append('password', password);

      axios({
        method: 'post',
        url: 'https://k8s-auth.eduprime.co.id/oauth/token',
        data: bodyFormData,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: {
          username: 'eduprime',
          password: 'eduprime@123',
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            console.log('auth token successfull', response.data.access_token);
            if(response.data.access_token != "" && response.data.access_token != undefined) {
              AsyncStorage.setItem('isTokenExist',response.data.access_token)
            }
            Constants.token = response.data.access_token;
            navigation.navigate('Dashboard');
            // handlelogin(response.data.access_token);
          } else {
            console.log(' does not exists');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const handlelogin = (tokenStr) => {
      const bodyFormData = new FormData();

      bodyFormData.append('userName', email);
      bodyFormData.append('password', password);

		axios({
			method: 'post',
			url: 'https://k8s-be.eduprime.co.id/api/login/actionLogin',
			//bodyFormData,
			data: {
				userName: email,
				password: password,
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Bearer ${tokenStr}`,
			},
		})
			.then(function (response) {
				if (response.status === 200) {
					navigation.navigate('Dashboard');
          console.log("login api",response.data)
				} else {
					console.log(' does not exists');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
    }
  
    return(
       <View style={Styles.mainView}>
       <View style={Styles.CardView}>
            <Text style={Styles.loginText}>{Constants.login}</Text>

    <View style={Styles.loginTextInputView}>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="Enter Your Email Address"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={email}
      onChangeText={(text) => {
        setEmail(text)
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.emailIcon}/>
    </View>

    <View style={Styles.loginTextInputView}>
        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
            setSecureEntry(!secureEntry)
        }}>
            <Image style={Styles.loginTextInputImageView} source={secureEntry? Images.eyeIcon : Images.eyeIcon}/>
        </TouchableOpacity>
    <TextInput
      style={{flex: 1}}
      autoCorrect={false}
      secureTextEntry={secureEntry}
      placeholder="Enter Password"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={password}
      onChangeText={(text) => {
        setPassword(text)
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.lockIcon}/>
    </View>

    <TouchableOpacity>
        <Text style={Styles.fortgotPasswordText}>{Constants.forgetPassword}</Text>
    </TouchableOpacity>

    <TouchableOpacity  style={Styles.loginButton} onPress={() => loginAPI() }>
        <Text style={Styles.loginButtonText}>{Constants.login}</Text>
    </TouchableOpacity>

    <View style={Styles.donthaveAccountView}>
       <Text style={Styles.donthaveAccountText}>{Constants.DonothaveAccount}</Text>
       <TouchableOpacity 
         onPress={() => {
           navigation.navigate('Packages')
         }}>
         <Text style={Styles.signupText}>{Constants.signup}</Text>
       </TouchableOpacity>
       </View>


</View>
</View>
    )

    // function loginAPI() {
    //   var bodyFormData = new FormData();
    //   bodyFormData.append("grant_type", "password");
    //   bodyFormData.append("username", `siswa&raejvv51555`);
    //   bodyFormData.append("password", `51555`);

    //   axios({
    //     method: "post",
    //     url: "https://k8s-auth.eduprime.co.id/oauth/token",
    //     data: bodyFormData,
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     auth: {
    //       username: "eduprime",
    //       password: "eduprime@123",
    //     },
    //   })
    //     .then(function (response) {
    //       if (response.status == 200) {
    //         console.log("Login successfull", response.data.access_token);
    //         Constants.token = response.data.access_token
    //         getLevelAPI()
    //         getStateAPI()
    //       } else {
    //         console.log(" does not exists");
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    function getLevelAPI(){
      axios({
        method: "get",
        url: "https://k8s-auth.eduprime.co.id/api/get_jenjang",
      })
        .then(function (response) {
            console.log("level successfull", response.data.list_jenjang)
            Constants.levelArray = response.data.list_jenjang
           
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    function getStateAPI(){
      axios({
        method: "get",
        url: "https://k8s-auth.eduprime.co.id/api/getprovinsi",
      })
        .then(function (response) {
            console.log("state successfull", response.data.list_provinsi)
            Constants.stateArray = response.data.list_provinsi
           
        })
        .catch(function (error) {
          console.log(error);
        });
    }

}

export default LoginScreen