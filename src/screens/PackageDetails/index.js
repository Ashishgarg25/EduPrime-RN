import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import axiosInstance from '../../api/APIConfig'
import { Header, SearchView, PackageCard } from '../../components'
import Styles from '../../utilities/constants/Styles'
import Images from '../../utilities/constants/Images'
import Colors from '../../utilities/constants/Colors'
import styles from "./styles"

const Packages = ({ navigation }) => {
    // const [programsList,setProgramsList] = useState([])
    const cardListView = useCallback(() => {
        return (
            <FlatList
                style={{}}
                data={[1,1,1,1]}
                renderItem={(item, index) => {
                    return <PackageCard  packageIndex = {index}/> 

                }}
            />)
    })


    useEffect(() => {

    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Packages" />
            {/* <SearchView
                leftIcon={"FilterIcon"}
                title={"Filter"}
                rightIcon={"RightArrow"} />
            <SearchView
                title={"Search for Tryout/CBT package"}
                leftIcon={"SearchArrow"} /> */}
            {cardListView()}
        </SafeAreaView>
    )

    //Packages List Card


    packageList = ({ item, index }) => {

    }
}


export default Packages