import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({data, onLink}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: data.strMealThumb}} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.strMeal}</Text>
                    <Text style={styles.area}>{data.strArea}</Text>
                    <Text style={styles.desc}>{data.strInstructions}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onLink}>
                    <Text style={styles.text_button}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
        
    )
};


export default DetailCard;