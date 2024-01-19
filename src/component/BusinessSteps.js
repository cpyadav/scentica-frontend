import React from 'react';
import Text from './Common/Text';
import LargeText from './Common/LargeText';
import Steps from './Steps';
import Dropdown from './Common/Dropdown';

import {BUSINESS_STEPS, INDUSTRIES} from './Utilities/constant'

export default (props) => {
    return (
        <Steps {...props}
            items={BUSINESS_STEPS}
        >
            <Text count={BUSINESS_STEPS.length} {...props} pField='company_name' title='Company Name' label='Company Name' placeholder='Write your company name' />
            <Dropdown count={BUSINESS_STEPS.length} fields={INDUSTRIES} {...props} pField='industry' title='Industry' label='Industry' placeholder='Select an industry' />
            <LargeText count={BUSINESS_STEPS.length} {...props} pField='brand_vision' title="Brand's Vision" label="Brand's Vision" placeholder='Write about your brand' />
        </Steps>
    )
}
