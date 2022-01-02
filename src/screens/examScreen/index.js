import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import axiosInstance from '../../api/APIConfig'
import { Header, Button } from '../../components'
import Constants from '../../utilities/constants/Constants'
import QuestionFile from "./questionFile"
import ModalFile from "./modalFile"
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../utilities/assets/svg';
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />
import styles from "./styles"
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../utilities/constants/Styles'
import Colors from '../../utilities/constants/Colors';

const ExamScreen = ({ navigation ,route}) => {

    const [questions,setQuestions] = useState("")
    const [showModal,setModal] = useState(false)
    const [timerVal, setTimerVal] = useState()

    useEffect(() => {
        getExamAPI()
        getExamTimerAPI()
    },[])

    function rightIcon() {
        return (
            <View style={styles.rightIconView}>
                <TouchableOpacity onPress = {() =>  setModal(true)}>
                    <IKON name={"examrightIcon"} width={40} height={40} style={styles.ikonStyle} />
                </TouchableOpacity>
            </View>
        )
    }
    function getExamAPI() {
        const tokenStr = Constants.token;
        console.log("JADWAL PROFILE " +route.params.ID_JADWAL_PROFIL_CBT);
        console.log("PROFILE CBT " + route.params.ID_PROFIL_CBT);
        console.log("SUB PROFILE " + route.params.ID_SUB_PROFIL_CBT);

        let url = ""
        if(route.params.selIndex === 0){
            url = "/cbt/agcu/"
        }else if(route.params.selIndex === 1){
            url = "/cbt/too/"
        }else if(route.params.selIndex === 2){
            url = "/cbt/akm/"
        }

        axiosInstance.get(`${url}soal/${route.params.ID_JADWAL_PROFIL_CBT}/${route.params.ID_PROFIL_CBT}/${route.params.ID_SUB_PROFIL_CBT}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${tokenStr}`,
            }
        })
        .then((response) => {
            if(response.status === 200) {
                Constants.durasiValue = response.data.DURASI;
            }
            console.log("sgahshasdhsadsa",response.data.dataSoal)
            setQuestions(response.data.dataSoal)
        })
        .catch(error => console.log(error))
        
    }
    function getExamTimerAPI(){
        const tokenStr = Constants.token;

        let url = ""
        if(route.params.selIndex === 0){
            url = "/cbt/agcu/"
        }else if(route.params.selIndex === 1){
            url = "/cbt/too/"
        }else if(route.params.selIndex === 2){
            url = "/cbt/akm/"
        }


        axiosInstance.get(`${url}detail/${route.params.ID_JADWAL_PROFIL_CBT}/${route.params.ID_PROFIL_CBT}/${route.params.ID_SUB_PROFIL_CBT}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${tokenStr}`,
            }
        })
        .then((response) => {
            // console.log("timer",response.data)
            console.log("Timer"+response)
           
        })
        .catch(error => console.log(error))
        
    }

    const submitAns = () => {

        const tokenStr = Constants.token;

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`,
            }
        };

        let data = {
            idjadwal : route.params.ID_JADWAL_PROFIL_CBT,
            idprofil : route.params.ID_PROFIL_CBT,
            idsubheader : route.params.HEADER_VAL,
            idsubprofil : route.params.ID_SUB_PROFIL_CBT,
            totalPengerjaan : Constants.timeLeft
        }

        axiosInstance.post('/cbt/submit', data, config)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data)
                } else {
                console.log(' does not exists');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Physics Exam" />
            <View style = {{flex:1}}>
            <ScrollView >
            {rightIcon()}
            <QuestionFile questions={questions} answers={questions} headerVal={route.params.HEADER_VAL}/>
            <TouchableOpacity style={[Styles.loginButton, Styles.viewStyle, styles.leftButtonColor, {marginBottom:16}]} onPress={() => submitAns}>
                <Text style={[styles.textStyle, {color: Colors.white}]}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
            {showModal &&<View style = {styles.indexValue}>
            <ModalFile onPress={() => setModal(false)} />
            </View> }
            </View>

        </SafeAreaView>
    )
 }

export default ExamScreen