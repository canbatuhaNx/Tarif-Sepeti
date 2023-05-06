import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from './MealCard.style';

const MealCard = ({ data, onSelect }) => {
    return (    
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: data.strMealThumb }} />
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{data.strMeal}</Text>
                </View>  
            </View>
        </TouchableWithoutFeedback> 
 
    )
};
export default MealCard;