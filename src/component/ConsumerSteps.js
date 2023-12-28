import React, { useState } from 'react';
import Tags from './Common/Tags';
import Dropdown from './Common/Dropdown';
import Steps from './Steps';

const AGE_GROUP = [{
    name: '18-23 yr'
},{
    name: '23-28 yr'
},{
    name: '28-33 yr'
},{
    name: '33-37 yr'
},{
    name: 'Above 37 yr'
}]

const GENDER = [{
    name: 'Female'
},{
    name: 'Male'
},{
    name: 'I prefer not to tell'
}]

const Occupation = [{
    name: 'Brand Owner'
},{
    name: 'Co-manufacturer'
},{
    name: 'Agency'
},{
    name: 'Others'
}]

const OPTIONS = [
    {
        title: 'Age group',
        id: 0
    },
    {
        title: 'Gender',
        id: 1
    },
    {
        title: "Occupation",
        id: 2
    }
]

export default (props) => {
    return (
        <Steps {...props}
            items={OPTIONS}
        >
            <Dropdown count={OPTIONS.length} {...props} fields={AGE_GROUP} pField='age_gp' title='Age Group' label='Select Consumer Age Group' placeholder='Select Age Group' />
            <Tags count={OPTIONS.length} {...props} pField='gender' title='Gender' label='Select Consumer Gender' placeholder='Select Consumer Gender' fields={GENDER} />
            <Tags count={OPTIONS.length} {...props} pField='tg_user_occup' title="Occupation" label="Select Consumer Occupation" placeholder='Select Consumer Occupation' fields={Occupation} />
        </Steps>
    )
}
