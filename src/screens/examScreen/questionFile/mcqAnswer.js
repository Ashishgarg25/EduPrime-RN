import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Styles from '../../../utilities/constants/Styles'
import Colors from '../../../utilities/constants/Colors'
import FontSize from '../../../utilities/constants/FontSize'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../../utilities/assets/svg';
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />
import HtmlText from 'react-native-html-to-text';
import Constants from '../../../utilities/constants/Constants';

const MCQAnswer = ({ navigation ,answers, quesNum, count}) => {

    const [jawab1, setJawab1] = useState("");
    const [jawab2, setJawab2] = useState("");
    const [jawab3, setJawab3] = useState("");
    const [jawab4, setJawab4] = useState("");
    const [jawab5, setJawab5] = useState("");
    const [jawab6, setJawab6] = useState("");

    const [selectedIndex1,setSelectedIndex1] = useState();
    const [selectedIndex2,setSelectedIndex2] = useState();
    const [selectedIndex3,setSelectedIndex3] = useState();
    const [selectedIndex4,setSelectedIndex4] = useState();
    const [selectedIndex5,setSelectedIndex5] = useState();
    const [selectedIndex6,setSelectedIndex6] = useState();

    useEffect(()=>{

        let answere = Constants.selectedAns.filter(item => item.quesNum !== undefined && item.quesNum === quesNum ? item : null);

        if(answere === null){
            selectedIndex1("");
        }else{
            setSelectedIndex1(answere.ans)
        }

        console.log("QUESTION NUMBER"+quesNum);

        if(answers[quesNum] !== undefined) {
            setJawab1(answers[quesNum].JAWAB1);
            setJawab2(answers[quesNum].JAWAB2);
            setJawab3(answers[quesNum].JAWAB3);
            setJawab4(answers[quesNum].JAWAB4);
           if(answers[quesNum].JAWAB5 !== undefined){
            setJawab5(answers[quesNum].JAWAB5);
           }
           if(answers[quesNum].JAWAB6 !== undefined){
            setJawab6(answers[quesNum].JAWAB6);
           }
        }
        
    },[count])
    return (
        <View style={styles.answerStyle}>

            <TouchableOpacity onPress={() => {
                setSelectedIndex1(0);
                Constants.selectedAns.push({
                    quesNum: quesNum,
                    ans: 0
                })
                // if(Constants.quesIndex === count){
                //     Constants.ansIndex = 0;
                //     Constants.isAnswered = true;
                // }
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.answerKey}>A</Text>
                    <View style={[Styles.shadowView, styles.circle]}>
                        { 0 === selectedIndex1  && <View style={styles.subColor}></View>}
                    </View>
                    <HtmlText style={styles.answerStyle} html={jawab1}></HtmlText>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setSelectedIndex1(1);
                // if(Constants.quesIndex === count){
                //     Constants.ansIndex = 1;
                //     Constants.isAnswered = true;
                // }
                Constants.selectedAns.push({
                    quesNum: quesNum,
                    ans: 1
                })
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.answerKey}>B</Text>
                    <View style={[Styles.shadowView, styles.circle]}>
                        { 1 === selectedIndex1  && <View style={styles.subColor}></View>}
                    </View>
                    <HtmlText style={styles.answerStyle} html={jawab2}></HtmlText>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setSelectedIndex1(2);
                // if(Constants.quesIndex === count){
                //     Constants.ansIndex = 2;
                //     Constants.isAnswered = true;
                // }
                Constants.selectedAns.push({
                    quesNum: quesNum,
                    ans: 2
                })
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.answerKey}>C</Text>
                    <View style={[Styles.shadowView, styles.circle]}>
                        { 2 === selectedIndex1  && <View style={styles.subColor}></View>}
                    </View>
                    <HtmlText style={styles.answerStyle} html={jawab3}></HtmlText>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                setSelectedIndex1(3);
                // if(Constants.quesIndex === count){
                //     Constants.ansIndex = 3;
                //     Constants.isAnswered = true;
                // }
                Constants.selectedAns.push({
                    quesNum: quesNum,
                    ans: 3
                })
            }}>
                
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.answerKey}>D</Text>
                    <View style={[Styles.shadowView, styles.circle]}>
                        { 3 === selectedIndex1  && <View style={styles.subColor}></View>}
                    </View>
                    <HtmlText style={styles.answerStyle} html={jawab4}></HtmlText>
                </View>
            </TouchableOpacity>

            {jawab5 !== "" ?

                <TouchableOpacity onPress={() => {
                    setSelectedIndex1(4);
                    // if(Constants.quesIndex === count){
                    //     Constants.ansIndex = 4;
                    //     Constants.isAnswered = true;
                    // }
                    Constants.selectedAns.push({
                        quesNum: quesNum,
                        ans: 4
                    })
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.answerKey}>E</Text>
                        <View style={[Styles.shadowView, styles.circle]}>
                            { 4 === selectedIndex1  && <View style={styles.subColor}></View>}
                        </View>
                        <HtmlText style={styles.answerStyle} html={jawab5}></HtmlText>
                    </View>
                </TouchableOpacity>
            
            :

                null
            
            }

            {jawab6 !== "" ?

                <TouchableOpacity onPress={() => {
                    setSelectedIndex1(5);
                    // if(Constants.quesIndex === count){
                    //     Constants.ansIndex = 5;
                    //     Constants.isAnswered = true;
                    // }
                    Constants.selectedAns.push({
                        quesNum: quesNum,
                        ans: 5
                    })
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.answerKey}>F</Text>
                        <View style={[Styles.shadowView, styles.circle]}>
                            { 5 === selectedIndex1  && <View style={styles.subColor}></View>}
                        </View>
                        <HtmlText style={styles.answerStyle} html={jawab6}></HtmlText>
                    </View>
                </TouchableOpacity>
            
            :
                null
        
            }

        </View>
    )

}
const styles = StyleSheet.create({
    answerStyle: {
        marginTop: 5
    },
    listItem: {
        flexDirection: "row",
        paddingVertical: 7,
    },
    circle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 1,
        alignItems: 'center',
        shadowOffset: { width: -1, height: 2 },
        borderColor: Colors.themeLightPurpleColor,
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 3
    },
    subColor: {
        height: 9,
        width: 9,
        borderRadius: 4.5,
        backgroundColor: Colors.themeLightPurpleColor
    },
    answerKey: {
        fontSize: FontSize.Font20,
        fontWeight: "400",
        marginRight: 15,
        marginLeft: 3
    },
    answerStyle: {
        fontSize: FontSize.Font14,
        fontWeight: "400",
        color: Colors.subSecondaryColor
    }
})
export default MCQAnswer