import React, { useState } from 'react';
import Steps from './Steps';
import Avatar from './Common/Avatar';
import Slider from './Common/Slider';

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
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Plug-in air fresheneres',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Reed diffusers',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Scented candles',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Essential oil diffusers',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Gel air freshners',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Potpourii',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Scented sachets',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Incense sticks and cones',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}, {
    name: 'Cash Air freshner',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}]

export default (props) => {
    return (
        <Steps {...props}
            // prevButton={{ style: { display: 'none' } }}
            // nextButton={{ title: 'Next >' }}
            items={OPTIONS}
        >
            <Avatar count={OPTIONS.length} {...props} pField='smell' label="Select Fragrance smell" placeholder='' fields={P_TYPE} />
            <Avatar count={OPTIONS.length} {...props} pField='oflactive_dir' label="Select Oflactive Directions" placeholder='' fields={P_TYPE} />
            <Avatar count={OPTIONS.length} {...props} pField='ingredients' label="Select Ingredients" placeholder='' fields={P_TYPE} />
            <Avatar count={OPTIONS.length} {...props} pField='emotions' label="Select Emotions" placeholder='' fields={P_TYPE} />
            <Avatar count={OPTIONS.length} {...props} pField='colors' label="Select Colors" placeholder='' fields={P_TYPE} />
            <Slider count={OPTIONS.length} {...props} pField='dosage' label="Select Dosage" placeholder='' defaultValue={[20, 35]} range={true} min={2} max={50} />
        </Steps>
    )
}
