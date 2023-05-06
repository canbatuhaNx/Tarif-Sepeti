import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from './Detail.style';
import DetailCard from "../../components/DetailCard";

import useFetch from "../../hooks/useFetch";
import { API_DETAIL_URL } from '@env'

import Loading from "../../components/Loading";
import Error from "../../components/Error";


const Detail = ({ route }) => {
    const {meal} = route.params;
    const {loading, data, error} = useFetch(` ${API_DETAIL_URL}${meal} `);

    const handleLinking = (url) => {
        console.log(url)
        Linking.openURL(url);
    };

    if(loading){
        return <Loading/>;
    }

    if(error){
        return <Error/>;
    }

    const renderCategory = ({ item }) => <DetailCard data={item} onLink={() => handleLinking(item.strYoutube)}/>

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderCategory} />
        </SafeAreaView>       
    );
    
};

export default Detail;