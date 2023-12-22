import React from 'react';
import MultiStep from 'react-multistep';
import Text from './Common/Text';
import Avatar from './Common/Avatar';

const P_CATEGORY = [{
    name: 'Air Care',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Fabric Care',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Fine Fragrance',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Cosmetic',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
},{
    name: 'Skin Care',
    src: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
}]

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

export default ({ payload, setPayload }) => {
    return (
        <MultiStep activeStep={0}
            prevButton={{ style: { display: 'none' } }}
            nextButton={{ title: 'Next >' }}
        >
            <Text pField='name' title='Product Name' label='Product Name' placeholder='Write your Product Name' payload={payload} setPayload={setPayload} />
            <Avatar pField='category' title='Category' label='Select Product Category' placeholder='Select an industry' payload={payload} setPayload={setPayload} fields={P_CATEGORY} />
            <Avatar pField='type' title="Select Product Type" label="Select Product Type" placeholder='' payload={payload} setPayload={setPayload} fields={P_TYPE} />
        </MultiStep>
    )
}
