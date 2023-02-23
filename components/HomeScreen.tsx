import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { useSelector } from "react-redux";
import { ContactCreationInputState, Contacts } from "../reducers/contact-reducer";
import { Props } from "../types";

type ContactForm = Contacts


export default function HomeScreen({navigation}:Props["home"]){

    const allContacts2 = useSelector((state:ContactCreationInputState) => state.contactList);

    return <View>
        <Text>Contact List</Text>
        <FlatList data={allContacts2} renderItem={
            ({item, index})=>(
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Profile",{contactInfo: item })}>
                        <Text> Name: {item.fname} {item.lname}</Text>
                    </TouchableOpacity>
                </View>
            )
        }/>
        <Button title="Add Contact" onPress={()=>navigation.navigate("Add")}/>
    </View>
}


