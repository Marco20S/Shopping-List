import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, IconButton, TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';


export default function Home() {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')



    return (
        <View style={styles.container}>
            <View style={styles.TopContainer}>
                <View style={{ width: '100%', paddingLeft: 5, paddingTop: 50, alignItems: "center", justifyContent: 'center' }}>


                    <Text style={styles.appName} ><Entypo name="shopping-basket" size={24} color="#f5bc98" />  Shopping List App</Text>
                </View>

            </View>

            <View style={styles.BottomContainer}>

                <TextInput label="Item Name" mode="outlined"
                    activeOutlineColor='#f5bc98' outlineColor='#f5bc98'
                    value={name} onChange={(text) => setName(text)} />

                <TextInput label="Quantity" mode="outlined" outlineColor='#f5bc98' text
                    activeOutlineColor='#f5bc98' value={quantity}
                    onChange={(value) => setQuantity(value)} />

                <Text></Text>

                <Button mode="contained-tonal" buttonColor='#f5bc98' textColor='black'
                    onPress={() => console.log('Added')}>
                    Add Item
                </Button>

                <Text></Text>
                <ScrollView style={{ borderColor: 'black', borderWidth: 1 }}>
                    <Card.Title
                        title="Card Title"
                        subtitle="Card Subtitle"
                        left={(props) => <Avatar.Icon {...props} icon="folder" />}
                        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingvertical: 80,
        // backgroundColor: '#F2F2F2F2',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    TopContainer: {
        flex: 0,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    appName: {
        // fontFamily: ' berskshire',
        fontSize: 20,
        color: '#f5bc98',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    BottomContainer: {
        flex: 0,
        // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        // height:200
        paddingBottom: 10,
        padding: 10,


    },

    innerContainer: {
        height: 350,
        width: 320,
        padding: 30,
        // flex: 1,
        borderRadius: 20,
        // backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    inputContainer: {
        // height:90,
        flex: 1,
        top: 20,
        // backgroundColor: "blue"
    },

    TextInput: {
        height: 45,
        width: 300,
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
        borderColor: '#c4c4c4',


    },

    actionContainer: {
        height: 220,
        top: 10,
        // // backgroundColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },


    actionButton: {
        // flex: 1,
        backgroundColor: '#ACA567',
        borderRadius: 5,
        height: 45,
        width: 300,
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'
    },


    actionLogoutButton: {
        // flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 5,
        height: 45,
        width: 300,
        paddingvertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        borderWidth: 0.2
        // TextColor:'white'
    },

    actionSignButton: {
        flexDirection: 'row',
        // backgroundColor: '#e55d85',
        marginVertical: 10,
        borderRadius: 20,
        height: 45,
        width: 300,
        // paddingvertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        // TextColor:'white'

    },

    signUp: {
        // flex: 1,
        // // backgroundColor: 'blue',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 19,
        color: '#e55d85',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    signUpAlready: {
        // flex: 1,
        // // backgroundColor: 'blue',
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 19,
        color: 'black',
        fontSize: 15
    },
    signIn: {
        color: 'white',


    },
    logout: {
        color: 'red',


    }

});
