import React, { useState } from 'react';
import Steps from './Steps';
import Avatar from './Common/Avatar';
import Slider from './Common/Slider';
import Text from './Common/Text';
import TextRange from './Common/TextRange';
import Group from '../Group.png'
import Ingredients from './Views/Ingredients';

const OPTIONS = [
    {
        title: 'Fragrance Smell',
        id: 0
    },
    {
        title: 'Olfactive directions',
        id: 1
    },
    {
        title: "Ingredients",
        id: 2
    },
    {
        title: 'Emotions',
        id: 3
    },
    {
        title: 'Colors',
        id: 4
    },
    {
        title: 'Dosage',
        id: 5
    },
    {
        title: 'Price Range',
        id: 6
    },
    {
        title: 'Refrence link',
        id: 7
    }
]

const P_TYPE = [{
    name: 'Airsol sprays',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Plug-in air fresheneres',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Reed diffusers',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Scented candles',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Essential oil diffusers',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Gel air freshners',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Potpourii',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Scented sachets',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Incense sticks and cones',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Cash Air freshner',
    image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}]

const IngredientList = [
    {
        name: 'Citrus Smell',
        ingredient: [{
            name: 'Label 1',
            image: Group,
        }, {
            name: 'Label 2',
            image: Group,
        }, {
            name: 'Label 3',
            image: Group,
        }, {
            name: 'Label 4',
            image: Group,
        }, {
            name: 'Label 5',
            image: Group,
        }]
    },
    {
        name: 'Fruits, Vegetable & Nuts',
        ingredient: []
    },
    {
        name: "Flowers",
        ingredient: [{
            name: 'Argentina',
            image: Group,
        }, {
            name: 'Bolivia',
            image: Group,
        }, {
            name: 'Columbia',
            image: Group,
        }, {
            name: 'Brazil',
            image: Group,
        }, {
            name: 'Peru',
            image: Group,
        }]
    },
    {
        name: "Greens, Herbs & Fougeres",
        ingredient: []
    },
    {
        name: "Spices",
        ingredient: []
    }
]

export default (props) => {
    return (
        <Steps {...props}
            // prevButton={{ style: { display: 'none' } }}
            // nextButton={{ title: 'Next >' }}
            items={OPTIONS}
        >
            <Avatar showMLabel={true} multiple={true} count={OPTIONS.length} {...props} pField='smell' label="Select Fragrance smell" placeholder='' fields={P_TYPE} />
            <Avatar showMLabel={true} multiple={true} count={OPTIONS.length} {...props} pField='oflactive_dir' label="Select Oflactive Directions" placeholder='' fields={P_TYPE} />
            <Ingredients count={OPTIONS.length} {...props} pField='market' title="Market" label="Select Current Markets/ focus Market" placeholder='' fields={IngredientList} multiple={true} />
            <Avatar showMLabel={true} multiple={true} count={OPTIONS.length} {...props} pField='emotions' label="Select Emotions" placeholder='' fields={P_TYPE} />
            <Avatar showMLabel={true} multiple={true} count={OPTIONS.length} {...props} pField='colors' label="Select Colors" placeholder='' fields={P_TYPE} />
            <Slider tip="%" count={OPTIONS.length} {...props} pField='dosage' label="Select Dosage" placeholder='' defaultValue={[20, 35]} range={true} min={2} max={50} />
            <TextRange type={'number'} pFrom={'Min'} pTo={'Max'} count={OPTIONS.length} {...props} pField='price_range' label='Select price range' placeholder='price' />
            <Text count={OPTIONS.length} {...props} pField='ref_link' label='Share Fragrance Benchmark' placeholder='Past perfume refrence links in the box' />
        </Steps>
    )
}
