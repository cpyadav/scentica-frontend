import React, { useState } from 'react';
import Text from './Common/Text';
import LargeText from './Common/LargeText';
import Steps from './Steps';
import Dropdown from './Common/Dropdown';

const OPTIONS = [
    {
        title: 'Company Name',
        id: 0
    },
    {
        title: 'Industry',
        id: 1
    },
    {
        title: "Brand's Vision",
        id: 2
    }
]

const INDUSTRIES = [{
    name: 'Label 1'
},{
    name: 'Label 2'
},{
    name: 'Label 3'
},{
    name: 'Label 4'
},{
    name: 'Label 5'
}]

export default (props) => {
    return (
        <Steps {...props}
            items={OPTIONS}
        >
            <Text count={OPTIONS.length} {...props} pField='company_name' title='Company Name' label='Company Name' placeholder='Write your company name' />
            <Dropdown count={OPTIONS.length} fields={INDUSTRIES} {...props} pField='industry' title='Industry' label='Industry' placeholder='Select an industry' />
            <LargeText count={OPTIONS.length} {...props} pField='brand_vision' title="Brand's Vision" label="Brand's Vision" placeholder='Write about your brand' />
        </Steps>
    )
}
