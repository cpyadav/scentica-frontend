import React, { useState, useEffect } from 'react'

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
        <div>
            <div className='row'>
                <div className='columns' style={{ position: 'relative' }}>
                    <label>{label}</label>
                    <div className="div27">
                        <span>(</span>
                        <span className="span26">{activeStep + 1}</span>
                        <span>/{count})</span>
                    </div>
                    <input
                        className='u-full-width'
                        placeholder={placeholder}
                        type='text'
                        onChange={e => updatePayload(e.target.value)}
                        value={payload[pField] || ''}
                        autoFocus
                        required
                    />
                </div>
            </div>
        </div>)
}