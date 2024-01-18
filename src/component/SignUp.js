import React, { useEffect, useState } from 'react';
// import './App.css';
import Text from './Common/Text';
import Logo from '../images/MicrosoftTeams-image (3).png'
import Checkbox from './Common/Checkbox';

const SignUp = (props) => {
    return (
        <div className='grid-container'>
            <div className='header grid-item'>
                <img className='logo' src={Logo} />
            </div>
            <div className='left-panel grid-item'>
                <h2>Start creating fragrances for your products and brands</h2>
                <h1>Sign up and create your signature fragrance</h1>
                <h3>Fill out the form below and our fragrance experts will contact you as soon as possible. Start your journey with  Luxeo</h3>
            </div>
            <div className='right-panel grid-item'>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='First Name' placeholder='First Name' />
                </div>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='Last Name' placeholder='Last Name' />
                </div>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='Work email address' placeholder='Your Email' />
                </div>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='Job title' placeholder='Your Title' />
                </div>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='Phone Number' placeholder='With country code' />
                </div>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='Country' placeholder='Select Country' />
                </div>
                <div className='flex-item'>
                    <Text {...props} pField='name' title='Name' label='Company Name' placeholder='Your Company Name' />
                </div>
                <div className='flex-item' style={{ width: '100%', paddingTop: '20px' }}>
                    <Checkbox {...props} pField='terms' label='I agree to the Terms of Use and Privacy Policy' />
                </div>
                <div className='flex-item' style={{ width: '100%' }}>
                    <Checkbox {...props} pField='marketing' label='I agree to receive marketing communication' />
                </div>
                {<div className='flex-item' style={{ width: '100%', paddingTop: '20px' }}>
                    <button disabled={!props.signalIfValid} onClick={() => {}}>{'Submit'}</button>
                </div>}
            </div>
        </div>
    )
}

export default SignUp

