import React from 'react';

const EditEcommercePage = (props) => {
    console.log(props)
    return(
    <div>
        Editing the product with id of {props.match.params.id}
    </div>
);}

export default EditEcommercePage;