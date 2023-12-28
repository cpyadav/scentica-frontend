import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

import { hasNullOrUndefinedOrEmpty } from '../validation'

export default ({ setSignalIfValid, activeStep, count, label, pFrom, pTo, pField, payload, setPayload, type }) => {
    const [from, setFrom] = useState(payload[pField] && payload[pField][0]);
    const [to, setTo] = useState(payload[pField] && payload[pField][1]);

    const signalParent = (isValid) => {
        setSignalIfValid(isValid)
    }

    useEffect(() => {
        if (payload[pField] && !hasNullOrUndefinedOrEmpty(payload[pField])) {
            signalParent(true)
        }
        else {
            signalParent(false)
        }
    }, [payload[pField]])

    useEffect(() => {
        setPayload({
            ...payload,
            [pField]: [from, to]
        })
    },[from, to])

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
            <div className='price-range'>
                <label>From</label>
                <Input
                    placeholder={pFrom}
                    onChange={e => setFrom(e.target.value)}
                    value={from}
                    addonAfter="$/ml"
                    type={type || 'text'}
                />
                <label>To</label>
                <Input
                    placeholder={pTo}
                    onChange={e => setTo(e.target.value)}
                    value={to}
                    addonAfter="$/ml"
                    type={type || 'text'}
                />
            </div>
        </div>)
}