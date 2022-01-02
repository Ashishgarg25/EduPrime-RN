import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Header, Button, PackageCard, PaymentPackage } from '../../../components'
import MCQAnswer from './mcqAnswer';
import TypeAnswer from './typeAnswer';
import Styles from '../../../utilities/constants/Styles'
import Images from '../../../utilities/constants/Images'
import Colors from '../../../utilities/constants/Colors'
import FontSize from '../../../utilities/constants/FontSize'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../../utilities/assets/svg';
import HtmlText from 'react-native-html-to-text';
import moment from "moment";

import Constants from '../../../utilities/constants/Constants';


//https://k8s-be.eduprime.co.id/api/cbt/answer

// idBankSoal: "12907"
// idJadwal: "9279"
// idSubProfil: "8883"
// idprofil: "6769"
// idsiswa: "965389"
// idsoalhub: "101538"
// idsubheader: "12320893"
// jawaban: "1"
// tipeSoal: "MULTIPLE"
// totalwaktu: 2.08
// waktu: "1.08"

const IKON = (props) => <SvgIcon {...props} svgs={svgs} />


const QuestionFile = ({ navigation, questions ,answers, headerVal }) => {
    const [htmlText,sethtmlText] = useState("");

    const [quesNum, setQuesNum] = useState(0);
    
    let val = Constants.durasiValue;
    const [eventDate, setEventDate] = useState(moment.duration().add({minutes: val,seconds:0}))
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const [count, setCount] = useState(0);

    const Questions = (quesNum) => {
        Constants.quesIndex = quesNum;
        if(questions[quesNum] !== undefined) {
            sethtmlText(questions[quesNum].PERTANYAAN)
        }
    }

    const updateTimer = () => {
        let eDate =  eventDate;
        
        const x = setInterval(()=>{
            if(eDate <=0){
              clearInterval(x)
            }else {
                eDate = eDate.subtract(1,"s")
              const mins = eDate.minutes()
              const secs = eDate.seconds()
              
              setMin(mins);
              setSec(secs);
              setEventDate(eDate);
    
            }
          },1000)
    }

    useEffect(()=>{
        Questions(0);
        updateTimer();
    },[])

    const submitIndividualAns = () => {

        setQuesNum(quesNum + 1);
        Questions(quesNum);
        setCount(count + 1)

        let second = sec * 1000;
        let minute = min * 60000;

        let milli = minute+second
        let timeLeft = Constants.durasiValue - milli;

        Constants.timeLeft = timeLeft;

        let wakt = timeLeft - milli;

        const tokenStr = Constants.token;

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`,
            }
        };

        var data = {
            idBankSoal: questions[quesNum] !== undefined ? questions[quesNum].ID_BANK_SOAL : "",
            idJadwal: questions[quesNum] !== undefined ? questions[quesNum].ID_JADWAL_PROFIL_CBT : "",
            idSubProfil: questions[quesNum] !== undefined ? questions[quesNum].ID_SUB_PROFILE_CBT : "",
            idprofil: questions[quesNum] !== undefined ? questions[quesNum].ID_PROFILE_CBT : "",
            idsiswa: questions[quesNum] !== undefined ? questions[quesNum].ID_SISWA : "",
            idsoalhub: questions[quesNum] !== undefined ? questions[quesNum].ID_CBT_SOAL_HUB : "",
            idsubheader: headerVal,
            jawaban: Constants.selectedAns.quesNum === quesNum ? Constants.selectedAns.ans : "",
            tipeSoal: questions[quesNum] !== undefined ? questions[quesNum].TIPE_SOAL : "",
            totalwaktu: `${min}.${sec}`,
            waktu: wakt
        }

        axiosInstance.post('/cbt/answer', data, config)
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

    function questionMethod() {
        
        return (
            <View style={styles.questionView}>
                <View style={styles.titleView}>
                    <IKON name={"questionView"} width={25} height={21} style={styles.ikonStyle} />
                    <HtmlText style={styles.QTitle} html={htmlText}></HtmlText>
                </View>
            </View>
        )
    }

    function buttonMethod() {
        return (
            <View style = {styles.buttonView}>
                <TouchableOpacity disabled={quesNum <= 0 ? true : false} style={[Styles.loginButton, Styles.viewStyle, styles.leftButtonColor]}  onPress={() => {
                    setQuesNum(quesNum - 1);
                    Questions(quesNum);
                    setCount(count -1);
                }}>
                    
                    <Text style={[styles.textStyle, {color: Colors.white}]}> <IKON name="previousIcon" height = {4} width = {17}   /> &nbsp; Prev</Text>
                </TouchableOpacity>

                <TouchableOpacity disabled={quesNum >=4 ? true : false} style={[Styles.loginButton, Styles.viewStyle, styles.rightButtonColor]} onPress={() => submitIndividualAns}>
                    <Text style={[styles.textStyle, {color: Colors.white}]}>Next &nbsp; <IKON name="nextIcon" height = {4} width = {17}   /></Text>
                    
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[styles.container, Styles.shadowView]}>
            <View style={styles.headerView}>
                <Text style={styles.questionStyle}>Question No: {quesNum + 1}</Text>
                <Text style={styles.questionStyle}>{min}:{sec}</Text>
            </View>
            <View style={styles.questionView}>
                {questionMethod()}
                {questions[quesNum] !== undefined && questions[quesNum].TIPE_SOAL === "MULTIPLE" ?
                    <MCQAnswer answers={answers} quesNum={quesNum} count={count}/>
                :
                    <TypeAnswer />
                }
            </View>

           
            {buttonMethod()}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 20,
        borderColor: Colors.themeLightBlueColor,
        borderWidth: 1,
        borderRadius:10
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,
        backgroundColor: Colors.themeLightGrayBlueColor
    },
    questionStyle: {
        fontWeight: "400",
        fontSize: FontSize.Font16
    },
    questionView: {
        padding: 14
    },
    subTitle: {
        fontWeight: '600',
        fontSize: FontSize.Font16,
        color: Colors.themeLightPurpleColor
    },
    questionImage: {
        marginVertical: 14,
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    ikonStyle: {
        marginLeft: -10,
        marginTop: 6
    },
    titleView: {
        flexDirection: 'row'
    },
    QTitle: {
        fontWeight: '500',
        fontSize: FontSize.Font14,
        marginLeft: 10,
        color: Colors.subSecondaryColor
    },
    buttonView:{
        marginTop:5,
        borderTopWidth:1,
        borderColor:'lightgrey',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:14,
        paddingBottom:10,
        paddingTop:-20
    },
    viewStyle:{
        flexDirection:"row",
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        marginTop:15
    },
    leftButtonColor:{
        backgroundColor:Colors.themeLightPurpleColor
    },
    textStyle:{
        paddingHorizontal:5
    }

})

export default QuestionFile
