// export default (state = {}, action ) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 uid: action.uid
//             };
//         case 'LOGOUT':
//             return {};
//         default:
//             return state;        
//     }
// };

const defaultState = {
    authError: null    
}
export default (state = defaultState, action ) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state, authError: null,
                uid: action.uid   
            };
        case 'LOGIN_ERROR':
            console.log('Login failed');
            return {
                ...state, authError: 'Login failed'
            };
        case 'LOGOUT':
            console.log('logout Success');
            return {};
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state, authError: null,
                uid: null
            };
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state, authError: action.error.message   //message will email not valid or password not long enough
            };
        default:
            return state;        
    }
};