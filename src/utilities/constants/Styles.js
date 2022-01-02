import { color } from 'react-native-reanimated'
import Colors from '../constants/Colors'
import FontSize from '../constants/FontSize'

const Styles = {
    // **** Login **** //
    mainView:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center'
    },
    CardView:{
        backgroundColor:Colors.white,
        minHeight:350,
        shadowColor: Colors.themeLightGreyColor,
        shadowOpacity: 0.26,
        margin:30,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        borderRadius:10
    },
    loginText:{
        fontSize: FontSize.Font25,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:20,
        color:Colors.themeBlackColor,
        marginBottom:10,
        textAlign:'center'
    },
    studentinfoText:{
        fontSize: FontSize.Font18,
        fontWeight:'bold',
        marginTop:20,
        color:Colors.themeBlackColor,
        marginBottom:10,
        marginLeft:20
    },
    loginButton:{
        backgroundColor:Colors.primaryColor,
        alignSelf:'center',
        height:45, 
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10, 
        paddingLeft:25,
        paddingRight:25,
        borderRadius:5,
        marginTop:20
    },
    loginTextInputView:{
        flexDirection: 'row-reverse',
        borderWidth:1,
        borderColor:Colors.themeLightGreyColor,
        borderRadius:5,
        height:50,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        marginTop:10
    },
    loginTextInputImageView:{
        alignSelf:'center',
        marginRight:10
    },
    loginButtonText:{
        color:Colors.white,
        fontWeight:'500'
    },
    textInput:{
        height:50,borderWidth:1,borderColor:Colors.themeLightGreyColor,margin:20,borderRadius:5,paddingLeft:10},
    fortgotPasswordText:{
        alignSelf:'flex-end',marginRight:20,color:'#5F6489',fontWeight:'500'},
    donthaveAccountText:{
        color:'#4B5869',alignSelf:'center',fontSize: FontSize.Font14},
    donthaveAccountButton:{
        alignSelf:'center'},
    donthaveAccountView:{
        flexDirection:'row',marginTop:40,marginBottom:20,alignSelf:'center'},
     // **** Registration **** //
    signupText:{
        color:Colors.secondaryColor,fontSize: FontSize.Font16,marginLeft:5,fontWeight:'bold'},
     // **** OTP **** //
    textInputContainer: {
        marginBottom: 10,marginLeft:20,marginRight:20,marginTop:20},
    roundedTextInput: {
        borderRadius: 10,borderWidth: 0,borderBottomWidth:3,flex:1},
    resendCodeView:{
        flexDirection:'row',alignSelf:'center',marginTop:40},
    resendCodeText:{
        color:'#4B5869',fontWeight:'500',marginLeft:10},
     // **** Header **** //
    headerView:{
        flexDirection:'row',backgroundColor:'white',justifyContent:'space-between',marginTop:0, 
        shadowOffset: { width: 5, height: 5 },shadowOpacity: 0.15,borderRadius:10,shadowColor:'black'},
    headerTitle:{
        fontWeight:"500",fontSize: FontSize.Font18,alignSelf:"center",marginLeft:0},
    // **** Programs **** //
    progrmsCardView:{
        backgroundColor:Colors.white,minHeight:200,shadowColor: Colors.themeLightGreyColor,shadowOpacity: 0.26,
        margin:16,shadowOffset: { width: 0, height: 2},shadowRadius: 10,elevation: 3,borderRadius:10,borderWidth:1},
    programsCardContainer:{flex:1},
    programsNameText:{marginLeft:10,marginTop:10,fontSize: FontSize.Font16,fontWeight:'500',flexShrink:1},
    subjectNameText:{marginLeft:10,marginTop:20,fontSize: FontSize.Font14,fontWeight:'500',flexShrink:1,marginBottom:10},
    programsInnerView:{flexDirection:'row',justifyContent:'space-between'},
    programsCalendarView:{flexDirection:'row',marginLeft:10},
    programsStartDateText:{marginLeft:10,color:Colors.secondaryColor,flexShrink:1},
    programsEndDateText:{color:Colors.themeRedLabelColor,flexShrink:1},
    programsUserView:{flexDirection:'row',marginLeft:10,marginTop:10},
    programsUserText:{marginLeft:10,color:Colors.themeBlackColor},
    programsStartView:{flexDirection:'row',marginLeft:0,marginTop:40,justifyContent:'flex-end',marginBottom:10},
    programsStratLineView:{width:170,height:1,marginLeft:10,marginRight:10,alignSelf:'center'},
    programsStartButtonView:{backgroundColor:Colors.secondaryColor,borderRadius:5,height:40, marginRight:16},
    programsStartText:{color:Colors.white,width:100,textAlign:'center',padding:10},
    programsUpArrow:{height:40,borderRadius:5,width:40,},
    programsVideoView:{backgroundColor:Colors.lightPinkColor,height:150,borderBottomWidth:1,borderColor:Colors.lightGrayPinkColor,borderTopWidth:0,borderRadius:10},
    programsVideoImage:{backgroundColor:'orange',margin:16,height:120,borderRadius:5,justifyContent:'center'},
    programsVideoNameView:{backgroundColor:'black',opacity:0.65,height:50,zIndex:5,top:20,justifyContent:'center',borderBottomEndRadius:5,borderBottomStartRadius:5},
    programsVideoName:{color:'white',fontWeight:'500',textAlign:'center'},
    programsVideoText:{color:'white',fontWeight:'200',fontSize: FontSize.Font12,textAlign:'center'},
    // **** Programs Details **** //
    examsTypes:{fontWeight:"500",fontSize: FontSize.Font18,marginLeft:20,borderColor:Colors.subPrimaryColor,
    borderWidth:2,padding:10,borderRadius:5,overflow:'hidden'},
    programsDetilCardView:{backgroundColor:Colors.white,shadowColor: Colors.themeLightGreyColor,shadowOpacity: 0.7,
        marginLeft:10,marginRight:10,shadowOffset: { width: 5, height: 5},shadowRadius: 10,elevation: 3,borderRadius:10},
    programsDetailDateView:{borderRadius:5,borderWidth:1,borderColor:'#B7C3D6',width:90,height:100,marginTop:10,marginBottom:10,
    alignItems:'center',justifyContent:'space-between'},
    programDetailDateText:{fontSize: FontSize.Font25,marginTop:10,color:Colors.themeRedLabelColor},
    programDetailQuestionText:{fontSize: FontSize.Font12,marginLeft:10,marginTop:0,marginBottom:15},
    programDetailDurationText:{fontSize: FontSize.Font12,marginLeft:10,marginTop:0,marginBottom:10},
    programDetailsQuestionView:{flexDirection:'column',width:'45%'},
   
    shadowView: {
        backgroundColor: 'white',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.15,
        borderBottomEndRadius: 10,
        shadowColor: 'black',
    },
}

export const ColorsGradient = [
    Colors.themeLightBlueColor,
    Colors.white
]

export const packageActionButton  = {
    buttonView:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
        
    },
    downButtonStyle:{
        // flex:0.5,
        backgroundColor:Colors.primaryColor,
        height:36,
        width:36,
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:5  
    },
    xColor:{ 
        backgroundColor:Colors.lightGrayPinkColor,
        height:36,
        width:36,
        alignItems:'center',
        justifyContent:'center',   
        borderRadius:5
    },
    buttonBuyNowView:{
        flexDirection:'row',
    },
    buyNowStyle:{
        backgroundColor:Colors.secondaryColor,
        paddingHorizontal:20,
        height:36,
        alignItems:'center',
        justifyContent:'center', 
        marginLeft:20,
        borderRadius:5
    }
}


export default Styles