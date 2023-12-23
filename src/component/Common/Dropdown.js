import React, { useEffect, useState } from 'react';
import './common.css'; // Import your CSS file

export default ({ signalIfValid, label, placeholder, pField, payload, setPayload, fields, setActiveStep, activeStep }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const signalParent = (isValid) => {
        // signalIfValid(isValid)
    }

    useEffect(() => {
        if (payload[pField]) {
            signalParent(true)
        }
        else {
            signalParent(false)
        }
    }, [payload[pField]])

    const handleOptionClick = (val) => {
        setDropdownOpen(false);
        setPayload({
            ...payload,
            [pField]: val
        })
    }

    return (
        <div className='row'>
            <div className='columns' style={{ position: 'relative' }}>
                <label>{label}</label>
                <div className="div27">
                    <span>(</span>
                    <span className="span26">1</span>
                    <span>/3)</span>
                </div>
                <div className="custom-select">
                    <input
                        type="text"
                        value={payload[pField] || ''}
                        placeholder={placeholder}
                        readOnly
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    />
                    {isDropdownOpen && (
                        <ul className="options-list">
                            {fields.map((option, index) => (
                                <li key={index} onClick={() => handleOptionClick(option.name)}>
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='text-center'>
                    <button onClick={() => {
                        setActiveStep(activeStep + 1)
                    }}>Next</button>
                </div>
            </div>
        </div>
    );
};
