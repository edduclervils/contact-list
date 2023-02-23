import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types"
import { Contacts } from "./reducers/contact-reducer"


export type RootStackParamList = {
    Home: undefined
    Add: undefined
    Profile: {contactInfo: Contacts}
}

export type Props = {
    home: NativeStackScreenProps<RootStackParamList, 'Home'>
    add: NativeStackScreenProps<RootStackParamList, 'Add'>
    profile: NativeStackScreenProps<RootStackParamList, 'Profile'>
}