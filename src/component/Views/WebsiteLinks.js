import React from 'react';
import Text from '../Common/Text';
import {email} from '../Utilities/validation';


export default ({count, ...props}) => {
    return (
        <>
            <Text count={count} {...props} pField='benchmark' label='Product Benchmark' placeholder='Paste reference link in the box' />
            <Text validation={email} count={false} {...props} pField='web_link' label='Own Website link' placeholder='Paste reference link in the box' />
        </>
    )
}
