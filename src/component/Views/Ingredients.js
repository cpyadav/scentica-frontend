import React, { useState, useEffect } from 'react'
import Avatar from '../Common/Avatar';

export default ({ label, multiple,fields, activeStep, count,payload, setPayload, ...props }) => {
    const [activeIngredient, setActiveIngredient] = useState();
    const [ingredientList, setingredientList] = useState([]);


    useEffect(() => {
        if(activeIngredient) {
            delete payload['ingredients']
            const activeCountries = fields.filter(d => d.name === activeIngredient)[0].ingredient;
            setingredientList(activeCountries)
        }
    },[activeIngredient])

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
            <div className='tab-pills'>
                {fields.map((d, index) => {
                    return <span key={index} onClick={() => setActiveIngredient(d.name)} className={activeIngredient === d.name ? 'active' : ''}>{d.name}</span>
                })}
            </div>
            <Avatar showMLabel={false} multiple={multiple} {...props} pField='ingredients' fields={ingredientList} payload={payload} setPayload={setPayload} />
        </div>
    )
}