import React from 'react';
import MultiStep from 'react-multistep';
import Text from './Common/Text';

export default ({ payload, setPayload }) => {
    return (
        <MultiStep activeStep={0}
            prevButton={{ style: { display: 'none' } }}
            nextButton={{ title: 'Next >', style: { cursor: 'pointer' } }}
        >
            <Text pField='company_name' title='Company Name' label='Company Name' placeholder='Write your company name' payload={payload} setPayload={setPayload} />
            <Text pField='industry' title='Industry' label='Industry' placeholder='Select an industry' payload={payload} setPayload={setPayload} />
            <Text pField='brand_vision' title="Brand's Vision" label="Brand's Vision" placeholder='Write about your brand' payload={payload} setPayload={setPayload} />
        </MultiStep>
    )
}
