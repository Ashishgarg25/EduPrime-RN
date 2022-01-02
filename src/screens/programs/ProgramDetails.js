import React,{useEffect,useState} from 'react'
import {Text,View, SafeAreaView, FlatList, TouchableOpacity, Image,ImageBackground} from 'react-native'
import Header from '../../components/Header'
import axiosInstance from '../../api/APIConfig'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Colors from '../../utilities/constants/Colors'
import FontSize from '../../utilities/constants/FontSize'
import Constants from '../../utilities/constants/Constants'
import GlobalVar from '../../utilities/constants/GlobalVar'
import * as axios from 'react-native-axios';

const ProgramDetails = ({navigation,route}) => {
    const [agcuList,setAgcuList] = useState([])
    const [agcuDetail,setagcuDetail] = useState([])
    const [agcuNonAcademic,setagcuNonAcademic] = useState([])
    const [tryoutList,setTryoutList] = useState([])
    const [tryoutDetail,setTryoutDetail] = useState([])
    const [asmList,setAsmList] = useState([])
    const [asmDetail,setAsmDetail] = useState([])
    const [asmNonAcademic,setasmNonAcademic] = useState([])
    const [programData,setProgramsData] = useState([])
    const [cardbottomView,setcardBottomView] = useState(false)
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [cardIndex,setCardIndex] = useState(0)
    const [jadwalProfilCbt,setjadwalProfilCbt] = useState("")
    const [idSiswa,setidSiswa] = useState("")
    const [profileCbt,setprofileCbt] = useState("")

    useEffect(() => {
        programsDetailAPI()
       },[]) 

        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                 <Header title="Programs" from="ProgramsDetails" bgColor={true} sendIndex={saveIndex} navigation={navigation}/>
                 <FlatList 
                 data={selectedIndex === 0 ? agcuList : selectedIndex === 1 ? tryoutList : selectedIndex === 2 ? asmList : []}
                  renderItem={({ item , index }) => {
                      return(
                        <View style={Styles.programsCardContainer}>
                        <View style={[Styles.progrmsCardView,{borderColor:selectedIndex === 0 ? Colors.themeDarkTealColor :
                            selectedIndex === 1 ? Colors.themeDarkOrangeColor : selectedIndex === 2 ? 
                            Colors.themeNavyBlueColor : Colors.themeDarkTealColor  }]}>
                            <View style={Styles.programsInnerView}>
                                <View style={{flexDirection:'column'}}>
                                <Text style={Styles.programsNameText}>{programData.NAMA_PROGRAM}</Text>
                                <Text style={Styles.subjectNameText}>{item.NAMA_PROFIL}</Text>
                                </View>
                            <Image source={selectedIndex === 0 ? Images.theme1SideArrowIcon :
                            selectedIndex === 1 ? Images.theme2SideArrowIcon : selectedIndex === 2 ? 
                            Images.theme3SideArrowIcon : Images.theme1SideArrowIcon}  />
                            </View>
                            <View style={Styles.programsCalendarView}>
                            <Image source={Images.programsCalendarIcon} style={{alignSelf:'center'}}/>
                            <Text style={Styles.programsStartDateText}>{item.JADWAL_MULAI} - </Text>
                            <Text style={Styles.programsEndDateText}>{item.JADWAL_SELESAI}</Text>
                             </View>
                            <View style={Styles.programsUserView}>
                                <Image source={Images.programsUserIcon} />
                                <Text style={Styles.programsUserText}>{item.NAMA_PROFIL}</Text>
                            </View>
                            <View style={Styles.programsStartView}>
                                <View style={[Styles.programsStratLineView,{backgroundColor: selectedIndex === 0 ? Colors.themeDarkTealColor :
                                    selectedIndex === 1 ? Colors.themeDarkOrangeColor : 
                                    selectedIndex === 2 ? Colors.themeNavyBlueColor : Colors.themeDarkTealColor}]}></View>
                                <TouchableOpacity style={Styles.programsStartButtonView} onPress={() => {
                                    navigation.push('ExamScreen',{ID_PROFIL_CBT: item.ID_PAKET_PROGRAM,ID_SUB_PROFIL_CBT:item.ID_SUB_PROFIL_CBT,
                                        idSiswa:idSiswa,ID_JADWAL_PROFIL_CBT:jadwalProfilCbt})
                                }}>
                                    <Text style={Styles.programsStartText}>Start</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginRight:10}} onPress={() => {
                                    console.log(index)
                                    setCardIndex(index)
                                    setcardBottomView(!cardbottomView)
                                    programsSubjectAPI(index)
                                    
                                }}>
                                <Image source={cardbottomView && index === selectedIndex ? Images.cardUpArrowIcon : Images.cardDownArrowIcon} style={Styles.programsUpArrow}/>

                                </TouchableOpacity>
                            </View>
                            {cardbottomView && index === cardIndex ?
                            <View style={{marginTop:10,marginBottom:10}}>
                               <FlatList 
                                 data={selectedIndex === 0 ? agcuDetail : selectedIndex === 1 ? tryoutDetail : selectedIndex === 2 ? asmDetail : []}
                                ItemSeparatorComponent={
                                    () => <View style={{height:20}}/>
                                }
                                renderItem={({ item , index }) => {
                                    let anseredQuestions =  parseInt(item.BENAR) + parseInt(item.SALAH)
                                   let date = String(item.JADWAL_SUB_MULAI).split(' ');
                                    let days = String(date[0]).split('-');
                                    return(
                                        <View style={Styles.programsDetilCardView}>
                                            <View style={{flexDirection:'row',marginLeft:10}}>
                                            <View style={Styles.programsDetailDateView}>
                                                <Text style={Styles.programDetailDateText}>{days[2]}</Text>
                                                <Text style={{color: Colors.themeLightPurpleColor}}>{days[1]} {days[0]}</Text>
                                                <Text style={{marginBottom:10}}>{days[0]}</Text>
                                            </View>
                                        <View style={{flexDirection:'column'}}>
                                            <Text style={{marginTop:20,marginLeft:10}}>{item.NAMA_SUB_PROFIL}</Text>
                                            <View style={{flexDirection:'row',marginTop:10}}>
                                                <View style={Styles.programDetailsQuestionView}>
                                                <Text style={Styles.programDetailQuestionText}>No Of Questions: {item.JUMLAH_SOAL}</Text>
                                                <Text style={Styles.programDetailDurationText}>Duration: {item.DURASI} min</Text>
                                                        
                                                </View>
                                                <View style={Styles.programDetailsQuestionView}>
                                                <Text style={Styles.programDetailQuestionText}>Answered: {isNaN(anseredQuestions) ? 0 : anseredQuestions}/{item.JUMLAH_SOAL}</Text>
                                                <Text style={Styles.programDetailDurationText}>Correct: {isNaN(item.BENAR) ? 0 : item.BENAR || 0}/{isNaN(anseredQuestions) ? 0 : anseredQuestions}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        </View>
                                        <View style={{height:1,backgroundColor: Colors.themeLightGrayColor}}></View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                            <Text style={{alignSelf:'flex-start',margin:10,alignSelf:'center',color:subjectExamsStatus(item,index) === "Start" ? Colors.themeNavyBlueColor :
                                                subjectExamsStatus(item,index) === "Continue" ? Colors.themeDarkOrangeColor :
                                                 subjectExamsStatus(item,index) === "Report" ? Colors.secondaryColor : Colors.secondaryColor}}>{
                                                subjectExamsStatus(item,index) === "Start" ? "Not Started" :
                                                subjectExamsStatus(item,index) === "Continue" ? "Ongoing" :
                                                 subjectExamsStatus(item,index) === "Report" ? "Completed" : "Not Started"}</Text>
                                            <TouchableOpacity onPress={()=>{
                                                if(subjectExamsStatus(item,index) !== "Report"){
                                                console.log(selectedIndex,subjectExamsStatus(item,index),"sjjsjsjsj")
                                                 navigation.push('ExamScreen',{ID_PROFIL_CBT: profileCbt,ID_SUB_PROFIL_CBT:item.ID_SUB_PROFIL_CBT,
                                                    idSiswa:idSiswa,ID_JADWAL_PROFIL_CBT:jadwalProfilCbt,selIndex:selectedIndex, HEADER_VAL: item.ID_SUB_HEADER_HASIL_CBT})
                                                 }
                                            }}>
                                                <Text style={{fontSize: FontSize.Font12,margin:10,borderWidth:1,borderColor:subjectExamsStatus(item,index) === "Start" ? Colors.secondaryColor :
                                                 subjectExamsStatus(item,index) === "Continue" ? Colors.themeNavyBlueColor :
                                                 subjectExamsStatus(item,index) === "Report" ? Colors.themePinkColor : Colors.secondaryColor ,
                                                padding:10,borderRadius:5}}>{subjectExamsStatus(item,index)}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        </View>
                                    ) }}
                                    /> 
                            </View> : <View></View>
                  }
                            
                    </View>
                    </View>
                ) }}
                 />
            </View>
            </SafeAreaView>
    )

    function saveIndex(selIndex) {
        setSelectedIndex(selIndex)
    }

    function programsDetailAPI() {
        const tokenStr = Constants.token;
        axiosInstance.get(`/programdetail/${route.params.ID_PAKET_PROGRAM}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${tokenStr}`,
            }
        })
        .then(function (response) {
            // console.log('RESPONSE_PROGRAMM : ', response);
            if (response.status === 200) {
                setAgcuList(response.data.AGCU) , setTryoutList(response.data.TRYOUT) , setAsmList(response.data.ASM)
                setProgramsData(response.data.PROGRAM)
               
            } else {
            console.log(' does not exists');
            }
        })
        .catch(function (error) {
            console.log(error);
        });

        // axiosInstance.get(`/programdetail/${route.params.ID_PAKET_PROGRAM}`)
        // .then((response) => {
        //     setAgcuList(response.data.AGCU) , setTryoutList(response.data.TRYOUT) , setAsmList(response.data.ASM)
        //     setProgramsData(response.data.PROGRAM)
        // })
        // .catch(error => console.log(error))
    }

    function programsSubjectAPI(itemIndex){

        const tokenStr = Constants.token;

        let ID_JADWAL_PROFIL_CBT = ""
        let ID_PROFIL_CBT = ""
        let url = ""
        if(selectedIndex === 0){
            ID_JADWAL_PROFIL_CBT = agcuList[itemIndex].ID_JADWAL_PROFIL_CBT
            ID_PROFIL_CBT = agcuList[itemIndex].ID_PROFIL_CBT
            url = `/cbt/agcu/detail/${programData.ID_PAKET_PROGRAM}/${ID_JADWAL_PROFIL_CBT}/${ID_PROFIL_CBT}`
        }else if(selectedIndex === 1){
            ID_JADWAL_PROFIL_CBT = tryoutList[itemIndex].ID_JADWAL_PROFIL_CBT
            ID_PROFIL_CBT = tryoutList[itemIndex].ID_PROFIL_CBT
            url = `/cbt/too/detail/${programData.ID_PAKET_PROGRAM}/${ID_JADWAL_PROFIL_CBT}/${ID_PROFIL_CBT}`
        }else{
            ID_JADWAL_PROFIL_CBT = asmList[itemIndex].ID_JADWAL_PROFIL_CBT
            ID_PROFIL_CBT = asmList[itemIndex].ID_PROFIL_CBT
            url = `/cbt/akm/detail/${programData.ID_PAKET_PROGRAM}/${ID_JADWAL_PROFIL_CBT}/${ID_PROFIL_CBT}`
        }
        axiosInstance.get(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${tokenStr}`,
            }
        })
        .then((response) => {
            if(response === 200){
                console.log(response.data.idSiswa)
            }
            console.log(response.data);
            setidSiswa(response.data.idSiswa)
            setjadwalProfilCbt(response.data.ID_JADWAL_PROFIL_CBT)
            setprofileCbt(response.data.ID_PROFIL_CBT)
            console.log(idSiswa,jadwalProfilCbt,profileCbt)
            setagcuDetail(response.data.detail) , setTryoutDetail(response.data.detail) , setAsmDetail(response.data.detail) 
            setagcuNonAcademic(response.data.NON_AKADEMIS) , setasmNonAcademic(response.data.NON_AKADEMIS)
        })
        .catch(error => console.log(error))
    }

    function subjectExamsStatus(itemData,itemIndex){
        let buttonTitle = ""
        if (selectedIndex === 0 || selectedIndex === 1){
            if (itemData.STATUS_PENGERJAAN === "0" && itemData.ID_SUB_HEADER_HASIL_CBT === ""){
                buttonTitle = "Start"
            }else if (itemData.STATUS_PENGERJAAN === "0" && itemData.ID_SUB_HEADER_HASIL_CBT != ""){
                buttonTitle = "Continue"
            }else if(itemData.STATUS_PENGERJAAN === "1" &&  itemData.ID_SUB_HEADER_HASIL_CBT != ""){
                buttonTitle = "Report"
            }else if(selectedIndex === 0 && agcuNonAcademic.length > 0) {
                if (itemData.STATUS_PENGERJAAN === "0"){
                    buttonTitle = "Start"
                }else if (itemData.STATUS_PENGERJAAN === "1" || itemData.STATUS_PENGERJAAN === "2"){
                    buttonTitle = "Continue"
                }else if(itemData.STATUS_PENGERJAAN === "3"){
                    buttonTitle = "Report"
                }
            }
        }else if(selectedIndex === 2){
            if (itemData.STATUS_PENGERJAAN === "0" && itemData.ID_SUB_HEADER_HASIL_CBT === ""){
                buttonTitle = "Start"
            }else if (itemData.STATUS_PENGERJAAN === "0" && itemData.ID_SUB_HEADER_HASIL_CBT != ""){
                buttonTitle = "Continue"
            }else if(parseInt(itemData.STATUS_PENGERJAAN) === "1" &&  itemData.ID_SUB_HEADER_HASIL_CBT != ""){
                buttonTitle = "Report"
            }else if(selectedIndex === 2 && asmNonAcademic.length > 0) {
                if (itemData.STATUS_PENGERJAAN === "0"){
                    buttonTitle = "Start"
                }else if (itemData.STATUS_PENGERJAAN === "1" || itemData.STATUS_PENGERJAAN === "2"){
                    buttonTitle = "Continue"
                }else if(itemData.STATUS_PENGERJAAN === "3"){
                    buttonTitle = "Report"
                }
            } 
        }
        return buttonTitle;
    }
}

export default ProgramDetails;