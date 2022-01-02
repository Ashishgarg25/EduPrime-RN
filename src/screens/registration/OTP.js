import React, {useState, useEffect} from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Constants from '../../utilities/constants/Constants'
import Colors from '../../utilities/constants/Colors'
import OTPTextInput from 'react-native-otp-textinput'


const OTP = ({navigation}) => {
    return(
        <View style={Styles.mainView}>
        <View style={Styles.CardView}>
             <Text style={Styles.loginText}>{Constants.otpHeader}</Text>
            <View style={{flexDirection:'column'}}>
             <OTPTextInput 
            inputCount={6}
            handleTextChange={(e) => {
              console.log(e)
            }}
            containerStyle={[Styles.textInputContainer]}
            textInputStyle={[Styles.roundedTextInput, {borderRadius: 0}]}
            tintColor="#27313E"
            />
            </View>
            <TouchableOpacity  style={Styles.loginButton} onPress={() => {
               navigation.navigate('Dashboard')
            }}>
                <Text style={Styles.loginButtonText}>{Constants.verify}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.resendCodeView}>
                <Image source={Images.resendIcon} />
                <Text style={Styles.resendCodeText}>{Constants.resendCode}</Text>
            </TouchableOpacity>

    <View style={Styles.donthaveAccountView}>
       <Text style={Styles.donthaveAccountText}>{Constants.alredyHaveAnAccount}</Text>
       <TouchableOpacity 
         onPress={() => {
           navigation.replace('LoginScreen')
         }}>
         <Text style={Styles.signupText}>{Constants.loginNow}</Text>
       </TouchableOpacity>
    </View>
        </View>

        </View>
    )
}

export default OTP;