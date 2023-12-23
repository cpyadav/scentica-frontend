import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';


export default ({ signalIfValid, label, placeholder, pField, payload, setPayload, setActiveStep, activeStep, defaultValue, min, max, range }) => {
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
                    <div className='tab-pills'>
                        <Slider 
                            defaultValue={defaultValue} 
                            tooltip={{ open: true }}
                            min={min}
                            max={max} 
                            onChange={(val) => updatePayload(val)}
                            range={range}
                        />
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