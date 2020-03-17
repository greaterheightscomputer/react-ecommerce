import database, { firebase } from '../firebase/firebase';

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

export const signUp = (newUser) => {
    return (dispatch) => {
        // const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password            
        )
        // .then((resp) => {
        //     return database.collection('users').doc(resp.user.uid).set({
        //         firstName: newUser.firstName,
        //         lastName: newUser.lastName,
        //         phone: newUser.phone,
        //         createdAt: newUser.createdAt
        //     })
        // })
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
}

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

