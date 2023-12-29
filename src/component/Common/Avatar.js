import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import useApi from '../Utilities/service';

export default ({ setSignalIfValid, label, multiple, showMLabel, pField, payload, setPayload, fields, activeStep, count }) => {
    const config = {
        method: 'get',
        url: `https://api.example.com/data?type=${pField}`,
        // You can include other Axios configuration options here
    }
    const { data, loading, error, setConfig } = useApi();


    useEffect(() => {
        setConfig(config)
    },[pField])

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
        const field = payload[pField] || [];
        if (field.includes(imageId)) {
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

    const updatePayload = (val) => {
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
            {loading && <Loader />}
            <div className='field-header'>
                <label>{label}</label>
                {showMLabel && <p>You can select maximum 3 options!</p>}
                {count && <div className="div27">
                    <span>(</span>
                    <span className="span26">{activeStep + 1}</span>
                    <span>/{count})</span>
                </div>}
            </div>
            <div className='avatar-block'>
                {fields && fields.map((d, index) => {
                    return (
                        <div key={index} className={payload[pField] && payload[pField].includes(d.name) ? 'active' : ''}>
                            <img key={index} src={d.image} onClick={() => updatePayload(d.name)} />
                            <span>{d.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}