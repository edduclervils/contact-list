import { takeEvery, put, all, select } from "@redux-saga/core/effects"
import { Contacts, CreateContactFromFormAction } from "../reducers/contact-reducer";

export function* createContactFromFormData(action: CreateContactFromFormAction){
    let unixEpochDate:number = +new Date()/1000;

    const contact: Contacts = {
        fname: action.payload.fname,
        lname: action.payload.lname,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        dateTimeAdded: unixEpochDate
    }
    

    yield put({type: "STORE_CONTACT", payload: contact })
}

export function* watchContactCreation(){
    yield takeEvery("CREATE_CONTACT_FROM_FORM", createContactFromFormData);
}

export function* rootSaga(){
    yield all([watchContactCreation()])
}
