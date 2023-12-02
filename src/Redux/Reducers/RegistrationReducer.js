import { ADD_USER } from '../Actions/RegistrationAction'

const initialState = {
    user:{
        username:'',
        email:'',
        password:'',
        gender:'',
        age:''
    }
}

const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            console.log('Adding user to state:', action.payload);
            return {
                ...state,
                user:action.payload
            };
            default:
                return state;
    }
}

export default RegistrationReducer;