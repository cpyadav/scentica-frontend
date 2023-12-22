import React, { useState, useEffect } from 'react'

export default ({ signalIfValid, label, placeholder, pField, payload, setPayload, fields }) => {
    const signalParent = (isValid) => {
        signalIfValid(isValid)
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
                    <div className='tab-pills'>
                        {fields.map((d,index) => {
                            return <span key={index} onClick={() => updatePayload(d.name)} className={payload[pField] === d.name ? 'active' : ''}>{d.name}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>)
}