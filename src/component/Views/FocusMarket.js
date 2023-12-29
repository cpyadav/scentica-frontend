import React, { useState, useEffect } from 'react'
import Dropdown from '../Common/Dropdown';

export default ({ label, multiple,fields, activeStep, count,payload, setPayload, ...props }) => {
    const [activeCountry, setActiveCountry] = useState();
    const [countryList, setCountryList] = useState([]);


    useEffect(() => {
        if(activeCountry) {
            delete payload['market']
            const activeCountries = fields.filter(d => d.name === activeCountry)[0].countries;
            setCountryList(activeCountries)
        }
    },[activeCountry])

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
                        <div key={index} className={activeCountry === d.name ? 'active' : ''}>
                            <img key={index} src={d.image} onClick={() => setActiveCountry(d.name)} />
                            <span>{d.name}</span>
                        </div>
                    )
                })}
            </div>
            <Dropdown {...props} pField='market' title="Market" label="Select Your Market location" placeholder='Select Location' fields={countryList} payload={payload} setPayload={setPayload} />
        </div>
    )
}