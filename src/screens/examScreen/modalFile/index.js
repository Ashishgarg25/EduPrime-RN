import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Header, Button, PackageCard, PaymentPackage } from '../../../components'
import Styles from '../../../utilities/constants/Styles'
import Images from '../../../utilities/constants/Images'
import Colors from '../../../utilities/constants/Colors'
import FontSize from '../../../utilities/constants/FontSize'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../../utilities/assets/svg';
import HtmlText from 'react-native-html-to-text';
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />

import Constants from '../../../utilities/constants/Constants';

const ModalFile = ({ navigation, onPress }) => {

    useEffect(() => {
        // sethtmlText(questions[0].PERTANYAAN)
    }, [])

    function rectanglestyle(color, textValue) {
        return (
            <View style={styles.availableView}>
                <View style={[styles.boxStyle, { backgroundColor: color }]} />
                <Text style={styles.textStyle}>{textValue}</Text>
            </View>
        )
    }

    function answerType() {
        return (
            <View>
                {rectanglestyle("lightgrey", "Due to Answer")}
                {rectanglestyle(Colors.themeDarkOrangeColor, "Already Answered")}
                <View style={styles.lineStyle} />
                <FlatList
                    contentContainerStyle={styles.listView}
                    numColumns={6}
                    data={[1, 1, 1, 1, 1]}
                    renderItem={({ item, index }) => {
                        return <View style={[styles.flexView, { backgroundColor: Constants.isAnswered && Constants.quesIndex === index ?  Colors.themeDarkOrangeColor : "lightgrey" }]}>
                            <Text>{index + 1}</Text>
                        </View>

                    }}
                />
            </View>
        )
    }

    return (
        <View style={[styles.container,]}>
            <View>
                <View style={[styles.mainView,Styles.shadowView]}>
                    <TouchableOpacity onPress = {() => onPress()}>
                    <IKON name={"modalOpenIcon"} width={40} height={40} />
                    </TouchableOpacity>
                    <View style={styles.titleView}>
                        <Text style={styles.questionStyle}>Question List To Answer</Text>
                        <View style={styles.wifiIcon}>
                            <IKON name={"wifiIcon"} width={25} height={18} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.questionView,Styles.shadowView]}>
                {answerType()}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        right: 0,
        marginTop: 20,
        position: 'absolute',
    },
    titleView: {
        height: 40,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
    },
    wifiIcon: {
        padding: 10,
    },
    mainView: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Colors.primaryColor
    },
    questionStyle: {
        fontWeight: "500",
        fontSize: FontSize.Font16
    },
    questionView: {
        marginLeft: 40,
        backgroundColor: 'white',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.15,
        borderBottomEndRadius: 10,
        shadowColor: 'black',
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        borderTopColor: "transparent",
        borderRadius: 5,
        justifyContent: 'space-between'
    },
    boxStyle: {
        height: 14,
        width: 14,
        borderColor: 2,
        borderWidth: 0.6
    },
    availableView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingVertical: 5
    },
    textStyle: {
        fontWeight: "400",
        fontSize: FontSize.Font14,
        paddingHorizontal: 10
    },
    lineStyle: {
        flex: 1,
        height: 1,
        backgroundColor: 'lightgrey'
    },
    flexView: {
        height: 30,
        width: 30,
        marginHorizontal: 9,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 2,
        justifyContent: "center"
    },
    listView: {
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 10,
    }


})

export default ModalFile
