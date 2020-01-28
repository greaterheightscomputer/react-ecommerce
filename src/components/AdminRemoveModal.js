import React from 'react';
import Modal from 'react-modal';

const AdminRemoveModal = (props) => (
    <Modal
        isOpen={!!props.selectedRemove}
        onRequestClose={props.onSelectedNotRemove} //onRequestClose means you can us esc or click outside the modal or dialog box
        contentLabel="Remove Product"
        closeTimeoutMS={400}
        className="modal"
    >
        <h3 className="modal__title">Remove Product</h3>             
        {props.selectedRemove && <p className="modal__body">{`Are you sure you want to Remove ${props.description}`}</p>}
{/*console.log(props.description)*/}
        <div className="modal__button">
            <button 
                className="button"                 
                // onClick={props.onSelectedRemove}
                >
                    Remove
            </button>
            <button 
                className="button" 
                onClick={props.onSelectedNotRemove}
                >
                    Cancel
            </button>
        </div>        
    </Modal>
);

export default AdminRemoveModal;