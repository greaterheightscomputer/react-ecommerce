import { firebase } from '../firebase/firebase';

export const loginSucess = (uid) => ({
    type: 'LOGIN_SUCCESS',
    uid
});

// export const loginFail = () => ({
//     type: 'LOGIN_ERROR'    
// });

export const startLogin = (credentials) => {
    return (dispatch) => {                
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, 
            credentials.password
            ).catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err }); 
            });
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();        
    };
};

// export const startLogin = (credentials) => {
//     return (dispatch, getState ) => {        
        
//         firebase.auth().signInWithEmailAndPassword(
//             credentials.email, 
//             credentials.password
//             ).then((data) => {
//                 dispatch({ type: 'LOGIN_SUCCESS', data });  //dispatch action.type to reducer 
//             }).catch((err) => {
//                 dispatch({ type: 'LOGIN_ERROR', err }); 
//             });
//     };
// };

// export const startLogout = () => {
//     return (dispatch, getState) => {
//         return firebase.auth().signOut().then(() => {
//             dispatch({ type: 'LOGOUT' });  //dispatch action.type to reducer 
//         })
//     };
// };

