import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, IconButton, TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home() {

    const [item, setItem] = useState('')
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
                    value={item} onChange={(text) => setItem(text)} />

                <TextInput label="Quantity" mode="outlined" outlineColor='#f5bc98' text
                    activeOutlineColor='#f5bc98' value={quantity}
                    onChange={(value) => setQuantity(value)} />

                <Text></Text>

                <Button mode="contained-tonal" buttonColor='#f5bc98' textColor='black'
                    onPress={() => console.log('Added')}>
                    Add Item
                </Button>

                <Text></Text>
                 <Text></Text>
             <ScrollView style={styles.innerContainer}>   
                <View >
                    {/* <Text>Your items</Text> */}
                    

                    <Card height={100}  contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, borderWidth: 0, borderColor: 'gray' , backgroundColor:"#f5bc98"}}> 

                        <View style={{ flex: 1, width: "40%" }} justifyContent='flex-start' padding={5} >

                            <Text style={{ fontSize: 14, paddingBottom: 10 }} > Item  </Text>
                            <Text style={{ fontSize: 12, paddingBottom: 10 }}> Quantity  </Text>
                            
                        </View>

                        <View marginLeft={0} width={'0%'} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                            <TouchableOpacity marginLeft={20}>
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="note-edit" size={24} color="black" />

                            </TouchableOpacity>

                            <TouchableOpacity marginLeft={20} >
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                            </TouchableOpacity>

                        </View>

                    </Card>
                    <Card height={100}  contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, borderWidth: 1, borderColor: 'gray' , backgroundColor:"#f5bc98"}}> 

                        <View style={{ flex: 1, width: "40%" }} justifyContent='flex-start' padding={5} >

                            <Text style={{ fontSize: 14, paddingBottom: 10 }} > Item  </Text>
                            <Text style={{ fontSize: 12, paddingBottom: 10 }}> Quantity  </Text>
                            
                        </View>

                        <View marginLeft={0} width={'0%'} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                            <TouchableOpacity marginLeft={20}>
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="note-edit" size={24} color="black" />

                            </TouchableOpacity>

                            <TouchableOpacity marginLeft={20} >
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                            </TouchableOpacity>

                        </View>

                    </Card>
                    <Card height={100}  contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, borderWidth: 0, borderColor: 'gray' , backgroundColor:"#f5bc98"}}> 

                        <View style={{ flex: 1, width: "40%" }} justifyContent='flex-start' padding={5} >

                            <Text style={{ fontSize: 14, paddingBottom: 10 }} > Item  </Text>
                            <Text style={{ fontSize: 12, paddingBottom: 10 }}> Quantity  </Text>
                            
                        </View>

                        <View marginLeft={0} width={'0%'} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                            <TouchableOpacity marginLeft={20}>
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="note-edit" size={24} color="black" />

                            </TouchableOpacity>

                            <TouchableOpacity marginLeft={20} >
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                            </TouchableOpacity>

                        </View>

                    </Card>
                    <Card height={100}  contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, borderWidth: 1, borderColor: 'gray' , backgroundColor:"#f5bc98"}}> 

                        <View style={{ flex: 1, width: "40%" }} justifyContent='flex-start' padding={5} >

                            <Text style={{ fontSize: 14, paddingBottom: 10 }} > Item  </Text>
                            <Text style={{ fontSize: 12, paddingBottom: 10 }}> Quantity  </Text>
                            
                        </View>

                        <View marginLeft={0} width={'0%'} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                            <TouchableOpacity marginLeft={20}>
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="note-edit" size={24} color="black" />

                            </TouchableOpacity>

                            <TouchableOpacity marginLeft={20} >
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                            </TouchableOpacity>

                        </View>

                    </Card>
                    <Card height={100}  contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 5, borderWidth: 0, borderColor: 'gray' , backgroundColor:"#f5bc98"}}> 

                        <View style={{ flex: 1, width: "40%" }} justifyContent='flex-start' padding={5} >

                            <Text style={{ fontSize: 14, paddingBottom: 10 }} > Item  </Text>
                            <Text style={{ fontSize: 12, paddingBottom: 10 }}> Quantity  </Text>
                            
                        </View>

                        <View marginLeft={0} width={'0%'} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                            <TouchableOpacity marginLeft={20}>
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="note-edit" size={24} color="black" />

                            </TouchableOpacity>

                            <TouchableOpacity marginLeft={20} >
                                {/* onPress={() => removeFromCart(item.id)} */}
                                <MaterialCommunityIcons name="delete-empty" size={24} color="black" />

                            </TouchableOpacity>

                        </View>

                    </Card>

               
            </View> 
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
        height: '100%',
        // height:200
        paddingBottom: 10,
        padding: 10,


    },

    innerContainer: {
        height: 500,
        width: "100%",
        padding: 7,
        flex: 0,
        borderRadius: 20,
        backgroundColor: 'blue',
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
