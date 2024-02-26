import React from 'react';
import Tags from './Common/Tags';
import Dropdown from './Common/Dropdown';
import Steps from './Steps';

import {AGE_GROUP, GENDER, OCCUPATION, CONSUMER_STEPS} from './Utilities/constant'

export default (props) => {
    return (
        <Steps {...props}
            items={CONSUMER_STEPS}
        >
            <Dropdown count={CONSUMER_STEPS.length} {...props} fields={AGE_GROUP} pField='age_gp' title='Age Group' label='Select Consumer Age Group' placeholder='Select Age Group' />
            <Tags count={CONSUMER_STEPS.length} {...props} pField='gender' title='Gender' label='Select Consumer Gender' placeholder='Select Consumer Gender' fields={GENDER} />
            <Tags count={CONSUMER_STEPS.length} {...props} pField='tg_user_occup' commentField={'occupation_tg_user_occup'} title="Occupation" label="Select Consumer Occupation" placeholder='Select Consumer Occupation' fields={OCCUPATION} />
        </Steps>
    )
}
