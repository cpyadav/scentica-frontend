import React, { useState } from 'react';
import Text from './Common/Text';
import Avatar from './Common/Avatar';
import Slider from './Common/Slider';
import Group from '../Group.png'
import Steps from './Steps';
import { Select } from 'antd';
import FocusMarket from './Views/FocusMarket';
import WebsiteLinks from './Views/WebsiteLinks';
const { Option } = Select;


const P_CATEGORY = [{
    name: 'Air Care',
    image: Group
}, {
    name: 'Fabric Care',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Fine Fragrance',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Cosmetic',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Skin Care',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}]

const P_TYPE = [{
    name: 'Airsol sprays',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Plug-in air fresheneres',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Reed diffusers',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Scented candles',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Essential oil diffusers',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Gel air freshners',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Potpourii',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Scented sachets',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Incense sticks and cones',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Cash Air freshner',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}]

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

const Countries = [
    {
        name: 'Asia',
        image: Group,
        countries: [{
            name: 'Label 1'
        }, {
            name: 'Label 2'
        }, {
            name: 'Label 3'
        }, {
            name: 'Label 4'
        }, {
            name: 'Label 5'
        }]
    },
    {
        name: 'North America',
        image: Group,
        countries: []
    },
    {
        name: "South America",
        image: Group,
        countries: [{
            name: 'Argentina'
        }, {
            name: 'Bolivia'
        }, {
            name: 'Columbia'
        }, {
            name: 'Brazil'
        }, {
            name: 'Peru'
        }]
    },
    {
        name: "Australia",
        image: Group,
        countries: []
    },
    {
        name: "Europe",
        image: Group,
        countries: []
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
            <Avatar count={OPTIONS.length} {...props} pField='category' title='Category' label='Select Product Category' placeholder='Select an industry' fields={P_CATEGORY} />
            <Avatar count={OPTIONS.length} {...props} pField='type' title="Type" label="Select Product Type" placeholder='' fields={P_TYPE} />
            <Avatar count={OPTIONS.length} {...props} pField='packaging' title="Packaging" label="Select Product Packaging" placeholder='' fields={P_TYPE} />
            <Slider tip="ml" count={OPTIONS.length} {...props} pField='size' title="Size" label="Select Product Size" placeholder='' fields={P_TYPE} defaultValue={30} range={false} min={2} max={50} />
            <Avatar count={OPTIONS.length} {...props} pField='formate' title="Formate" label="Select Product Formate" placeholder='' fields={P_TYPE} />
            <FocusMarket count={OPTIONS.length} {...props} pField='market' title="Market" label="Select Current Markets/ focus Market" placeholder='' fields={Countries} />
            <Text count={OPTIONS.length} {...props} pField='price' label='Select Current / Planned Product Price' placeholder='Enter amount' selectBefore={selectBefore} type={'number'} />
            <WebsiteLinks count={OPTIONS.length} {...props} />
        </Steps>
    )
}
