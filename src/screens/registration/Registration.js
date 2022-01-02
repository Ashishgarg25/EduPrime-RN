import React,{useState,useEffect} from 'react'
import {Text, View,TouchableOpacity, TextInput, Image,ScrollView, FlatList,StyleSheet,SafeAreaView} from 'react-native'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Constants from '../../utilities/constants/Constants'
import Colors from '../../utilities/constants/Colors'
import FontSize from '../../utilities/constants/FontSize'
import axiosInstance from '../../api/APIConfig'
import Modal from "react-native-modal";
import axios from 'react-native-axios';
import RegEx from '../../utilities/constants/RegEx'
import Loader from '../../components/Loader'
import ErrorMessages from '../../utilities/constants/ErrorMessages'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../utilities/assets/svg';
import {packageActionButton,} from '../../utilities/constants/Styles'


const IKON = (props) => <SvgIcon {...props} svgs={svgs} />


const Registration = ({navigation,route}) => {

  const [programsList,setProgramsList] = useState("")
    const [email,setEmail] = useState("")
    const [emailErrorMessage,setEmailErrorMessage] = useState("")
    const [emailColor,setEmailColor] = useState(Colors.themeLightGreyColor)
    const [password,setPassword] = useState("")
    const [passwordErrorMessage,setPasswordErrorMessage] = useState("")
    const [passwordColor,setPasswordColor] = useState(Colors.themeLightGreyColor)
    const [confirmPassword,setConfirmPassword] = useState("")
    const [confirmPasswordErrorMesage,setConfirmPasswordErrorMessage] = useState("")
    const [confirmPasswordColor,setConfirmPasswordColor] = useState(Colors.themeLightGreyColor)
    const [secureEntry,setSecureEntry] = useState(true)
    const [fullName,setFullName] = useState("")
    const [fullNameError,setFullNameError] = useState("")
    const [fullNameColor,setFullNameColor] = useState(Colors.themeLightGreyColor)
    const [userName,setUserName] = useState("")
    const [userNameExist,setUserNameExist] = useState(false)
    const [userNameErrorMessage,setUserNameErrorMessage] = useState("")
    const [userNameErrorColor,setUserNameErrorColor] = useState(Colors.themeLightGreyColor)
    const [phoneNumber,setPhoneNumber] = useState("")
    const [phoneNumberExist,setphoneNumberExist] = useState(false)
    const [phoneErrorMessage,setPhoneErrorMessage] = useState("")
    const [phoneErrorColor,setPhoneErrorColor] = useState(Colors.themeLightGreyColor)
    const [level,setLevel] = useState("")
    const [classValue,setClassValue] = useState("")
    const [stateValue,setStateValue] = useState("")
    const [cityValue,setCityValue] = useState("")
    const [schoolValue,setSchoolValue] = useState("")
    const [levelPickershown,setLevelPickerShown] = useState(false)
    const [classPickershown,setclassPickerShown] = useState(false)
    const [statePickershown,setstatePickerShown] = useState(false)
    const [cityPickershown,setcityPickerShown] = useState(false)
    const [schoolPickershown,setschoolPickerShown] = useState(false)
    const [stateID,setStateID] = useState("")
    const [cityID,setCityID] = useState("")
    const [classID,setClassID] = useState("")
    const [levelID,setLevelID] = useState("")
    const [schoolID,setSchoolID] = useState("")
    const [loading,setLoading] = useState(false)

    var classId = ""
    var levelId = ""
    var stateId = ""
    var cityId = ""
    var schoolId = ""

    useEffect(()=>{
      selectedPackageAPI()
    },[])

    return(
      <SafeAreaView style={{flex:1}}>
      <KeyboardAwareScrollView
    scrollEnabled={true}
  >
      <View style={{flex:1}}>
      <ScrollView>

       <TouchableOpacity style={{flexDirection:'row',marginLeft:20}} onPress={()=>{
         navigation.pop()
       }}>
         {/* <View> */}
           <Image source={Images.backIcon}/>
         <Text style={{marginLeft:10,fontSize: FontSize.Font18,fontWeight:'500'}}>Back To Packages</Text>
         {/* </View> */}
        
       </TouchableOpacity>

      <Text style={{color:'black',marginTop:30,alignSelf:'center',fontSize: FontSize.Font20,fontWeight:'500'}}>{Constants.selectedPackages}</Text>

       <View style={[Styles.mainView,{marginTop:0}]}>
       <View style={Styles.CardView}>
       <View style={[Styles.shadowView,styles.container,{marginLeft:10,marginRight:10,borderRadius:10,padding:10}]}>
          <Text style={{fontWeight:'500',fontSize: FontSize.Font16}}>{programsList.NAMA_PROGRAM}</Text>
        <View style = {styles.itemView}>
           <IKON name={"rupeeIcon"} width={20} height={20} />
           <Text style={{color:Colors.primaryColor,fontWeight:'bold'}} >Rp. {programsList.HARGA}</Text>
        </View>
        <View style = {styles.itemView}>
           <IKON name={"CalendarIcon"} width={20} height={20} />
           <Text style={{color:Colors.secondaryColor}}>{route.params.startDate} - </Text>
           <Text style={{color:Colors.secondaryColor}}>{route.params.endDate}</Text>
        </View>
        <TouchableOpacity style = {[packageActionButton.buyNowStyle,{marginLeft:0,marginTop:10}]} onPress={()=>{
            navigation.pop()
        }} >
        <Text style = {{color:'white'}}>Change Package</Text>
        </TouchableOpacity>
        </View>
      <Text style={Styles.loginText}>{Constants.registration}</Text>

    <Text style={Styles.studentinfoText}>{Constants.studentinfo}</Text>
    <View style={[Styles.loginTextInputView,{borderColor:fullNameColor}]}>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      placeholder="Full Name"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={fullName}
      onFocus={(text)=>{
        RegEx.alphabetSpace.test(text)
      }}
      onChangeText={(text) => {
        setFullName(text)
        if(RegEx.alphabetSpace.test(text)){
          setFullNameError("")
         text.length > 0 ? setFullNameColor(Colors.secondaryColor) : setFullNameColor(Colors.themeLightGreyColor)

        }else{
          setFullNameError(ErrorMessages.invalidName)
          setFullNameColor(Colors.primaryColor)
        }
      }}
      // onBlur={(text) => {
      //   console.log(text.nativeEvent.text)
      //   // text.nativeEvent.text === "" ? setFullNameError("") : setFullNameError(ErrorMessages.invalidName)
      // }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.fullNameIcon}/>
    </View>

    {fullNameError? 
   <Text style={{marginLeft:20}}>{fullNameError}</Text> 
   :<View></View>
  }

    <View style={[Styles.loginTextInputView,{borderColor:userNameErrorColor}]}>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="User Name"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={userName}
      keyboardType="name-phone-pad"
      onChangeText={(text) => {
        setUserName(text.replace(/\s/g, ''))
        text.length === 0 && setUserNameErrorColor(Colors.themeLightGreyColor) 
        getUserNameAPI(text)
      }}
      onBlur={(text)=>{
        userName.length === 0 && setUserNameErrorColor(Colors.themeLightGreyColor) 
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.userNameIcon}/>
    </View>
    {userNameExist ? 
   <Text style={{marginLeft:20}}>{userNameErrorMessage}</Text> 
   :<View></View>
  }

<TouchableOpacity  onPress={()=>{
      setLevelPickerShown(true)
    }}>
    <View style={Styles.loginTextInputView}>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
      setLevelPickerShown(true)
        }}>
            <Image style={Styles.loginTextInputImageView} source={Images.dropdownIcon}/>
    </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="Level"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={level}
      editable={false}
      onChangeText={(text) => {
        setLevel(text)
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.levelIcon}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setclassPickerShown(true)
        }}>
    <View style={Styles.loginTextInputView}>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
      setclassPickerShown(true)
        }}>
            <Image style={Styles.loginTextInputImageView} source={Images.dropdownIcon}/>
    </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="Class"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={classValue}
      editable={false}
      onChangeText={(text) => {
        setClassValue(text)
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
    </View>
    </TouchableOpacity>

    <Text style={Styles.studentinfoText}>{Constants.contactInfo}</Text>
    <View style={[Styles.loginTextInputView,{borderColor:emailColor}]}>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="Email Address"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={email}
      onChangeText={(text) => {
        setEmail(text)
        if(RegEx.email.test(text)){
          setEmailErrorMessage("")
         text.length > 0 ? setEmailColor(Colors.secondaryColor) : setEmailColor(Colors.themeLightGreyColor)
        }else{
          setEmailErrorMessage(ErrorMessages.invalidEmail)
          // setEmailColor(Colors.primaryColor)
          text.length > 0 ? setEmailColor(Colors.primaryColor) : setEmailColor(Colors.themeLightGreyColor)
        }
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.emailIcon}/>
    </View>

    {emailErrorMessage && email.length > 0 ? 
   <Text style={{marginLeft:20}}>{emailErrorMessage}</Text> 
   :<View></View>
  }

    <View style={[Styles.loginTextInputView,{borderColor:phoneErrorColor}]}>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      keyboardType="number-pad"
      placeholder="Phone Number"
      maxLength={15}
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={phoneNumber}
      onChangeText={(text) => {
        setPhoneNumber(text)
         if(text.length >= 8 && text.length <= 15){
          getphoneNumberAPI(text)
         }
         else{
          setPhoneErrorMessage(ErrorMessages.invalidMobile)
          text.length > 0 ? setPhoneErrorColor(Colors.primaryColor) : setPhoneErrorColor(Colors.themeLightGreyColor)
         }
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.phoneIcon}/>
    </View>
    {phoneErrorMessage && phoneNumber.length > 0 ? 
   <Text style={{marginLeft:20}}>{phoneErrorMessage}</Text> 
   :<View></View>
  }

    <Modal
						isVisible={levelPickershown}
						avoidKeyboard={true}
						onBackdropPress={() => {
							setLevelPickerShown(false)
						}}
					>
						{levelDropdown()}
			</Modal>
      <Modal
						isVisible={classPickershown}
						avoidKeyboard={true}
						onBackdropPress={() => {
							setclassPickerShown(false)
						}}
					>
						{classDropdown()}
			</Modal>
      <Modal
						isVisible={statePickershown}
						avoidKeyboard={true}
						onBackdropPress={() => {
							setstatePickerShown(false)
						}}
					>
						{stateDropdown()}
			</Modal>
      <Modal
						isVisible={cityPickershown}
						avoidKeyboard={true}
						onBackdropPress={() => {
							setcityPickerShown(false)
						}}
					>
						{cityDropdown()}
			</Modal>
      <Modal
						isVisible={schoolPickershown}
						avoidKeyboard={true}
						onBackdropPress={() => {
							setschoolPickerShown(false)
						}}
					>
						{schoolDropdown()}
			</Modal>

    <TouchableOpacity onPress={() => {
      setstatePickerShown(true)
        }}>
    <View style={Styles.loginTextInputView}>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
      setstatePickerShown(true)
        }}>
            <Image style={Styles.loginTextInputImageView} source={Images.dropdownIcon}/>
    </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="State"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={stateValue}
      editable={false}
      onChangeText={(text) => {
        setStateValue(text)
      }}
    />  
    <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setcityPickerShown(true)
        }}>
    <View style={Styles.loginTextInputView}>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
      setcityPickerShown(true)
        }}>
            <Image style={Styles.loginTextInputImageView} source={Images.dropdownIcon}/>
    </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="City"
      editable={false}
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={cityValue}
      onChangeText={(text) => {
        setCityValue(text)
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      setschoolPickerShown(true)
        }}>
    <View style={Styles.loginTextInputView}>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
      setschoolPickerShown(true)
        }}>
            <Image style={Styles.loginTextInputImageView} source={Images.dropdownIcon}/>
    </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="School"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={schoolValue}
      editable={false}
      onChangeText={(text) => {
        setSchoolValue(text)
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
    </View>
    </TouchableOpacity>

    <Text style={Styles.studentinfoText}>{Constants.password}</Text>
    <View style={[Styles.loginTextInputView,{borderColor:passwordColor}]}>
        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
            setSecureEntry(!secureEntry)
        }}>
            <Image style={Styles.loginTextInputImageView} source={secureEntry? Images.eyeIcon : Images.eyeIcon}/>
        </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      secureTextEntry={secureEntry}
      placeholder="Password"
      blurOnSubmit={false}
      keyboardType="name-phone-pad"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={password}
      onChangeText={(text) => {
        setPassword(text.replace(/\s/g, ''))
        if(text.length < 4){
          setPasswordErrorMessage(ErrorMessages.password)
          text.length === 0 ? setPasswordColor(Colors.themeLightGreyColor) : setPasswordColor(Colors.primaryColor)
          // text.length > 4  ? setPasswordColor(Colors.secondaryColor) : text.length === 0 ? "" : ""
        }else{
          setPasswordErrorMessage("")
          setPasswordColor(Colors.secondaryColor)
        }
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.lockIcon}/>
    </View>

    {passwordErrorMessage && password.length > 0 ? 
   <Text style={{marginLeft:20}}>{passwordErrorMessage}</Text> 
   :<View></View>
  }

    <View style={[Styles.loginTextInputView,{borderColor:confirmPasswordColor}]}>
        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
            setSecureEntry(!secureEntry)
        }}>
            <Image style={Styles.loginTextInputImageView} source={secureEntry? Images.eyeIcon : Images.eyeIcon}/>
        </TouchableOpacity>
    <TextInput
    style={{flex: 1}}
      autoCorrect={false}
      secureTextEntry={secureEntry}
      placeholder="Confirm Password"
      placeholderTextColor={Colors.themeLightGrayPurpleColor}
      value={confirmPassword}
      blurOnSubmit={false}
      keyboardType="name-phone-pad"
      onChangeText={(text) => {
        setConfirmPassword(text.replace(/\s/g, ''))
        if(password === text){
          setConfirmPasswordErrorMessage("")
          setConfirmPasswordColor(Colors.secondaryColor)
        }else{
          setConfirmPasswordErrorMessage(ErrorMessages.confirmPassword)
         text.length > 0 ? setConfirmPasswordColor(Colors.primaryColor) : setConfirmPasswordColor(Colors.themeLightGreyColor)
        }
      }}
    />
    <Image style={Styles.loginTextInputImageView} source={Images.lockIcon}/>
    </View>

    {confirmPasswordErrorMesage && confirmPassword.length > 0 ? 
   <Text style={{marginLeft:20}}>{confirmPasswordErrorMesage}</Text> 
   :<View></View>
  }

    <TouchableOpacity  style={[Styles.loginButton,{opacity:0.5}]}
    // disabled= {fullName && userName && email && phoneNumber && stateValue && cityValue && password && confirmPassword === "" ? true : false}
    onPress={() => {
      // registrationAPICall()
      navigation.navigate('PackagePayment',{
        packageName:programsList.NAMA_PROGRAM,
        packagePrice:programsList.HARGA,
        packageStartDate:route.params.startDate,
        packageEndDate:route.params.endDate
      })
    }}>
        <Text style={Styles.loginButtonText}>{Constants.continue}</Text>
    </TouchableOpacity>

    <Loader loading={loading} />
    <View style={Styles.donthaveAccountView}>
       <Text style={Styles.donthaveAccountText}>{Constants.alredyHaveAnAccount}</Text>
       <TouchableOpacity 
         onPress={() => {
           navigation.pop()
         }}>
         <Text style={Styles.signupText}>{Constants.loginNow}</Text>
       </TouchableOpacity>
    </View>

