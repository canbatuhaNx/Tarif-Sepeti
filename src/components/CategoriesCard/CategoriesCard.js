import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({data, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: data.strCategoryThumb}}/>       
                <View style={styles.body_container}>    
                    <Text style={styles.title}>{data.strCategory}</Text>
                </View>          
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;