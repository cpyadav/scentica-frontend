import React, { useState, useEffect } from 'react'

export default ({ setSignalIfValid, label, placeholder, pField, payload, setPayload, fields, activeStep, count }) => {
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
            <div className='tab-pills overflow'>
                {fields.map((d, index) => {
                    return <span key={index} onClick={() => updatePayload(d.name)} className={payload[pField] === d.name ? 'active' : ''}>{d.name}</span>
                })}
            </div>
        </div>)
}