</View>
</View>
</ScrollView>

</View>
</KeyboardAwareScrollView>
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


  function getUserNameAPI(username){
    axios({
      method: "get",
      url: `https://k8s-auth.eduprime.co.id/api/get_username/${username}`,
    })
      .then(function (response) {
          console.log("username successfull", response.data)
          setUserNameExist(response.data.status)
          if(response.data.status === false){
            console.log("snnsnsns")
            setUserNameErrorMessage("")
            setUserNameErrorColor(Colors.secondaryColor)
          }else{
            console.log("111111")
            setUserNameErrorMessage("Username already exist.")
            setUserNameErrorColor(Colors.primaryColor)
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getphoneNumberAPI(phoneNo){
     axios({
      method: "get",
      url: `https://k8s-auth.eduprime.co.id/api/get_no_telp/${phoneNo}`,
    }).then(response => {
      console.log("phone successfull", response.data)
      setphoneNumberExist(response.data.status)
      if(response.data.status === false){
        setPhoneErrorMessage("")
        setPhoneErrorColor(Colors.secondaryColor)
      }else{
        setPhoneErrorMessage("Phone number already exist.")
        setPhoneErrorColor(Colors.primaryColor)
      }
    }).catch(error => console.log(error))
  }
  function getClassAPI(){
    axios({
      method: "get",
      url: `https://k8s-auth.eduprime.co.id/api/get_kelas_by_jenjang/${levelId}`,
    })
      .then(function (response) {
          console.log("class successfull", response.data.list_kelas)
          Constants.classArray = response.data.list_kelas
         
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getCityAPI(){
    axios({
      method: "get",
      url: `https://k8s-auth.eduprime.co.id/api/kab_kota/${stateId}`,
    })
      .then(function (response) {
          console.log("city successfull", response.data.list_kab_kota)
          Constants.cityArray = response.data.list_kab_kota
         
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getSchoolAPI() {
    axios({
      method: "get",
      url: `https://k8s-auth.eduprime.co.id/api/sekolah/${cityId}`,
    })
      .then(function (response) {
          console.log("school successfull", response.data.list_sekolah)
          Constants.schoolArray = response.data.list_sekolah
         
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function registrationAPICall(){
    let postdata = {
      "nama":fullName.toString(),
      "username":userName.toString(),
      "email":email.toString(),
      "telp":phoneNumber.toString(),
      "kelas":classID,
      "provinsi":stateID,
      "kabupaten":cityID,
      // "jkel":"",
      "pw1":password.toString(),
      // "alamat":"",
      "sekolah":schoolID,
      // "kelas_paralel":""
    }
    console.log(postdata)
    axios({
      method: "post",
      url: "https://k8s-auth.eduprime.co.id/api/registrasi_siswa",
      data:postdata
    })
      .then(function (response) {
          console.log("registration successfull", response.data.status)
          
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function levelDropdown() {
    return(
			<View style={{ height: 300,backgroundColor:'white',justifyContent:'center',alignContent:'center',borderRadius:5}}>
				<View style={{backgroundColor:Colors.themeBlackColor,borderRadius:4,borderBottomRightRadius:0,borderBottomLeftRadius:0}}>
				<Text style={{fontSize: FontSize.Font18,fontWeight:'500',margin:10,textAlign:'center',color:'white'}}>{("Select Level")}</Text>
				</View>
				<FlatList
				 data={Constants.levelArray}
				renderItem={({ item , index }) => { return(
          <TouchableOpacity onPress={() =>{
            console.log("smmsms",item.KODE_JENJANG_SEKOLAH)
            setLevel(item.KODE_JENJANG_SEKOLAH)
            levelId = item.KODE_JENJANG_SEKOLAH
            setLevelPickerShown(false)
            getClassAPI()
          }}>
          <Text style={{fontSize: FontSize.Font14,margin:10,textAlign:'center',color:'black'}}>{item.KODE_JENJANG_SEKOLAH}</Text>
          <View style={{height:1,backgroundColor:Colors.themeLightGreyColor}}></View>
          </TouchableOpacity>
        )
        }}
				/>
		  </View>
		)
  }

  function classDropdown() {
    return(
			<View style={{ height: 300,backgroundColor:'white',justifyContent:'center',alignContent:'center',borderRadius:5}}>
				<View style={{backgroundColor:Colors.themeBlackColor,borderRadius:4,borderBottomRightRadius:0,borderBottomLeftRadius:0}}>
				<Text style={{fontSize: FontSize.Font18,fontWeight:'500',margin:10,textAlign:'center',color:'white'}}>{("Select Class")}</Text>
				</View>
				<FlatList
				 data={Constants.classArray}
				renderItem={({ item , index }) => { return(
          <TouchableOpacity onPress={() =>{
            console.log("smmsms",item.NAMA_KELAS)
            classId = item.ID_KELAS
            setClassValue(item.NAMA_KELAS)
            setclassPickerShown(false)
            setClassID(classId)
            // getClassAPI()
          }}>
          <Text style={{fontSize: FontSize.Font14,margin:10,textAlign:'center',color:'black'}}>{item.NAMA_KELAS}</Text>
          <View style={{height:1,backgroundColor:Colors.themeLightGreyColor}}></View>
          </TouchableOpacity>
        )
        }}
				/>
		  </View>
		)
  }

  function stateDropdown() {
    return(
			<View style={{ height: 300,backgroundColor:'white',justifyContent:'center',alignContent:'center',borderRadius:5}}>
				<View style={{backgroundColor:Colors.themeBlackColor,borderRadius:4,borderBottomRightRadius:0,borderBottomLeftRadius:0}}>
				<Text style={{fontSize: FontSize.Font18,fontWeight:'500',margin:10,textAlign:'center',color:'white'}}>{("Select State")}</Text>
				</View>
				<FlatList
				 data={Constants.stateArray}
				renderItem={({ item , index }) => { return(
          <TouchableOpacity onPress={() =>{ 
            console.log("smmsms",item.NAMA_PROVINSI,item.ID_PROVINSI)
            stateId = item.ID_PROVINSI
            setStateValue(item.NAMA_PROVINSI)
            setstatePickerShown(false)
            getCityAPI()
            setStateID(stateId)
          }}>
          <Text style={{fontSize: FontSize.Font14,margin:10,textAlign:'center',color:'black'}}>{item.NAMA_PROVINSI}</Text>
          <View style={{height:1,backgroundColor:Colors.themeLightGreyColor}}></View>
          </TouchableOpacity>
        )
        }}
				/>
		  </View>
		)
  }

  function cityDropdown() {
    return(
			<View style={{ height: 300,backgroundColor:'white',justifyContent:'center',alignContent:'center',borderRadius:5}}>
				<View style={{backgroundColor:Colors.themeBlackColor,borderRadius:4,borderBottomRightRadius:0,borderBottomLeftRadius:0}}>
				<Text style={{fontSize: FontSize.Font18,fontWeight:'500',margin:10,textAlign:'center',color:'white'}}>{("Select City")}</Text>
				</View>
				<FlatList
				 data={Constants.cityArray}
				renderItem={({ item , index }) => { return(
          <TouchableOpacity onPress={() =>{
            console.log("smmsms",item.NAMA_KABUPATEN_KOTA)
            cityId = item.ID_KABUPATEN_KOTA
            setCityValue(item.NAMA_KABUPATEN_KOTA)
            setcityPickerShown(false)
            getSchoolAPI()
            setCityID(cityId)
          }}>
          <Text style={{fontSize: FontSize.Font14,margin:10,textAlign:'center',color:'black'}}>{item.NAMA_KABUPATEN_KOTA}</Text>
          <View style={{height:1,backgroundColor:Colors.themeLightGreyColor}}></View>
          </TouchableOpacity>
        )
        }}
				/>
		  </View>
		)
  }

  function schoolDropdown() {
    return(
			<View style={{ height: 300,backgroundColor:'white',justifyContent:'center',alignContent:'center',borderRadius:5}}>
				<View style={{backgroundColor:Colors.themeBlackColor,borderRadius:4,borderBottomRightRadius:0,borderBottomLeftRadius:0}}>
				<Text style={{fontSize: FontSize.Font18,fontWeight:'500',margin:10,textAlign:'center',color:'white'}}>{("Select School")}</Text>
				</View>
				<FlatList
				 data={Constants.schoolArray}
				renderItem={({ item , index }) => { return(
          <TouchableOpacity onPress={() =>{
            console.log("smmsms",item.NAMA_SEKOLAH)
            schoolId = item.ID_SEKOLAH
            setSchoolValue(item.NAMA_SEKOLAH)
            setschoolPickerShown(false)
            setSchoolID(schoolId)
          }}>
          <Text style={{fontSize: FontSize.Font14,margin:10,textAlign:'center',color:'black'}}>{item.NAMA_SEKOLAH}</Text>
          <View style={{height:1,backgroundColor:Colors.themeLightGreyColor}}></View>
          </TouchableOpacity>
        )
        }}
				/>
		  </View>
		)
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

export default Registration