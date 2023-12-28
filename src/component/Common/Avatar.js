import React, { useState, useEffect } from 'react'

export default ({ setSignalIfValid, label, multiple, pField, payload, setPayload, fields, activeStep, count }) => {
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

    const handleImageClick = (imageId) => {
        const field = payload[pField];
        if (!field || !field.length) {
            setPayload({
                ...payload,
                [pField]: [imageId]
            })
        }
        else if (field.includes(imageId)) {
            // If the image is already selected, deselect it
            setPayload({
                ...payload,
                [pField]: field.filter((id) => id !== imageId)
            })
        } else if (field.length < 3) {
            // If less than three images are selected, select the clicked image
            setPayload({
                ...payload,
                [pField]: [...field, imageId]
            })
        }
        // Otherwise, do nothing (limit reached)
    };

    const updatePayload = (val, multiple) => {
        if (multiple) {
            handleImageClick(val)
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
                {multiple && <p>You can select maximum 3 options!</p>}
                <div className="div27">
                    <span>(</span>
                    <span className="span26">{activeStep + 1}</span>
                    <span>/{count})</span>
                </div>
            </div>
            <div className='avatar-block'>
                {fields.map((d, index) => {
                    return (
                        <div key={index} className={payload[pField] && payload[pField].includes(d.name) ? 'active' : ''}>
                            <img key={index} src={d.src} onClick={() => updatePayload(d.name, multiple)} />
                            <span>{d.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}