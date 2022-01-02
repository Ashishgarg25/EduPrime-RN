import React, { Component, useCallback, useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import axiosInstance from '../../api/APIConfig'
import { Header, SearchView, PackageCard } from '../../components'
import styles from "./styles"
import axios from 'react-native-axios'
import Loader from '../../components/Loader'

const Packages = ({ navigation }) => {

    const [loading,setLoading] = useState(false)
    const [programsList,setProgramsList] = useState([])
    const cardListView = useCallback(() => {
        return (
            <FlatList
                style={{}}
                data={programsList}
                renderItem={(item, index) => {
                    return <PackageCard packageIndex={index} item={item} navigation={navigation} />

                }}
            />)
    })
    useEffect(() => {
        packageListAPI()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Packages" />
            <SearchView
                leftIcon={"FilterIcon"}
                title={"Filter"}
                rightIcon={"RightArrow"} />
            <SearchView
                title={"Search for Tryout/CBT package"}
                leftIcon={"SearchArrow"} />
            {cardListView()}
            <Loader loading={loading} />
        </SafeAreaView>
    )

    //Packages List Card
    function packageListAPI() {
        setLoading(true)
        axios({
            method: "get",
            url: "https://psep-be-account.eduprime.co.id/migrasi/admin/paketaktif",
          })
            .then(function (response) {
                console.log("level successfull", response.data.data.listPaket)
                setLoading(false)
                setProgramsList(response.data.data.listPaket)
            })
            .catch(function (error) {
              console.log(error);
            });
    }
 
    packageList = ({ item, index }) => {

    }
}


export default Packages