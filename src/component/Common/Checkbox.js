import React, {  useEffect } from 'react';
import { Checkbox } from 'antd';

export default ({ setSignalIfValid, disabled, label, pField, payload, setPayload}) => {
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
            <Checkbox 
                checked={payload[pField]}
                disabled={disabled} 
                onChange={e => updatePayload(e.target.checked)}>
                {label}
            </Checkbox>
        </div>)
}