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
        <div>
            <div className='row'>
                <div className='columns' style={{ position: 'relative' }}>
                    <label>{label}</label>
                    <div className="div27">
                        <span>(</span>
                        <span className="span26">{activeStep + 1}</span>
                        <span>/{count})</span>
                    </div>
                    <div className='avatar-block'>
                        {fields.map((d,index) => {
                            return (
                                <div className={payload[pField] === d.name ? 'active' : ''}>
                                    <img key={index} src={d.src} onClick={() => updatePayload(d.name)} />
                                    <span>{d.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>)
}