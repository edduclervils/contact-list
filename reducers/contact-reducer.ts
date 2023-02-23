


export type Contacts = {
    fname: string
    lname: string
    phoneNumber: number
    email: string
    dateTimeAdded: number
}


export type ContactCreationInputState = {
    fnameInput: string
    lnameInput: string
    phoneNumberInput: number
    emailInput: string
    dateTimeAddedInput: number
	contactList: Contacts[]
}


export type SetFNameAction = {type: "SET_FNAME", payload: string};
export type SetLNameAction = {type: "SET_LNAME", payload: string };
export type SetPhoneNumberAction = {type: "SET_PHONE_NUMBER", payload: number };
export type SetEmailAction = {type: "SET_EMAIL", payload: string };
export type SetDateTimeAction = {type: "SET_DATE_TIME", payload: number };
export type StoreContactAction = {type: "STORE_CONTACT", payload: Contacts };

export type CreateContactFromFormAction = {type:"CREATE_CONTACT_FROM_FORM", payload: Contacts}


export type ContactCreationInputAction = SetFNameAction | SetLNameAction | SetPhoneNumberAction | SetEmailAction | SetDateTimeAction | CreateContactFromFormAction | StoreContactAction

const initialState:ContactCreationInputState = {
    fnameInput: "",
    lnameInput: "",
    phoneNumberInput: 0,
    emailInput: "",
    dateTimeAddedInput: 0,
	contactList: [{fname:"Nicolas", lname:"Donovan",     phoneNumber: 5906501575, email: "joehall@sbcglobal.net", dateTimeAdded: 1675911770 },
    {fname:"Kamran", lname:"Shannon",      phoneNumber: 8515112153, email: "corrada@msn.com", dateTimeAdded: 1676979543       },
    {fname:"Ria", lname:"Whitehead",       phoneNumber: 2373336722, email: "mstrout@aol.com", dateTimeAdded: 1676221031       },
    {fname:"Renee", lname:"Ferguson",      phoneNumber: 7915286249, email: "kassiesa@yahoo.com", dateTimeAdded: 1676813195    },
    {fname:"Fahad", lname:"Wright",        phoneNumber: 3389959574, email: "djupedal@me.com", dateTimeAdded: 1674866831       },
    {fname:"Natasha", lname:"Pollard",     phoneNumber: 7553914872, email: "scotfl@msn.com", dateTimeAdded: 1675260571        },
    {fname:"Guy", lname:"Gonzales",        phoneNumber: 5367932697, email: "gumpish@hotmail.com", dateTimeAdded: 1674466495   },
    {fname:"Benedict", lname:"Harrington", phoneNumber: 6745023653, email: "seurat@yahoo.ca", dateTimeAdded: 1674994287       },
    {fname:"Hazel", lname:"Kerr",          phoneNumber: 5793553321, email: "rkobes@yahoo.ca", dateTimeAdded: 1675762184       },
    {fname:"Christine", lname:"O'Quinn",   phoneNumber: 4115063529, email: "drolsky@icloud.com", dateTimeAdded: 1675099733    }]
}

export function contactCreationReducer(state: ContactCreationInputState = initialState, action: ContactCreationInputAction):ContactCreationInputState{
    const newState:ContactCreationInputState = JSON.parse(JSON.stringify(state));


    switch(action.type){
        case "SET_FNAME":{
            newState.fnameInput = action.payload;
            return newState;
        }
        case "SET_LNAME":{
            newState.lnameInput = action.payload;
            return newState;
        }
        case "SET_PHONE_NUMBER":{
            newState.phoneNumberInput = action.payload;
            return newState;
        }
        case "SET_EMAIL":{
            newState.emailInput = action.payload;
            return newState;
        }
		case "SET_DATE_TIME":{
            newState.dateTimeAddedInput = action.payload;
            return newState;
        }
        case "STORE_CONTACT":{
            newState.contactList.push(action.payload);
            return newState;
        }
        default: {
            return newState;
        }
    }
}