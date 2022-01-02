import React,{useEffect,useState} from 'react'
import {Text,View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../../utilities/constants/Constants'

const Splash = ({navigation}) => {

    useEffect(()=>{
        AsyncStorage.getItem('isTokenExist').then(value =>{
            Constants.token = value
            console.log('token value is ',value,Constants.token)
            if(value === null || value === undefined){
                navigation.replace('LoginScreen')
            }else{
                navigation.replace('LoginScreen')
            }
        })

    },[])

    return(
        <>
        </>
    )

}

export default Splash;