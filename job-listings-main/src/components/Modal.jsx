// import React, {useState} from 'react'

// const Modal = (props) => {
//     const arr = ['company', 'position', 'role', 'level', 'postedAt', 'contract', 'location', 'languages']


    
//     return (
//         <div className='modal-container'>
//             <div className='modal-content'>
//             {arr.map((item, index) => {
//              return (
//                     <div key={index}>
//                        <h3>Input {item}</h3>
//                       <input onChange={(event) => props.addNewDataValue(event, index)} type='text'></input>
//                     </div>
//                 )
//             })}
//           <br></br>
//           <div className='button-container'>
//             <button onClick={props.closeModal}className='cancel'>X</button>
//             <button className='apply' onClick={() => { 
//     props.addInputData(); 
//     props.closeModal(); 
// }}>Apply</button>
//  </div>
// </div>
//         </div>
//     )
// } 

// export default Modal

import React, { useState } from 'react';

const Modal = (props) => {
    const arr = ['company', 'position', 'role', 'level', 'postedAt', 'contract', 'location', 'languages'];
    const initialState = Object.fromEntries(arr.map(key => [key, '']));
    const [inputData, setInputData] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        return Object.values(inputData).every(value => value.trim() !== '');
    };

    const handleSubmit = () => {
        if (validateForm()) {
            props.addInputData(inputData);
            props.closeModal();
        } else {
            alert('Please fill in all fields!');
        }
    };

    const inputFields = arr.map((item, index) => (
        <div key={index}>
            <h3>Input {item}</h3>
            <input
                onChange={handleInputChange}
                type='text'
                name={item}
                value={inputData[item]}
            />
        </div>
    ));

    return (
        <div className='modal-container'>
            <div className='modal-content'>
                {inputFields}
                <br />
                <div className='button-container'>
                    <button onClick={props.closeModal} className='cancel'>X</button>
                    <button className='apply' onClick={handleSubmit}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
