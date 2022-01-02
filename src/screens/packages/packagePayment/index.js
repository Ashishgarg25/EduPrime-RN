import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, ScrollView,Image,StyleSheet } from 'react-native'
import { Header, Button, PackageCard, PaymentPackage } from '../../../components'
import Styles from '../../../utilities/constants/Styles'
import Images from '../../../utilities/constants/Images'
import Colors from '../../../utilities/constants/Colors'
import FontSize from '../../../utilities/constants/FontSize'
import styles from "./styles"
import Constants from '../../../utilities/constants/Constants'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../../utilities/assets/svg';
import {packageActionButton,} from '../../../utilities/constants/Styles'

const IKON = (props) => <SvgIcon {...props} svgs={svgs} />

const PackagePayment = ({ navigation ,route}) => {
    // const [programsList,setProgramsList] = useState([])
    const [paymentshown,setPaymentShown] = useState(false)
    useEffect(() => {

    }, [])


    return (
        <SafeAreaView style={styles.container}>
            {/* <Header title="Packages" /> */}
            <TouchableOpacity style={{flexDirection:'row',marginLeft:20}} onPress={()=>{
         navigation.pop()
       }}>
         {/* <View> */}
           <Image source={Images.backIcon}/>
         <Text style={{marginLeft:10,fontSize:FontSize.Font18,fontWeight:'500'}}>Back</Text>
         {/* </View> */}
       </TouchableOpacity>
       <Text style={{color:'black',marginTop:30,alignSelf:'center',fontSize:FontSize.Font20,fontWeight:'500'}}>{Constants.selectedPackages}</Text>
            <ScrollView>



    <View style={[Styles.shadowView,styles.container,{marginLeft:10,marginRight:10,borderRadius:10,padding:10,marginTop:30}]}>
          <Text style={{fontWeight:'500',fontSize:FontSize.Font16}}>{route.params.packageName}</Text>
        <View style = {styless.itemView}>
           <IKON name={"rupeeIcon"} width={20} height={20} />
           <Text style={{color:Colors.primaryColor,fontWeight:'bold'}} >Rp. {route.params.packagePrice}</Text>
        </View>
        <View style = {styless.itemView}>
           <IKON name={"CalendarIcon"} width={20} height={20} />
           <Text style={{color:Colors.secondaryColor}}>{route.params.packageStartDate} - </Text>
           <Text style={{color:Colors.secondaryColor}}>{route.params.packageEndDate}</Text>
        </View>
        <View style = {packageActionButton.buttonView}>
            <TouchableOpacity onPress={()=>{
                setPaymentShown(!paymentshown)
            }}>
        <View style = {packageActionButton.downButtonStyle}>
        <IKON name={"whiteDownIcon"} fill = {"white"} width={20} height={20} />
        </View>
        </TouchableOpacity>
        <View style= {packageActionButton.buttonBuyNowView}>
        <View style = {packageActionButton.xColor}>
        <Text>5x</Text>
        </View>
        <TouchableOpacity style = {packageActionButton.buyNowStyle} onPress={()=>{
            setPaymentShown(!paymentshown)

        }} >
        <Text style = {{color:'white'}}>Pay Now</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>




            {/* <PackageCard/>  */}
          {paymentshown &&  
          <PaymentPackage route={route}/> }
           {paymentshown &&   <View style = {styles.buttonView}>
            <Button text="SKIP TO HOME" viewStyle={{backgroundColor:Colors.themeLightPurpleColor}} onPress={()=>{
                navigation.replace('Dashboard')
            }}/>
            <Button text="SUBMIT" viewStyle={{backgroundColor:Colors.secondaryColor}} onPress={()=>{
                navigation.replace('Dashboard')
            }}/>
            </View>
            }
            </ScrollView>
        </SafeAreaView>
    )

    //Packages List Card


    packageList = ({ item, index }) => {

    }
}

const styless = StyleSheet.create({
    container:{
        marginHorizontal: 15,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius:10,
        paddingVertical:9,
        paddingHorizontal:10
    },
    listView:{
        marginTop: 7
    },
    itemView:{
        marginTop:14,
        flexDirection:'row',
    },
  
  })

export default PackagePayment