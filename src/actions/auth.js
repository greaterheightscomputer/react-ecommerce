import database, { firebase } from '../firebase/firebase';
import moment from 'moment';

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
    return (dispatch) => {        
        return firebase.auth().signOut();        
    };
};

export const signUp = (newUser) => {
    return (dispatch) => {        
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password            
        )        
        .then((resp) => {
            return database.ref(`signUpUsers/${resp.uid}`).set({
                id: resp.uid, 
                email: newUser.email,
                password: newUser.password,               
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initial: newUser.firstName[0] + newUser.lastName[0],
                phone: newUser.phone,
                createdAt: newUser.createdAt
            })
        })
        .then((uid) => {
            dispatch({ type: 'SIGNUP_SUCCESS', uid})
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
};

export const addTrackEmployee = (uid, email, operation) => {
    const currentDate = moment().toDate().valueOf();
    return (dispatch) => {        
           return database.ref(`trackEmployees/${currentDate}`).set({
                id: uid,                 
                operation,
                email,
                createdAt: currentDate
            })                
    }
}


