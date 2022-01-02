import React from 'react'
import { Text, View, FlatList, StyleSheet ,TouchableOpacity} from 'react-native'
import Styles,{packageActionButton,} from '../utilities/constants/Styles'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../utilities/assets/svg';
import {PackageSubItemCard} from "./index"
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../utilities/constants/Colors'

const IKON = (props) => <SvgIcon {...props} svgs={svgs} />

const PackageCard = ({ navigation, title,packageIndex ,item}) => {

    console.log("ITEM IS"+ item.item.idPaketProgram)

    return (
        <View style ={{zIndex:0}}>
        <View style={[Styles.shadowView,styles.container,{zIndex:2}]}>
          <Text>{item.item.namaPaketProgram}</Text>
        <View style = {styles.itemView}>
           <IKON name={"rupeeIcon"} width={20} height={20} />
           <Text style={{color:Colors.primaryColor,fontWeight:'bold'}} >Rp. {item.item.harga}</Text>
        </View>
        <View style = {styles.itemView}>
           <IKON name={"CalendarIcon"} width={20} height={20} />
           <Text style={{color:Colors.secondaryColor}}>{item.item.startDate} - </Text>
           <Text style={{color:Colors.secondaryColor}}>{item.item.endDate}</Text>
        </View>
          {/* <FlatList
                style={styles.listView}
                data={item}
                renderItem={(item, dta) => {
                    return listMethod(item, dta)

                }}
            /> */}
            {/* {actionButtons(item,navigation)} */}
            <View style = {packageActionButton.buttonView}>
        <View style = {packageActionButton.downButtonStyle}>
        <IKON name={"whiteDownIcon"} fill = {"white"} width={20} height={20} />
        </View>
        <View style= {packageActionButton.buttonBuyNowView}>
        <View style = {packageActionButton.xColor}>
        <Text>5x</Text>
        </View>
        <TouchableOpacity style = {packageActionButton.buyNowStyle} onPress={()=>{
            navigation.navigate('Registration',{
                idPaketProgram:item.item.idPaketProgram,
                startDate:item.item.startDate,
                endDate:item.item.endDate
            })
        }} >
        <Text style = {{color:'white'}}>Buy Now</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        
        {/* {packageIndex == 1 &&  */}
        {/* <PackageSubItemCard  /> */}
        {/* } */}
        </View>
    )
    }
   
const styles = StyleSheet.create({
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
export default PackageCard;