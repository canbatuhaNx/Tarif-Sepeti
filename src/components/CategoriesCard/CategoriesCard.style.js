import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        flex:1,
        borderRadius: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 5,
        padding: 1,

    },
    image: {
        resizeMode: 'contain',
        width: 100,
        minHeight: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        
    },
    body_container: {
        flex: 1,
        padding: 10,
        marginTop: 30,
        marginLeft: 10

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black'
    }

})