import React, { useState, useEffect } from 'react'
import Text from './Text'

export default ({ setSignalIfValid, label, commentField, pField, payload, setPayload, fields, activeStep, count, multiple }) => {
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

    const handleTagsClick = (tagId) => {
        const field = payload[pField] || [];
        if (field.includes(tagId)) {
            setPayload({
                ...payload,
                [pField]: field.filter((id) => id !== tagId)
            })
        } else {
            setPayload({
                ...payload,
                [pField]: [...field, tagId]
            })
        }
        // Otherwise, do nothing (limit reached)
    };


    const updatePayload = (val) => {
        if (multiple) {
            handleTagsClick(val)
        }
        else {
            setPayload({
                ...payload,
                [pField]: [val]
            })
        }
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
                    const isActive = payload[pField] && payload[pField].includes(d.name);
                    return <span key={index} onClick={() => updatePayload(d.name)} className={isActive ? 'active' : ''}>{d.name}</span>
                })}
            </div>
            {commentField &&
                    <Text setSignalIfValid={setSignalIfValid} payload={payload} setPayload={setPayload} count={false} pField={commentField} placeholder='Comment...' />}
        </div>)
}