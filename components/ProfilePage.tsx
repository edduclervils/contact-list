import { Button, Linking, Text, View } from "react-native";
import { Props } from "../types";


export default function ProfilePage({navigation,route}:Props["profile"]){
    console.log(route.params)

    return <View>
        <Text>Name: {route.params.contactInfo.fname} {route.params.contactInfo.lname}</Text>
        <Text>Email: {route.params.contactInfo.email}</Text>
        <Text>Phone Number: {route.params.contactInfo.phoneNumber}</Text>
        <Button title="Send Text" onPress={()=>Linking.openURL(`sms:+${route.params.contactInfo.phoneNumber}`)}/>
        <Button title="Send E-mail" onPress={()=>Linking.openURL(`mailto: ${route.params.contactInfo.email}`)}/>
    </View>
}