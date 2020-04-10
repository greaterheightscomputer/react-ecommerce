import database from '../firebase/firebase';

export const fetchTrackEmp = (trackEmp) => ({ 
    type: 'FETCH_TRACKEMP_FROM_DB',
    trackEmp
});
export const fetchTrackEmpDB = () => {
    return (dispatch) => {
        return database.ref('trackEmployees').once('value').then((snapshot) => {
            const trackEmps = [];

            snapshot.forEach((childSnapshot) => {
                trackEmps.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });                
                console.log('trackEmpDB: ', trackEmps);   
                // console.log('cartDB_1: ', carts[0].id);   
                // console.log('cartDB_ID: ', carts[0][0].id);                               
            });            
            dispatch(fetchTrackEmp(trackEmps));            
        });
    };
};
