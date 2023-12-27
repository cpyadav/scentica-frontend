import React, { useState } from 'react';
import Text from './Common/Text';
import Steps from './Steps';

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

export default (props) => {
    return (
        <Steps {...props}
            items={OPTIONS}
        >
            <Text count={OPTIONS.length} {...props} pField='company_name' title='Company Name' label='Company Name' placeholder='Write your company name' />
            <Text count={OPTIONS.length} {...props} pField='industry' title='Industry' label='Industry' placeholder='Select an industry' />
            <Text count={OPTIONS.length} {...props} pField='brand_vision' title="Brand's Vision" label="Brand's Vision" placeholder='Write about your brand' />
        </Steps>
    )
}
