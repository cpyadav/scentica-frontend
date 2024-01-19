import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import Text from './Common/Text';
import Logo from '../images/MicrosoftTeams-image (3).png'
import Checkbox from './Common/Checkbox';
import Loader from './Common/Loader';
import { BASE_URL, COUNTRY_CODES } from './Utilities/constant';
import useApi from './Utilities/service';
import Dropdown from './Common/Dropdown';

const initialObject = {
    "firstname": null,
    "lastname": null,
    "email": null,
    "jobtitle": null,
    "phone": null,
    "country": null,
    "companyname": null,
    "term_accepted": null,
    "account_approved": null,
    "password": null
};

const initialState = {
    payload: initialObject,
    signalIfValid: false,
    isActive: false
};

// Define action types
const SET_PAYLOAD = 'SET_PAYLOAD';
const SET_SIGNAL = 'SET_SIGNAL';
const SET_IS_ACTIVE = 'SET_IS_ACTIVE';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_PAYLOAD:
            return { ...state, payload: action.payload };
        case SET_SIGNAL:
            return { ...state, signalIfValid: action.signalIfValid };
        case SET_IS_ACTIVE:
            return { ...state, isActive: action.isActive };
        default:
            return state;
    }
};

const SignUp = (props) => {
    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // Destructuring state for easier use
    const { payload, signalIfValid, isActive } = state;

    useEffect(() => {
        if (Object.values(payload).every((v) => v)) {
            dispatch({ type: SET_IS_ACTIVE, isActive: true });
        }
    }, [payload]);

    const config = {
        method: 'post',
        url: `${BASE_URL}signup`,
        data: payload
        // You can include other Axios configuration options here
    };
    const { data, loading, setConfig } = useApi();
    if (data && data.success) {
        localStorage.setItem('token', data.data.access_token);
        props.setToken(data.data.access_token)
    }

    const signUp = () => {
        setConfig(config);
    };

    return (
        <div className='grid-container'>
            {loading && <Loader />}
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
                    <Text
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='firstname' title='Name' label='First Name' placeholder='First Name' />
                </div>
                <div className='flex-item'>
                    <Text
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='lastname' title='Name' label='Last Name' placeholder='Last Name' />
                </div>
                <div className='flex-item'>
                    <Text type={'email'}
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='email' title='Name' label='Work email address' placeholder='Your Email' />
                </div>
                <div className='flex-item'>
                    <Text
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='jobtitle' title='Name' label='Job title' placeholder='Your Title' />
                </div>
                <div className='flex-item'>
                    <Text type={'number'}
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='phone' title='Name' label='Phone Number' placeholder='With country code' />
                </div>
                <div className='flex-item'>

                    <Dropdown fields={COUNTRY_CODES} payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='country' title='Name' label='Country' placeholder='Select Country' />
                </div>
                <div className='flex-item'>
                    <Text
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='companyname' title='Name' label='Company Name' placeholder='Your Company Name' />
                </div>
                <div className='flex-item'>
                    <Text
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='password' title='Name' label='Password' placeholder='Your Password' type={'password'} />
                </div>
                <div className='flex-item' style={{ width: '100%', paddingTop: '50px' }}>
                    <Checkbox
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='term_accepted' label='I agree to the Terms of Use and Privacy Policy' />
                </div>
                <div className='flex-item' style={{ width: '100%' }}>
                    <Checkbox
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                        setSignalIfValid={(newSignal) => dispatch({ type: SET_SIGNAL, signalIfValid: newSignal })}
                        pField='account_approved' label='I agree to receive marketing communication' />
                </div>
                {<div className='flex-item' style={{ width: '100%', paddingTop: '20px' }}>
                    <div className='log-sign-in'>
                        <button disabled={!isActive} onClick={() => { signUp() }}>{'Submit'}</button>
                        <Link to='/login'>{'Log In'}</Link>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default SignUp

