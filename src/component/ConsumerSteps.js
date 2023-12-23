import React, { useState } from 'react';
import Tabs from './Common/Tabs';
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

export default ({ payload, setPayload }) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <Steps activeStep={activeStep}
            items={OPTIONS}
        >
            <Dropdown setActiveStep={setActiveStep} activeStep={activeStep} fields={AGE_GROUP} pField='age_gp' title='Age Group' label='Select Consumer Age Group' placeholder='Select Age Group' payload={payload} setPayload={setPayload} />
            <Tabs setActiveStep={setActiveStep} activeStep={activeStep} pField='gender' title='Gender' label='Select Consumer Gender' placeholder='Select Consumer Gender' payload={payload} setPayload={setPayload} fields={GENDER} />
            <Tabs setActiveStep={setActiveStep} activeStep={activeStep} pField='tg_user_occup' title="Occupation" label="Select Consumer Occupation" placeholder='Select Consumer Occupation' payload={payload} setPayload={setPayload} fields={Occupation} />
        </Steps>
    )
}
