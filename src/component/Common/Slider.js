import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';


export default ({ setSignalIfValid, label, tip, pField, payload, setPayload, defaultValue, min, max, range, activeStep, count }) => {
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
            <div>
                <Slider
                    defaultValue={defaultValue}
                    tooltip={{ open: true }}
                    min={min}
                    max={max}
                    onChange={(val) => updatePayload(val)}
                    range={range}
                    tipFormatter={(value) => `${value} ${tip}`}
                />
            </div>
        </div>)
}