import React, {useEffect, useState} from 'react'
import {Text, View,FlatList,SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import axiosInstance from '../../api/APIConfig'
import * as axios from 'react-native-axios';
import Header from '../../components/Header'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Colors from '../../utilities/constants/Colors'
import FontSize from '../../utilities/constants/FontSize'
import ErrorMessages from '../../utilities/constants/ErrorMessages'
import RegEx from '../../utilities/constants/RegEx'
import Constants from '../../utilities/constants/Constants';
import Modal from "react-native-modal";

const Profile = () => {

    const [secureEntry,setSecureEntry] = useState(true)
    const [profileData, setProfileData] = useState({});
    const [isEditable, setIsEditable] = useState(false);
    const [genderPickerShown, setGenderPickerShown] = useState(false);

    //UPDATE PROFILE FIELDS
    const [studentId, setStudentId] = useState("");
    const [studentIdError,setStudentIdError] = useState("")
    const [studentIdColor,setStudentIdColor] = useState(Colors.themeLightGreyColor)

    const [gender, setGender] = useState("");

    const [studentName, setStudentName] = useState("");

    const [username, setUsername] = useState("")
    const [usernameError,setUsernameError] = useState("")
    const [usernameColor,setUsernameColor] = useState(Colors.themeLightGreyColor)

    const [schoolName, setSchoolName] = useState("")
    const [schoolNameError,setSchoolNameError] = useState("")
    const [schoolNameColor,setSchoolNameColor] = useState(Colors.themeLightGreyColor)

    const [className, setClassName] = useState("")
    const [classNameError,setClassNameError] = useState("")
    const [classNameColor,setClassNameColor] = useState(Colors.themeLightGreyColor)

    const [email, setEmail] = useState("");
    const [emailError,setEmailError] = useState("")
    const [emailColor,setEmailColor] = useState(Colors.themeLightGreyColor)

    const [phoneNum, setPhoneNum] = useState("");
    const [phoneNumError,setPhoneNumError] = useState("")
    const [phoneNumColor,setPhoneNumColor] = useState(Colors.themeLightGreyColor)

    const [address, setAddress] = useState("");
    const [addressError,setAddressError] = useState("")
    const [addressColor,setAddressColor] = useState(Colors.themeLightGreyColor)

    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");

    const [parentName, setParentName] = useState("");
    const [parentNameError,setParentNameError] = useState("")
    const [parentNameColor,setParentNameColor] = useState(Colors.themeLightGreyColor)

    const [parentPhoneNum, setParentPhoneNum] = useState("");
    const [parentPhoneNumError,setParentPhoneNumError] = useState("")
    const [parentPhoneNumColor,setParentPhoneNumColor] = useState(Colors.themeLightGreyColor)

    const [job, setJob] = useState("");
    const [jobError,setJobError] = useState("")
    const [jobColor,setJobColor] = useState(Colors.themeLightGreyColor)

    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError,setNewPasswordError] = useState("")
    const [newPasswordColor,setNewPasswordColor] = useState(Colors.themeLightGreyColor)

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError,setConfirmPasswordError] = useState("")
    const [confirmPasswordColor,setConfirmPasswordColor] = useState(Colors.themeLightGreyColor)

    const [err, setErr] = useState("")


    //VOUCHER FIELDS
    const [voucher, setVoucher] = useState("")
    const [voucherError,setVoucherError] = useState("")
    const [voucherColor,setVoucherColor] = useState(Colors.themeLightGreyColor)

    const [voucherData, setVoucherData] = useState({})

    useEffect(() => {
       ProfileData();
    }, [])

    function ProfileData(){
        const tokenStr = Constants.token;

        axiosInstance.get('/detailprofil', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`,
            }
        })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response.data);
                setProfileData(response.data)
            } else {
            console.log(' does not exists');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const updateProfile = () => {
        const tokenStr = Constants.token;

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`,
            }
        };

        var data = {
            NIS: studentId,
            JENIS_KELAMIN: gender === "Female" ? 0 : 1,
            NAMA_SISWA: profileData.NAMA_SISWA,
            USERNAME_SISWA: username,
            NAMA_SEKOLAH: schoolName,
            NAMA_KELAS: className,
            EMAIL_SISWA: email,
            TELPON_SISWA: phoneNum,
            ALAMAT_SISWA: address,
            FACEBOOK: facebook,
            TWITTER: twitter,
            INSTAGRAM: instagram,
            NAMA_ORANG_TUA: parentName,
            TELPON_ORANG_TUA: parentPhoneNum,
            PEKERJAAN_ORANG_TUA: job,
            password: newPassword,

            //PASSWORD FIELDS ARE PENDING
        }

        if(gender !== null && studentName !== null && username !== null && email !== null && phoneNum !== null && address !== null && parentName !== null && parentPhoneNum !== null){
            axiosInstance.post('/editprofil', data, config)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data)
                } else {
                console.log(' does not exists');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{

        }
        
    }

    const verify = () => {
        
        const tokenStr = Constants.token;

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`,
            }
        };

        var data = {
            idSiswa: profileData.ID_SISWA,
            kodeVoucher: voucher,
            sekolah: profileData.ID_SEKOLAH
        }

        axiosInstance.post('/verifyVoucher', data, config)
        .then(function (response) {
            if (response.status === 200) {
                setVoucherData(response.data)
            } else {
            console.log(' does not exists');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const displayGender = () => {
        return(
            <View style={{ height: 120,backgroundColor:'white',borderRadius:5,justifyContent:'space-between'}}>
                <View style={{backgroundColor:Colors.themeBlackColor,borderRadius:4,
                    borderBottomRightRadius:0,borderBottomLeftRadius:0,marginTop:0}}>
                    <Text style={{fontSize:18,fontWeight:'500',margin:10,textAlign:'center',color:'white'}}>{("Select Gender")}</Text>
                </View>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {setGender("Male"); setGenderPickerShown(false)}}><Text>Male</Text></TouchableOpacity>
                <View style={{height:1,backgroundColor:Colors.themeLightGreyColor}}></View>
                <TouchableOpacity style={{marginBottom:10,alignSelf:'center'}} onPress={() => {setGender("Female"); setGenderPickerShown(false)}}><Text>Female</Text></TouchableOpacity>
            </View>
        )
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{flex:1}}>
                <Header title="Profile"/>
                <Image style={{height:180}} source={{uri: "https://images.unsplash.com/photo-1542300058-849d3b08aa0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80"}} />
                <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center", marginHorizontal:16}}>
                    <View style={{marginTop: -64}}>
                        <Image style={{width:120, height:120}} source={{uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}} />
                    </View>
                    <TouchableOpacity style={{borderWidth:2, borderColor: Colors.themePinkColor, paddingVertical: 8, paddingHorizontal:18}}>
                        <Text style={{color: Colors.themePinkColor}}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:16, paddingTop:16}}>
                    <Text style={styles.info}>User Name : <Text style={styles.infoContent}> {profileData.USERNAME_SISWA} </Text> </Text>
                    <Text style={styles.info}>Student ID : <Text style={styles.infoContent}> {profileData.ID_SISWA} </Text> </Text>
                    <Text style={styles.info}>Email : <Text style={styles.infoContent}> {profileData.EMAIL_SISWA} </Text> </Text>
                    <Text style={styles.info}>Phone Number : <Text style={styles.infoContent}> {profileData.TELPON_SISWA} </Text> </Text>
                    <Text style={styles.info}>Class : <Text style={styles.infoContent}> {profileData.NAMA_KELAS} </Text> </Text>
                    <Text style={styles.info}>School : <Text style={styles.infoContent}> {profileData.NAMA_SEKOLAH} </Text> </Text>
                    <Text style={styles.info}>Gender : <Text style={styles.infoContent}> {profileData.JENIS_KELAMIN === 1 ? "Male" : "Female"} </Text> </Text>
                    <Text style={styles.info}>Address : <Text style={styles.infoContent}> {profileData.ALAMAT_SISWA} </Text> </Text>
                </View>
                <View style={Styles.programsStartView}>
                    <View style={Styles.programsStratLineView}></View>
                    <TouchableOpacity style={Styles.programsStartButtonView} onPress={() => setIsEditable(!isEditable)}>
                        <Text style={Styles.programsStartText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[Styles.mainView,{marginTop:24, marginBottom:24, display: isEditable ? "flex" : "none"}]}>
                <View style={Styles.CardView}>
                    <Text style={[Styles.loginText, styles.title]}>Student Info</Text>
                    <View  style={[Styles.loginTextInputView, {borderColor: studentIdColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Student ID"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.ID_SISWA}
                            onChangeText={(text) => {
                                setStudentId(text)
                                if(RegEx.alphaNumeric.test(text)){
                                    setStudentIdError("")
                                    text.length > 0 ? setStudentIdColor(Colors.secondaryColor) : setStudentIdColor(Colors.themeLightGreyColor)
                                }else{
                                    setStudentIdError(ErrorMessages.invalidStudentId)
                                    setStudentIdColor(Colors.primaryColor)
                                }
                            }}   
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.userNameIcon}/>
                    </View>
                    {studentIdError ? 
                        <Text style={{marginLeft:20}}>{studentIdError}</Text> 
                    :   <View />
                    }

                    <TouchableOpacity style={Styles.loginTextInputView} onPress={() => 
                        {
                            setGenderPickerShown(true)
                        }}>
                        {/* <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Select Gender"
                            editable={false}
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.JENIS_KELAMIN === 1 ? "Male" : "Female"}
                        /> */}
                        <Text style={{flex:1, textAlignVertical:"center"}}>{gender === "" ? "Select Gender*" : gender}</Text>
                        <Image style={Styles.loginTextInputImageView} source={Images.userNameIcon}/>
                    </TouchableOpacity>

                    <Modal
						isVisible={genderPickerShown}
						avoidKeyboard={true}
						onBackdropPress={() => {
							setGenderPickerShown(false)
						}}
					>
						{displayGender()}
                        
			        </Modal> 

                    <View style={Styles.loginTextInputView}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Student Name*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.fullNameIcon}/>
                    </View>
                    
                    <View style={[Styles.loginTextInputView, {borderColor: usernameColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            
                            autoCorrect={false}
                            placeholder="Username*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.USERNAME_SISWA}
                            editable={false}
                            defaultValue={profileData.USERNAME_SISWA}
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.userNameIcon}/>
                    </View>
                    
                    <View style={[Styles.loginTextInputView, {borderColor: schoolNameColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="School Name"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.NAMA_SEKOLAH}
                            onChangeText={(text) => {
                                setSchoolName(text)
                                if(RegEx.alphaNumericSpace.test(text)){
                                    setSchoolNameError("")
                                    text.length > 0 ? setSchoolNameColor(Colors.secondaryColor) : setSchoolNameColor(Colors.themeLightGreyColor)
                                }else{
                                    setSchoolNameError(ErrorMessages.invalidSchoolName)
                                    setSchoolNameColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
                    </View>
                    {schoolNameError ? 
                        <Text style={{marginLeft:20}}>{schoolNameError}</Text> 
                    :   <View />
                    }

                    <View style={[Styles.loginTextInputView, {borderColor: classNameColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Class Name"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.NAMA_KELAS}
                            onChangeText={(text) => {
                                setClassName(text)
                                if(RegEx.alphaNumericSpace.test(text)){
                                    setClassNameError("")
                                    text.length > 0 ? setClassNameColor(Colors.secondaryColor) : setClassNameColor(Colors.themeLightGreyColor)
                                }else{
                                    setClassNameError(ErrorMessages.invalidClassName)
                                    setClassNameColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
                    </View>
                    {classNameError ? 
                        <Text style={{marginLeft:20}}>{classNameError}</Text> 
                    :   <View />
                    }
                </View>

                <View style={[Styles.CardView, {marginTop:0}]}>
                    <Text style={[Styles.loginText, styles.title]}>Contact</Text>
                    <View style={[Styles.loginTextInputView, {borderColor: emailColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Email*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.EMAIL_SISWA}
                            onChangeText={(text) => {
                                setEmail(text)
                                if(RegEx.email.test(text)){
                                    setEmailError("")
                                    text.length > 0 ? setEmailColor(Colors.secondaryColor) : setEmailColor(Colors.themeLightGreyColor)
                                }else{
                                    setEmailError(ErrorMessages.invalidEmail)
                                    setEmailColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.emailIcon}/>
                    </View>
                    {emailError ? 
                        <Text style={{marginLeft:20}}>{emailError}</Text> 
                    :   <View />
                    }

                    <View style={[Styles.loginTextInputView, {borderColor: phoneNumColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="Phone Number*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.TELPON_SISWA}
                            onChangeText={(text) => {
                                setPhoneNum(text)
                                if(text.length <= 8 && text.length >= 15){
                                    setPhoneNumError("")
                                    text.length > 0 ? setPhoneNumColor(Colors.secondaryColor) : setPhoneNumColor(Colors.themeLightGreyColor)
                                }else{
                                    setPhoneNumError(ErrorMessages.invalidMobile)
                                    setPhoneNumColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.phoneIcon}/>
                    </View>
                    {phoneNumError ? 
                        <Text style={{marginLeft:20}}>{phoneNumError}</Text> 
                    :   <View />
                    }

                    <View style={[Styles.loginTextInputView, {borderColor: addressColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Address*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            defaultValue={profileData.ALAMAT_SISWA}
                            onChangeText={(text) => {
                                setAddress(text)
                                if(RegEx.alphaNumericSpaceSpecialChar.test(text)){
                                    setAddressError("")
                                    text.length > 0 ? setAddressColor(Colors.secondaryColor) : setAddressColor(Colors.themeLightGreyColor)
                                }else{
                                    setAddressError(ErrorMessages.invalidAddress)
                                    setAddressColor(Colors.primaryColor)
                                }
                            }}
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
                    </View>
                    {addressError ? 
                        <Text style={{marginLeft:20}}>{addressError}</Text> 
                    :   <View />
                    }

                    <TouchableOpacity>
                        <Text style={[Styles.loginText, styles.subTitle]}>Social Media</Text>
                    </TouchableOpacity>

                    <View style={Styles.loginTextInputView}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Facebook"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            onChangeText={(text) => {
                                setFacebook(text)
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.fullNameIcon}/>
                    </View>

                    <View style={Styles.loginTextInputView}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Twitter"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            onChangeText={(text) => {
                                setTwitter(text)
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.fullNameIcon}/>
                    </View>

                    <View style={Styles.loginTextInputView}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Instagram"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            onChangeText={(text) => {
                                setInstagram(text)
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.fullNameIcon}/>
                    </View>

                </View>

                <View style={[Styles.CardView, {marginTop:0, minHeight:280}]}>
                    <Text style={[Styles.loginText, styles.title]}>Parent Info</Text>
                    <View style={[Styles.loginTextInputView, {borderColor: parentNameColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Name*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            onChangeText={(text) => {
                                setParentName(text)
                                if(RegEx.alphabetSpace.test(text)){
                                    setParentNameError("")
                                    text.length > 0 ? setParentNameColor(Colors.secondaryColor) : setParentNameColor(Colors.themeLightGreyColor)
                                }else{
                                    setParentNameError(ErrorMessages.invalidParentName)
                                    setParentNameColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.fullNameIcon}/>
                    </View>
                    {parentNameError ? 
                        <Text style={{marginLeft:20}}>{parentNameError}</Text> 
                    :   <View />
                    }

                    <View style={[Styles.loginTextInputView, {borderColor: parentPhoneNumColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="Phone Number*"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            onChangeText={(text) => {
                                setParentPhoneNum(text)
                                if(text.length >= 8 && text.length <= 15){
                                    setParentPhoneNumError("")
                                    text.length > 0 ? setParentPhoneNumColor(Colors.secondaryColor) : setParentPhoneNumColor(Colors.themeLightGreyColor)
                                }else{
                                    setParentPhoneNumError(ErrorMessages.invalidMobile)
                                    setParentPhoneNumColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.phoneIcon}/>
                    </View>
                    {parentPhoneNumError ? 
                        <Text style={{marginLeft:20}}>{parentPhoneNumError}</Text> 
                    :   <View />
                    }
                    
                    <View style={[Styles.loginTextInputView, {borderColor: jobColor}]}>
                        <TextInput
                            style={{flex: 1}}
                            autoCorrect={false}
                            placeholder="Job"
                            placeholderTextColor={Colors.themeLightGrayPurpleColor}
                            onChangeText={(text) => {
                                setJob(text)
                                if(RegEx.alphaNumericSpace.test(text)){
                                    setJobError("")
                                    text.length > 0 ? setJobColor(Colors.secondaryColor) : setJobColor(Colors.themeLightGreyColor)
                                }else{
                                    setJobError(ErrorMessages.invalidJob)
                                    setJobColor(Colors.primaryColor)
                                }
                            }} 
                        />
                        <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
                    </View>
                    {jobError ? 
                        <Text style={{marginLeft:20}}>{jobError}</Text> 
                    :   <View />
                    }

                </View>


                <View style={[Styles.CardView, {marginTop:0, minHeight:210}]}>
                    <Text style={[Styles.loginText, styles.title]}>Password</Text>
                    <View style={[Styles.loginTextInputView, {borderColor: newPasswordColor}]}>
                        <TextInput
                            style={{flex: 1}}
                                autoCorrect={false}
                                secureTextEntry={secureEntry}
                                placeholder="New Password"
                                placeholderTextColor={Colors.themeLightGrayPurpleColor}
                                onChangeText={(text) => {
                                    setNewPassword(text)
                                    if(RegEx.alphaNumeric.test(text) && text.length > 4){
                                        setNewPasswordError("")
                                        text.length > 0 ? setNewPasswordColor(Colors.secondaryColor) : setNewPasswordColor(Colors.themeLightGreyColor)
                                    }else{
                                        setNewPasswordError(ErrorMessages.password)
                                        setNewPasswordColor(Colors.primaryColor)
                                    }
                                }}
                            />
                        <Image style={Styles.loginTextInputImageView} source={Images.lockIcon}/>
                    </View>
                    {newPasswordError ? 
                        <Text style={{marginLeft:20}}>{newPasswordError}</Text> 
                    :   <View />
                    }

                    <View style={[Styles.loginTextInputView, {borderColor: confirmPasswordColor}]}>
                        <TextInput
                            style={{flex: 1}}
                                autoCorrect={false}
                                secureTextEntry={secureEntry}
                                placeholder="Confirm Password"
                                placeholderTextColor={Colors.themeLightGrayPurpleColor}
                                onChangeText={(text) => {
                                    setConfirmPassword(text);
                                    if(RegEx.alphaNumeric.test(text) && text.length > 4 && newPassword === text){
                                        setConfirmPasswordError("")
                                        text.length > 0 ? setConfirmPasswordColor(Colors.secondaryColor) : setConfirmPasswordColor(Colors.themeLightGreyColor)
                                    }else{
                                        setConfirmPasswordError(ErrorMessages.confirmPassword)
                                        setConfirmPasswordColor(Colors.primaryColor)
                                    }
                                }}
                            />
                        <Image style={Styles.loginTextInputImageView} source={Images.lockIcon}/>
                    </View>
                    {confirmPasswordError ? 
                        <Text style={{marginLeft:20}}>{confirmPasswordError}</Text> 
                    :   <View />
                    }

                </View>
                <Text style={{marginLeft:20, display: err ? "flex" : "none"}}>Fields marked * are mandatory.</Text> 
                <View style={[Styles.programsStartView, { marginTop: 0 }]}>
                    <View style={Styles.programsStratLineView}></View>
                    <TouchableOpacity style={Styles.programsStartButtonView} onPress={() => updateProfile()}>
                        <Text style={Styles.programsStartText}>Update</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.hrLine} />

            <Text style={[Styles.loginText, styles.title]}>Do you have voucher?</Text>
            <View style={[Styles.loginTextInputView, {borderColor: voucherColor}]}>
                <TextInput
                    style={{flex: 1}}
                    autoCorrect={false}
                    placeholder="Enter Voucher Number"
                    placeholderTextColor={Colors.themeLightGrayPurpleColor}
                    onChangeText={(text) => {
                        setVoucher(text)
                        if(RegEx.alphaNumericSpace.test(text)){
                            setVoucherError("")
                            text.length > 0 ? setVoucherColor(Colors.secondaryColor) : setVoucherColor(Colors.themeLightGreyColor)
                        }else{
                            setVoucherError(ErrorMessages.invalidVoucher)
                            setVoucherColor(Colors.primaryColor)
                        }
                    }}     
                />
                <Image style={Styles.loginTextInputImageView} source={Images.classIcon}/>
            </View>
            {voucherError ? 
                <Text style={{marginLeft:20}}>{voucherError}</Text> 
            :   <View />
            }

            <View style={[Styles.programsStartView, { marginTop: 10 }]}>
                <View style={Styles.programsStratLineView}></View>
                <TouchableOpacity style={Styles.programsStartButtonView} onPress={() => verify()}>
                    <Text style={Styles.programsStartText}>Verify</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setVoucherData("")} style={{flexDirection: "row", justifyContent:"center", alignItems:"center", paddingVertical:16, backgroundColor: !voucherData.status ? Colors.themePinkColor : Colors.secondaryColor, marginHorizontal:16, marginVertical:16, borderRadius:6, display: voucherData.message !== undefined ? "flex" : "none"}}>
                <Image style={{width:12, height:12, marginRight:24}} source={voucherData.status === false ? Images.closeIcon : Images.checkIcon } />
                <Text style={{color: Colors.white}}>{voucherData.message}</Text>
            </TouchableOpacity >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
    },
    info: {
        fontSize: FontSize.Font16,
        lineHeight: 24,
        color: Colors.themeLightPurpleColor,
    },
    infoContent: {
        color: Colors.themeDarkGrayBlueColor,
        fontWeight: "bold"
    },
    title: {
        fontSize: FontSize.Font18, 
        alignSelf: "flex-start",
        paddingLeft: 16,
    },
    subTitle: {
        fontSize: FontSize.Font16, 
        alignSelf: "flex-start",
        paddingLeft: 16,
        color: Colors.themeGrayColor
    },
    hrLine: {
        borderTopWidth: 2,
        borderTopColor: Colors.themeLightGrayColor,
        marginTop:16
    }
})

export default Profile;