import React, {useEffect} from 'react'
import {Text, View, FlatList, Dimensions,Image,SafeAreaView, TouchableOpacity} from 'react-native'
import {Calendar} from 'react-native-calendars'
import Images from '../../utilities/constants/Images'
import Colors from '../../utilities/constants/Colors'
import FontSize from '../../utilities/constants/FontSize'
import Header from '../../components/Header'

const DATA = [
    {
        title: 'Programs',
        image:Images.programsIcon,
        color:Colors.themeLightRedColor,
        themeColor:Colors.subPrimaryColor
    },
    {
        title: 'Exams',
        image:Images.examsIcon,
        color:Colors.aquaColor,
        themeColor:Colors.themeBlueColor
    },
    {
        title: 'Homework',
        image:Images.homeworksIcon,
        color:Colors.secondaryColor,
        themeColor:Colors.themeDarkGreenColor
    },
    {
        title: 'My Created Exams',
        image:Images.createdExamsIcon,
        color:Colors.themeYellowColor,
        themeColor:Colors.themeOrangeColor
    },
   
];

const Dashboard = ({navigation}) => {

    var today = new Date()
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
           <Header title="Dashboard"/>
            <FlatList horizontal={false}
             numColumns={2}
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={DATA} style={{marginTop:50}}
            renderItem={({ item , index }) => {
                return (
                    <TouchableOpacity onPress={() => {
                        console.log(index)
                        index === 0 ? navigation.push('Dashboard', {
                            screen: "Programs"
                        }) : ""
                    }}>

                    <View style={{backgroundColor:item.themeColor,height:120, width: Math.round(Dimensions.get('window').width) / 2 - 20,
                    marginTop: 20,
        marginBottom: 20, marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.15,}}>

            <View style={{width:50,height:50,borderRadius:25,backgroundColor:item.color,margin:10,justifyContent:'center'}}>
                <Image source={item.image} style={{alignSelf:'center',justifyContent:'center'}} />
            </View>
            <Text style={{marginLeft:10,color:Colors.white,fontWeight:'bold'}}>{item.title}</Text>
                    </View>
                    </TouchableOpacity>
                )
            }}
           />
            {/* <Calendar style={{marginTop:20}}
           theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: 'green',
            todayTextColor: 'red',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#4B5869',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#4B5869',
            indicatorColor: 'blue',
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayfontSize: FontSize.Font16,
            textMonthfontSize: FontSize.Font16,
            textDayHeaderfontSize: FontSize.Font16,
            'stylesheet.calendar.basic': {
                week: {
                  marginTop: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                },
                
              }
          }}
            current={today}
            minDate={today}
            onDayPress={(day) => {console.log('selected day', day)
            

        }}
            // firstDay={1}
            enableSwipeMonths={true}

            markedDates={{
                today: {selected: true, marked: true, selectedColor: 'blue'},
                '2021-05-17': {marked: true},
                '2021-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2021-05-19': {disabled: true, disableTouchEvent: true}
              }}
  // Collection of dates that have to be marked. Default = {}
  
/> */}

        </View>
        </SafeAreaView>
    )

}

export default Dashboard;