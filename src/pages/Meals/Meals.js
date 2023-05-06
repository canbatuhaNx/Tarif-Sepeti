import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import styles from './Meals.style';
import useFetch from "../../hooks/useFetch/useFetch";
import { API_MEALS_URL } from '@env'

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import MealCard from "../../components/MealCard";


const Meals = ({route, navigation}) => {
    const { category } = route.params;
    const {loading, error, data} = useFetch(`${API_MEALS_URL}${category}`);
   

    if(loading){
        return <Loading />;
    }

    if(error){
        return <Error />;
    }
    const handleMealSelect = meal => {
        navigation.navigate('DetailPage', {meal})
    }

    const renderCategory=({item}) => <MealCard data={item} onSelect={() => handleMealSelect(item.idMeal)}/>

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderCategory}/>
        </SafeAreaView>
    )
    
}

export default Meals;