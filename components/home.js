import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, IconButton, TextInput, Tooltip } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { database } from "../firebase/Config";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, } from "firebase/firestore";


export default function Home(props) {

    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')
    const [id, setID] = useState('')

    const [show, setShow] = useState(false)

    const [shoppingList, setShoppingList] = useState([])

    const shopingCollection = collection(database, "List");

    useEffect(() => {
        getShopingItems()
    }, [])

    const mapDispatch = (dispatch) => {
        return {
            addItem: (itemData) => dispatch(addItemAction(itemData)),
            deletItem: (id) => dispatch(deleteItemAction(id)),
            updateItem: (id, updatedItem) => dispatch(updateItemAction(id, updatedItem)),
        }
    };

    const addItem = async () => {
        // console.log(quantity);

        try {
            await addDoc(shopingCollection, {
                // Make sure "item" is a valid value, not a SyntheticEvent object
                Item: item,
                Quantity: quantity,
                // Category: itemCategory,
                // Price: itemPrice,
            });

            // Dispatch Redux action to add the item to the shopping list
            props.addItem({
                Item: item,
                Quantity: quantity,
                // Category: itemCategory,
                // Price: itemPrice,
            });

            setItem("");
            setQuantity("");
            // setItemCategory("");
            // setItemPrice(0);

            Alert.alert("Item has been added");
        } catch (error) {
            console.error("Error adding items to Firebase", error);
            Alert.alert("Item was not added");
        }
    };

    const deletItem = async (id) => {
        const shopItem = doc(database, "List", id);
        await deleteDoc(shopItem);
        Alert.alert("This item was deleted")

        //dispatch
        props.deletItem(id);
        // deletItem(id);
    };


    const editItem = async (id, item, quantity) => {
        setItem(item)
        setQuantity(quantity)
        setID(id)
        setShow(true)

        const shopItem = doc(database, "List", id);
        await updateDoc(shopItem, { Item: updatedItem });

        //dispatch
        props.updateItem(id, updatedItem);
        // updateItem(id, updatedItem);
    };

    const updateItem = async () => {
        // setItem(item)
        // setQuantity(quantity)
        // setID(id)

        const shopItem = doc(database, "List", id);
        // await updateDoc(shopItem, { Item: updatedItem });
        await updateDoc(shopItem, { Item: item, Quantity: quantity });
        Alert.alert("Item was updated")
        setShow(false)

        //dispatch
        props.updateItem(id, updatedItem);
        // updateItem(id, updatedItem);
    };

    const getShopingItems = async () => {

        //get data from database 
        try {
            const data = await getDocs(shopingCollection);

            const filtereddata = data.docs.map((doc) => ({

                //this fucntion  returns the values in the collection
                ...doc.data(),
                id: doc.id,

            }));

            setShoppingList(filtereddata);
            // setShoppingList(data);

            console.log(filtereddata);
        } catch (error) {
            console.error("Error fetching collection", error);
        }
    };


    function addedCard() {

        return shoppingList.map((item) => {

            return (

                <Card height={100} contentStyle={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }} style={{ padding: 20, marginBottom: 7, borderWidth: 1, borderColor: '#98D2F5', backgroundColor: "#f5bc98" }}>

                    <View style={{ flex: 1, width: "40%" }} justifyContent='flex-start' padding={5} >

                        <Text style={{ fontSize: 15, paddingBottom: 10, fontWeight: "500" }}> Item : {item.Item} </Text>
                        <Text style={{ fontSize: 12, paddingBottom: 10 }}> Quantity : {item.Quantity} </Text>

                    </View>

                    <View marginLeft={0} width={'0%'} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10 }} >

                        <Tooltip title="Edit">
                            <TouchableOpacity marginLeft={20} onPress={() => editItem(item.id, item.Item, item.Quantity)}>
                                {/* */}
                                <Feather name="edit" size={24} color="white" />

                            </TouchableOpacity>
                        </Tooltip>


                        <Tooltip title="Delete" >
                            <TouchableOpacity marginLeft={20} onPress={() => deletItem(item.id)}>

                                <AntDesign name="delete" size={24} color="white" />

                            </TouchableOpacity>
                        </Tooltip>


                    </View>

                </Card>

            )
        })

    }

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
                    value={item} onChangeText={(value) => setItem(value)} />

                <TextInput label="Quantity" mode="outlined" outlineColor='#f5bc98'
                    activeOutlineColor='#f5bc98' value={quantity}
                    onChangeText={(value) => setQuantity(value)} />

                <Text></Text>

                {!show ?

                    <Button mode="contained-tonal" buttonColor='#f5bc98' textColor='white'
                        onPress={() => addItem()}>
                        Add Item
                    </Button>
                    :
                    <Button mode="contained-tonal" buttonColor='#f5bc98' textColor='white'
                        onPress={() => updateItem()}>
                        Update Item
                    </Button>
                }

                <Text></Text>
                <Text></Text>
                <ScrollView style={styles.innerContainer}>
                    <View >
                        {/* <Text>Your items</Text> */}

                        {addedCard()}

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
        // height: '100%',
        height: 650,
        paddingBottom: 10,
        padding: 10,


    },

    innerContainer: {
        height: 0,
        width: "100%",
        padding: 6,
        flex: 0,
        borderRadius: 20,
        // backgroundColor: 'blue',
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
