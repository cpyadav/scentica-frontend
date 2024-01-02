import React, { useState } from 'react';
import Text from './Common/Text';
import Avatar from './Common/Avatar';
import Slider from './Common/Slider';
import Steps from './Steps';
import { Select } from 'antd';
import FocusMarket from './Views/FocusMarket';
import WebsiteLinks from './Views/WebsiteLinks';
const { Option } = Select;

const OPTIONS = [
    {
        title: 'Name',
        id: 0
    },
    {
        title: 'Category',
        id: 1
    },
    {
        title: "Type",
        id: 2
    },
    {
        title: "Packaging",
        id: 3
    },
    {
        title: "Size",
        id: 4
    },
    {
        title: "Formate",
        id: 5
    },
    {
        title: "Market",
        id: 6
    },
    {
        title: "Price",
        id: 7
    },
    {
        title: "Website links",
        id: 8
    }
]

const selectBefore = (
    <Select defaultValue="$">
        <Option value="$">$</Option>
    </Select>
);


export default (props) => {
    return (
        <Steps {...props}
            items={OPTIONS}
        >
            <Text count={OPTIONS.length} {...props} pField='name' title='Name' label='Product Name' placeholder='Write your Product Name' />
            <Avatar count={OPTIONS.length} {...props} pField='category' title='Category' label='Select Product Category' placeholder='Select an industry' />
            <Avatar count={OPTIONS.length} {...props} pField='type' title="Type" label="Select Product Type" placeholder='' />
            <Avatar count={OPTIONS.length} {...props} pField='packaging' title="Packaging" label="Select Product Packaging" placeholder='' />
            <Slider tip="ml" count={OPTIONS.length} {...props} pField='size' title="Size" label="Select Product Size" placeholder='' defaultValue={30} range={false} min={2} max={50} />
            <Avatar count={OPTIONS.length} {...props} pField='formate' title="Formate" label="Select Product Formate" placeholder='' />
            <FocusMarket count={OPTIONS.length} {...props} pField='market' title="Market" label="Select Current Markets/ focus Market" placeholder='' />
            <Text count={OPTIONS.length} {...props} pField='price' label='Select Current / Planned Product Price' placeholder='Enter amount' selectBefore={selectBefore} type={'number'} />
            <WebsiteLinks count={OPTIONS.length} {...props}  />
        </Steps>
    )
}
