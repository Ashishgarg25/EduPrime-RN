import React, {useEffect, useState} from 'react'
import {Text, View,FlatList,SafeAreaView, Image, ImageBackground, TouchableOpacity,Alert} from 'react-native'
import axiosInstance from '../../api/APIConfig'
import * as axios from 'react-native-axios';
import Header from '../../components/Header'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Colors from '../../utilities/constants/Colors'
import Constants from '../../utilities/constants/Constants'

const Programs = ({navigation}) => {
    const [programsList,setProgramsList] = useState([])
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [cardbottomView,setcardBottomView] = useState(false)

   useEffect(() => {
    console.log(Constants.token,"shshsh")
    programsListAPI()
   },[]) 
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
             <Header title="Programs"/>
             <FlatList 
             data={programsList}
              renderItem={({ item , index }) => {
                  return(
                    <View style={Styles.programsCardContainer}>
                    <View style={[Styles.progrmsCardView,{borderColor:Colors.themeDarkTealColor}]}>
                        <View style={Styles.programsInnerView}>
                        <Text style={Styles.programsNameText}>{item.NAMA_PROGRAM}</Text>
                        <Image source={Images.theme1SideArrowIcon} />
                        </View>
                        <View style={Styles.programsCalendarView}>
                        <Image source={Images.programsCalendarIcon} style={{alignSelf:'center'}}/>
                        <Text style={Styles.programsStartDateText}>{item.STARTED_DATE} - </Text>
                        <Text style={Styles.programsEndDateText}>{item.END_DATE}</Text>
                        </View>
                        <View style={Styles.programsUserView}>
                            <Image source={Images.programsUserIcon} />
                            <Text style={Styles.programsUserText}>{item.ACTIVATION_DATE}</Text>
                        </View>
                        <View style={Styles.programsStartView}>
                            <View style={Styles.programsStratLineView}></View>
                            <TouchableOpacity style={Styles.programsStartButtonView} onPress={() => {
                                navigation.push('ProgramDetails',{ID_PAKET_PROGRAM: item.ID_PAKET_PROGRAM})
                            }}>
                                <Text style={Styles.programsStartText}>Start</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                console.log(index)
                                setSelectedIndex(index)
                                setcardBottomView(!cardbottomView)
                            }}>
                               <Image source={cardbottomView && index === selectedIndex ? Images.cardUpArrowIcon : Images.cardDownArrowIcon} style={Styles.programsUpArrow}/>
                            </TouchableOpacity>
                        </View>
                        {cardbottomView && index === selectedIndex ?
                        <View style={Styles.programsVideoView}>
                            <TouchableOpacity>
                            <ImageBackground style={Styles.programsVideoImage}>
                                <Image source={Images.playIcon} style={{alignSelf:'center'}}/>
                            <View style={Styles.programsVideoNameView}>
                                <Text style={Styles.programsVideoName}>Regulasi</Text>
                                <Text style={Styles.programsVideoText}>Video</Text>
                            </View>
                            </ImageBackground>
                            </TouchableOpacity>                            
                        </View> : <View></View>
              }
                        
                </View>
                </View>
            ) }}
             />
        </View>
        </SafeAreaView>
    )
    
    // async function programsListAPI() {
    //     await axiosInstance.get('/program').then(response =>{
    //         setProgramsList(response.data.PROGRAM_AKTIF)
    //         console.log(response.data)
    //     }
    //     ).catch(error =>
    //          console.log(error.message))
    // }

    function programsListAPI(){
        const tokenStr = Constants.token;
        console.log(tokenStr,"token ");

        axiosInstance.get('/program', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`,
            }
        })
        .then(function (response) {
            console.log('RESPONSE_PROGRAMM : ', response);
            if (response.status === 200) {
                setProgramsList(response.data.PROGRAM_AKTIF)
            console.log(response.data);
            } else {
            console.log(' does not exists');
            }
        })
        .catch(function (error) {
            console.log(error.response);
            if(error.response.status === 401){
                Alert.alert(
                    "Unauthorised",
                    "Token expired",
                    [
                      { text: "OK", onPress: () => navigation.replace('LoginScreen') }
                    ]
                  );
            }
        });
    }
}

export default Programs;