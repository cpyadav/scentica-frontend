import React from 'react';
import MultiStep from 'react-multistep';
import Text from './Common/Text';
import Tabs from './Common/Tabs';
import Dropdown from './Common/Dropdown';

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

export default ({ payload, setPayload }) => {
    return (
        <MultiStep activeStep={0}
            prevButton={{ style: { display: 'none' } }}
            nextButton={{ title: 'Next >' }}
        >
            <Dropdown fields={AGE_GROUP} pField='age_gp' title='Age Group' label='Select Consumer Age Group' placeholder='Select Age Group' payload={payload} setPayload={setPayload} />
            <Tabs pField='gender' title='Gender' label='Select Consumer Gender' placeholder='Select Consumer Gender' payload={payload} setPayload={setPayload} fields={GENDER} />
            <Tabs pField='tg_user_occup' title="Occupation" label="Select Consumer Occupation" placeholder='Select Consumer Occupation' payload={payload} setPayload={setPayload} fields={Occupation} />
        </MultiStep>
    )
}
