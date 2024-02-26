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
            <Avatar tabs={true} count={PRODUCT_STEPS.length} {...props} pField='category' commentField={'category_comment'} title='Category' label='Select Product Category' placeholder='Select an industry' />
            <Avatar tabs={true} count={PRODUCT_STEPS.length} {...props} pField='type' commentField={'type_comment'} title="Type" label="Select Product Type" placeholder='' />
            <Avatar tabs={true} count={PRODUCT_STEPS.length} {...props} pField='packaging' commentField={'packaging_comment'} title="Packaging" label="Select Product Packaging" placeholder='' />
            <Slider tip="ml" count={PRODUCT_STEPS.length} {...props} pField='size' title="Size" label="Select Product Size" placeholder='' defaultValue={30} range={false} min={2} max={50} />
            <Avatar tabs={true} count={PRODUCT_STEPS.length} {...props} pField='formate' commentField={'formate_comment'} title="Formate" label="Select Product Formate" placeholder='' />
            <FocusMarket count={PRODUCT_STEPS.length} {...props} pField='market' title="Market" label="Select Current Markets/ focus Market" placeholder='' />
            <Text count={PRODUCT_STEPS.length} {...props} pField='price' label='Select Current / Planned Product Price' placeholder='Enter amount' selectBefore={selectBefore} type={'number'} />
            <WebsiteLinks count={PRODUCT_STEPS.length} {...props}  />
        </Steps>
    )
}
