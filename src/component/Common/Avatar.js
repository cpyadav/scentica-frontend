import React, { useState, useEffect } from 'react'

export default ({ signalIfValid, label, placeholder, pField, payload, setPayload, fields, setActiveStep, activeStep }) => {
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
                        <span className="span26">1</span>
                        <span>/3)</span>
                    </div>
                    <div className='avatar-block'>
                        {fields.map((d,index) => {
                            console.log(d.src)
                            return (
                                <div className={payload[pField] === d.name ? 'active' : ''}>
                                    <img key={index} src={d.src} onClick={() => updatePayload(d.name)} />
                                    <span>{d.name}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className='text-center'>
                        <button onClick={() => {
                            setActiveStep(activeStep + 1)
                        }}>Next</button>
                    </div>
                </div>
            </div>
        </div>)
}