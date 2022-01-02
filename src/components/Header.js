import React,{useState,useEffect} from 'react'
import {Text, View,Image, Platform, TouchableOpacity,FlatList} from 'react-native'
import Images from '../utilities/constants/Images'
import Styles from '../utilities/constants/Styles'
import Colors from '../utilities/constants/Colors'
import Constants from '../utilities/constants/Constants'
import GlobalVar from '../utilities/constants/GlobalVar'

const Headerdata = [
    {
        title: Constants.Agcu,
    },
    {
        title: Constants.cbtTryOut,
    },

    {
        title: Constants.Asm,
    },
]

const Header = ({navigation,title,from,onPress,bgColor,sendIndex}) => {
    const [selIndex,setSelIndex] = useState(0)
    var bgColor =  Colors.subPrimaryColor
    useEffect(()=>{

    },[])
    return(
        <>
          <View style={{flexDirection:'column'}}>
            <View style={[Styles.headerView,{height: from === "ProgramsDetails" ? 160 : 110}]}>
            {from === "ProgramsDetails" ?
            <TouchableOpacity style={{alignSelf:'center',marginLeft:20,width:30,height:30}} onPress={() => {
                navigation.pop()
            }}>
            <Image source={Images.backIcon}/>
            </TouchableOpacity>
               :<View></View> }
            <Text style={Styles.headerTitle}>{title}</Text>
            <Image source={Images.dasboardShadow} style={{}} />
            </View>
            {from === "ProgramsDetails" ?
             <FlatList style={{marginTop:-55 }}
             contentContainerStyle={{flex:1,justifyContent:'space-between',marginRight:20}}
             horizontal
             data={Headerdata}
             ItemSeparatorComponent={
                () => <View style={{justifyContent:'space-between'}}/>
            }
              renderItem={({ item , index }) => {
                  return(
                <>
             {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:-50}}> */}
            <TouchableOpacity style={{}} onPress={() => {
                setSelIndex(index)
                sendIndex(index)
            }}>
            <Text style={[Styles.examsTypes,{backgroundColor: index === selIndex ? bgColor : "transparent"},
            {color : index === selIndex ? Colors.white : Colors.subPrimaryColor}]}>{item.title}</Text>
            </TouchableOpacity>

            </>
        ) }}
        />
            
            : <View></View>
}
        
        </View>
        </>
    )
}

export default Header;