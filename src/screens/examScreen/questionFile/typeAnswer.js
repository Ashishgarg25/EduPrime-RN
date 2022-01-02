import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Header, Button, PackageCard, PaymentPackage } from '../../../components'
import Styles from '../../../utilities/constants/Styles'
import Images from '../../../utilities/constants/Images'
import Colors from '../../../utilities/constants/Colors'
import FontSize from '../../../utilities/constants/FontSize'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../../utilities/assets/svg';
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />


const TypeAnswer = ({ navigation }) => {
    return (
        <View style={styles.answerStyle}>
         <TextInput
           style={{height: 200, padding:16}}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your Answer here..."
            multiline = {true}
            placeholderTextColor={Colors.themeLightGrayPurpleColor}
            onChangeText={(text) => {
            }}
          />
        </View>
    )

}
const styles = StyleSheet.create({
    answerStyle: {
        marginTop: 5,
        borderWidth:1,
        borderColor: Colors.themeLightPurpleColor,
        borderRadius:6
    },
   
})
export default TypeAnswer