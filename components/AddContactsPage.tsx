import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux/es/exports";
import { ContactCreationInputAction, ContactCreationInputState, contactCreationReducer, Contacts } from "../reducers/contact-reducer";
import { Props } from "../types";



export type ContactForm = Contacts

export default function AddContactsPage({navigation}:Props["add"]){

    const [form, setForm] = useState<ContactForm>({fname:"",lname:"",phoneNumber:0,email:"", dateTimeAdded:0});

    const dispatch = useDispatch()<ContactCreationInputAction>

    function handleAddContact(){
        dispatch({type:"CREATE_CONTACT_FROM_FORM", payload: form})
        handleBackToHome();

    }

    function handleBackToHome(){
        navigation.navigate("Home")
    }



    return <View>
        <TextInput placeholder="First Name" onChangeText={(e)=>setForm({...form,fname:e})}/>
        <TextInput placeholder="Last Name" onChangeText={(e)=>setForm({...form,lname:e})}/>
        <TextInput placeholder="Phone Number" onChangeText={(e)=>setForm({...form,phoneNumber:Number(e)})}/>
        <TextInput placeholder="E-Mail" onChangeText={(e)=>setForm({...form,email:e})}/>

        <Button title="Add Contact" onPress={handleAddContact}/>
    </View>
}