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

export default ({ payload, setPayload }) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <Steps activeStep={activeStep}
            items={OPTIONS}
        >
            <Text activeStep={activeStep} setActiveStep={setActiveStep} pField='company_name' title='Company Name' label='Company Name' placeholder='Write your company name' payload={payload} setPayload={setPayload} />
            <Text activeStep={activeStep} setActiveStep={setActiveStep} pField='industry' title='Industry' label='Industry' placeholder='Select an industry' payload={payload} setPayload={setPayload} />
            <Text activeStep={activeStep} setActiveStep={setActiveStep} pField='brand_vision' title="Brand's Vision" label="Brand's Vision" placeholder='Write about your brand' payload={payload} setPayload={setPayload} />
        </Steps>
    )
}
