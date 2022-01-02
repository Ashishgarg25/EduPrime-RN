import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, ScrollView ,StyleSheet} from 'react-native'
import { Header, Button, PackageCard } from '../../../components'
import Styles from '../../../utilities/constants/Styles'
import Images from '../../../utilities/constants/Images'
import Colors from '../../../utilities/constants/Colors'
import FontSize from '../../../utilities/constants/FontSize'
// import styles from "./styles"
import Loader from '../../../components/Loader'
import axios from 'react-native-axios'
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../../utilities/assets/svg';
import Constants from '../../../utilities/constants/Constants';

const IKON = (props) => <SvgIcon {...props} svgs={svgs} />

const PackageDetails = ({ navigation ,route }) => {
    const [programsList,setProgramsList] = useState("")
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        selectedPackageAPI()
        
    }, [])


    return (
        <SafeAreaView style={{flex:1}}>
            {/* <Header title="Packages" /> */}
            <ScrollView>
        {/* <View style ={{zIndex:0}}> */}
        <Text style={{color:'black',marginTop:50,alignSelf:'center',fontSize:FontSize.Font20,fontWeight:'500'}}>{Constants.selectedPackages}</Text>
        <View style={[Styles.shadowView,styles.container,{marginLeft:10,marginRight:10,borderRadius:10,padding:10}]}>
          <Text style={{fontWeight:'500',fontSize:FontSize.Font16}}>{programsList.NAMA_PROGRAM}</Text>
        <View style = {styles.itemView}>
           <IKON name={"rupeeIcon"} width={20} height={20} />
           <Text style={{color:Colors.primaryColor,fontWeight:'bold'}} >Rp. {programsList.HARGA}</Text>
        </View>
        <View style = {styles.itemView}>
           <IKON name={"CalendarIcon"} width={20} height={20} />
           <Text style={{color:Colors.secondaryColor}}>{route.params.startDate} - </Text>
           <Text style={{color:Colors.secondaryColor}}>{route.params.endDate}</Text>
        </View>
        </View>
        
        {/* {packageIndex == 1 &&  */}
        {/* <PackageSubItemCard  /> */}
        {/* } */}
        {/* </View> */}
            {/* <PackageCard/>  */}
            <Button />
            <Loader loading={loading} />
            </ScrollView>
        </SafeAreaView>
    )

    function selectedPackageAPI(){
        setLoading(true)
        axios({
            method: "get",
            url: `https://k8s-be.eduprime.co.id/api/get_paket_program/${route.params.idPaketProgram}`,
          })
            .then(function (response) {
                console.log("selected package successfull", response.data)
                setProgramsList(response.data)
                setLoading(false)
                // setProgramsList(response.data.data.listPaket)
            })
            .catch(function (error) {
              console.log(error);
            });
    }

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

export default PackageDetails