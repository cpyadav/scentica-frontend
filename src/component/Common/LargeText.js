import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;


export default ({ setSignalIfValid, activeStep, count, label, placeholder, pField, payload, setPayload }) => {
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

    const updatePayload = (val) => {
        setPayload({
            ...payload,
            [pField]: val
        })
    }

    return (
        <div className='columns' style={{ position: 'relative' }}>
            <div className='field-header'>
                <label>{label}</label>
                <div className="div27">
                    <span>(</span>
                    <span className="span26">{activeStep + 1}</span>
                    <span>/{count})</span>
                </div>
            </div>
            <TextArea
                rows={4}
                placeholder={placeholder}
                // maxLength={6}
                onChange={e => updatePayload(e.target.value)}
                value={payload[pField] || ''}
            />
        </div>)
}