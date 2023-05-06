import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        
    },
    image: {
        width: deviceSize.width/1,
        height: deviceSize.height /2,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    body_container: {
        margin: 10,
        
    },
    title: {
        color: 'orange',
        fontSize: 25,
        fontWeight: 'bold'
    },
    area: {
        color: 'orange',
        fontSize: 17,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        paddingBottom:5,
        borderColor: 'black',
        fontStyle: "italic",
        
    },
    desc: {
        paddingVertical: 8,
        fontSize: 15,
        paddingBottom: 30,
        color: "black",
        fontStyle: "italic"
    },
    button: {
        paddingVertical: 10,
        alignItems: 'center',
        width: deviceSize.width / 1.5,
        backgroundColor: 'red',
        marginLeft: 10,
        borderRadius: 20,
        width: 370

        
    },
    text_button: {
        color: 'white',
        fontWeight: 'bold'
    }


});