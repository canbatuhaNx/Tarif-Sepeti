import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import styles from "./Categories.style";
import CategoriesCard from "../../components/CategoriesCard"

import useFetch from "../../hooks/useFetch/useFetch";
import { API_CATEGORIES_URL } from '@env'

import Loading from "../../components/Loading";
import Error from "../../components/Error";



const Categories = ({navigation}) => {

    const {loading, data, error} =useFetch(API_CATEGORIES_URL);

    const renderCategories = ( {item} ) => <CategoriesCard data={item} onSelect={() => handleCategoriesSelect (item.strCategory)}/>;

    const handleCategoriesSelect = category => {
        navigation.navigate('MealsPage', {category});
    };
  
    if(loading){
        return <Loading />;
    }

    if(error){
        return <Error />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.categories} renderItem={renderCategories}/> 
        </SafeAreaView>
    )
};

export default Categories;