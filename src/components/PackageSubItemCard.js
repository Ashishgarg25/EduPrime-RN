import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Images from '../utilities/constants/Images'
import Styles from '../utilities/constants/Styles'

var itemVal = [
    {
        textVal: "DEEP TRY OUT TPS UTBK 2020",
        arr: [
            "Discusssion",
            "Analysis",
            "Discusssion",
            "Analysis",
            // "Discusssion",
            // "Analysis",
            // "Discusssion",
            // "Analysis"
        ]
    },
    {
        textVal: "DEEP TRY OUT TPS UTBK 2020",
        arr: [
            "Discusssion",
            "Analysis",
            "Discusssion",
            "Analysis",
            "Discusssion",
            "Analysis",
            "Discusssion",
            "Analysis"
        ]
    }
]


const PackageSubItemCard = ({ navigation, title }) => {
    return (
        <View style={styles.packageView}>
            <FlatList
                style={[styles.listView ]}
                data={itemVal}
                renderItem={({item, index}) => {
                    return (<View style= {{marginTop:20, paddingHorizontal:20}}>
                    <Text>{item.textVal}</Text>
                    <FlatList
                        style={styles.listView}
                        data={item.arr}
                        renderItem={({item, index}) => {
                            return <View style = {styles.subViewStyle}>
                                <View style= {styles.roundView}></View>
                                <Text style = {{marginLeft:15, marginVertical:5}}>{item}</Text>
                                </View>
        
                        }} />
                </View>)
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    packageView: {
        backgroundColor: 'white',
        // flex:1,
        marginHorizontal:15,
        paddingBottom:10,
        marginTop:-2,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10
    },
    listView:{
        marginTop:10,
    },
    subViewStyle:{
        flexDirection:'row'
    },
    roundView:{
        height:11,
        width:11,
        borderRadius: 5.5,
        backgroundColor:'grey',
        marginTop:7
    }
})
export default PackageSubItemCard;