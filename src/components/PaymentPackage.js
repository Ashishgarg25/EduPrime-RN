import React from 'react'
import { Text, View, FlatList, StyleSheet ,TouchableOpacity,Image} from 'react-native'
import Images from '../utilities/constants/Images'
import Styles from '../utilities/constants/Styles'
import Colors from '../utilities/constants/Colors'
import FontSize from '../utilities/constants/FontSize'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../utilities/assets/svg';
import Button from './Button'
const IKON = (props) => <SvgIcon {...props} svgs={svgs} />
const bankingList = [
    "Mobile Banking",
    "Mobile Banking",
]
const arr = [
    "Discusssion Analysis Analysis Analysis Analysis Analysis",
    "Analysis Analysis Analysis Analysis Analysis Analysis",
    "Discusssion",
    "Analysis",
]

const bankingListMethod = () => {
    return (
        <View style={{ paddingHorizontal: 15, marginBottom:10 }}>
            <Text style={{ marginVertical: 5 }}>Mobile Banking</Text>
            <FlatList
                style={styles.listView}
                data={arr}
                renderItem={({ item, index }) => {
                    return <View style={styles.subViewStyle}>
                        <View style={styles.roundView}></View>
                        <Text style={{ marginLeft: 15, marginVertical: 5 }}>{item}</Text>
                    </View>

                }} />
        </View>)
}

const PaymentPackage = ({ navigation, title ,route}) => {
    return (
        
        <View style={[Styles.shadowView, styles.container]}>
            <View style={[styles.titleView,]}>
                <Text style={styles.titleStyle}>Payment</Text>
            </View>
            <View style={styles.paymenytAmount}>
                <Text style={[styles.paymentColor, styles.paymentText]}>Payment Amount</Text>
                <Text style={[styles.amountColor, styles.paymentText,{fontWeight:'bold'}]}>Rp. {route.params.packagePrice}</Text>
            </View>
            <View style={styles.paymenytAmount}>
                <Text style={styles.paymentComplete}>Please complete your payment before Fri,
                <Text style={styles.amountColor}> Dec 11, 2020</Text>  10:15 PM</Text>
            </View>
            <FlatList
                contentContainerStyle={styles.listStyle}
                horizontal
                ListHeaderComponent={() => { return (<IKON name={"leftIcon"} width={20} height={20} />) }}
                ListFooterComponent={() => { return (<IKON name={"rightIcon"} width={20} height={20} />) }}
                data={bankingList}
                renderItem={({ item, index }) => {
                    return <View style={styles.listValue}>
                        <Button text={item} textStyle={{fontWeight:'400',color: index === 0 ? Colors.white : Colors.themeLightPurpleColor}} viewStyle={{backgroundColor: 
                           index === 0 ? Colors.themeLightPurpleColor : Colors.white,borderWidth:1,borderColor:Colors.themeLightPurpleColor}} onPress={()=>{
                               
                           }}/>
                    </View>

                }}
            />
            {bankingListMethod()}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 7,
    },
    titleView: {
        padding: 18,
        borderBottomWidth: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'lightgrey'
    },
    titleStyle: {
        fontSize: FontSize.Font16
    },
    paymenytAmount: {
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentColor: {
        color: Colors.themeLightPurpleColor
    },
    paymentText: {
        fontSize: FontSize.Font20,
        fontWeight:'500'
    },
    amountColor: {
        color: Colors.primaryColor,
        marginTop: 5,
    },
    paymentComplete: {
        paddingHorizontal: 60,
        paddingVertical: 14,
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.themeLightPurpleColor
    },
    listStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    listValue: {
        alignItems: 'center',
        marginTop: -18
    },
    listView: {
        marginTop: 10,
    },
    subViewStyle: {
        flexDirection: 'row'
    },
    roundView: {
        height: 11,
        width: 11,
        borderRadius: 5.5,
        backgroundColor: 'grey',
        marginTop: 7
    }

})

export default PaymentPackage