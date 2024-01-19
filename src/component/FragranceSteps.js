import React from 'react';
import Steps from './Steps';
import Avatar from './Common/Avatar';
import Slider from './Common/Slider';
import Text from './Common/Text';
import TextRange from './Common/TextRange';
import Ingredients from './Views/Ingredients';

import {FRAGRANCE_STEPS} from './Utilities/constant'

export default (props) => {
    return (
        <Steps {...props}
            // prevButton={{ style: { display: 'none' } }}
            // nextButton={{ title: 'Next >' }}
            items={FRAGRANCE_STEPS}
        >
            <Avatar showMLabel={true} multiple={true} count={FRAGRANCE_STEPS.length} {...props} pField='smell' label="Select Fragrance smell" placeholder='' />
            <Avatar showMLabel={true} multiple={true} count={FRAGRANCE_STEPS.length} {...props} pField='oflactive_dir' label="Select Oflactive Directions" placeholder=''/>
            <Ingredients count={FRAGRANCE_STEPS.length} {...props} pField='ingredients' title="Market" label="Select Current Markets/ focus Market" placeholder='' multiple={true} />
            <Avatar showMLabel={true} multiple={true} count={FRAGRANCE_STEPS.length} {...props} pField='emotions' label="Select Emotions" placeholder='' />
            <Avatar showMLabel={true} multiple={true} count={FRAGRANCE_STEPS.length} {...props} pField='colors' label="Select Colors" placeholder='' />
            <Slider tip="%" count={FRAGRANCE_STEPS.length} {...props} pField='dosage' label="Select Dosage" placeholder='' defaultValue={[20, 35]} range={true} min={2} max={50} />
            <TextRange type={'number'} pFrom={'Min'} pTo={'Max'} count={FRAGRANCE_STEPS.length} {...props} pField='price_range' label='Select price range' placeholder='price' />
            <Text count={FRAGRANCE_STEPS.length} {...props} pField='ref_link' label='Share Fragrance Benchmark' placeholder='Past perfume refrence links in the box' />
        </Steps>
    )
}
