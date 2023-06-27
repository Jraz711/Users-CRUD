import React from 'react';

const WarningDelete = ({ userToDelete, deleteUser, alert, cancelDelete }) => {

    return (
        <div>
            {alert &&
                <div className='container__form'>
                    <div className='card__form'>
                        <div className='border__form'>
                            <h3>Se Eliminara el Usuario <br /><br /> {userToDelete.first_name} {userToDelete.last_name}</h3>
                            <h4>Esta Seguro que desea hacerlo</h4>
                            <hr />
                            <p>Esta accion es permanente! </p>
                            <div className='btn__warning'>
                                <button className='btn__delete' onClick={() => deleteUser(userToDelete)}>Eliminar</button>
                                <button className='btn__cancel' onClick={() => cancelDelete()}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default WarningDelete;