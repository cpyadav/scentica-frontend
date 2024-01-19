import React, { useEffect, useState } from 'react';
import './common.css'; // Import your CSS file
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default ({ setSignalIfValid, label, placeholder, pField, payload, setPayload, fields, activeStep, count }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const signalParent = (isValid) => {
        setSignalIfValid(isValid)
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
        <div className='columns' style={{ position: 'relative' }}>
            <div className='field-header'>
                <label>{label}</label>
                {count && <div className="div27">
                    <span>(</span>
                    <span className="span26">{activeStep + 1}</span>
                    <span>/{count})</span>
                </div>}
            </div>
            <div className="custom-select">
                <Input
                    value={payload[pField] || ''}
                    placeholder={placeholder}
                    readOnly
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    suffix={isDropdownOpen ? <UpOutlined className='up-outlined' /> : <DownOutlined className='down-outlined' />}
                />
                {isDropdownOpen && (
                    <ul className="options-list">
                        {fields.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option.name)}>
                                {/* <span style={{paddingRight: '5px'}}>{option.emoji}</span> */}
                                {option.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
