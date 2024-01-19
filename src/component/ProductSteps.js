import React, { useState } from 'react';
import Text from './Common/Text';
import Avatar from './Common/Avatar';
import Slider from './Common/Slider';
import Steps from './Steps';
import { Select } from 'antd';
import FocusMarket from './Views/FocusMarket';
import WebsiteLinks from './Views/WebsiteLinks';

import {PRODUCT_STEPS} from './Utilities/constant'
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="$">
        <Option value="$">$</Option>
    </Select>
);


export default (props) => {
    return (
        <Steps {...props}
            items={PRODUCT_STEPS}
        >
            <Text count={PRODUCT_STEPS.length} {...props} pField='name' title='Name' label='Product Name' placeholder='Write your Product Name' />
            <Avatar count={PRODUCT_STEPS.length} {...props} pField='category' title='Category' label='Select Product Category' placeholder='Select an industry' />
            <Avatar count={PRODUCT_STEPS.length} {...props} pField='type' title="Type" label="Select Product Type" placeholder='' />
            <Avatar count={PRODUCT_STEPS.length} {...props} pField='packaging' title="Packaging" label="Select Product Packaging" placeholder='' />
            <Slider tip="ml" count={PRODUCT_STEPS.length} {...props} pField='size' title="Size" label="Select Product Size" placeholder='' defaultValue={30} range={false} min={2} max={50} />
            <Avatar count={PRODUCT_STEPS.length} {...props} pField='formate' title="Formate" label="Select Product Formate" placeholder='' />
            <FocusMarket count={PRODUCT_STEPS.length} {...props} pField='market' title="Market" label="Select Current Markets/ focus Market" placeholder='' />
            <Text count={PRODUCT_STEPS.length} {...props} pField='price' label='Select Current / Planned Product Price' placeholder='Enter amount' selectBefore={selectBefore} type={'number'} />
            <WebsiteLinks count={PRODUCT_STEPS.length} {...props}  />
        </Steps>
    )
}
