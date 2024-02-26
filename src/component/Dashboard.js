import React, { useEffect, useReducer } from 'react';
import SidePanel from '../component/SidePanel';
import '../App.css';
import BusinessSteps from '../component/BusinessSteps';
import ProductSteps from '../component/ProductSteps';
import ConsumerSteps from '../component/ConsumerSteps';
import FragranceSteps from '../component/FragranceSteps';
import ThankYou from '../component/ThankYou';
import useApi from '../component/Utilities/service';
import { BASE_URL } from '../component/Utilities/constant';
import Loader from '../component/Common/Loader';
import { LogoutOutlined } from '@ant-design/icons';
import { isNotNullOrUndefined, isNotEmptyArray } from '../component/Utilities/validation';

import {LEFT_PANEL} from './Utilities/constant'

const initialPayload = {
    "company_name": null,
    "industry": null,
    "brand_vision": null,
    "name": null,
    "category": [],
    "type": [],
    "packaging": [],
    "size": null,
    "formate": [],
    "market": null,
    "price": null,
    "web_link": null,
    "age_gp": null,
    "gender": null,
    "tg_user_occup": null,
    "smell": [],
    "oflactive_dir": [],
    "ingredients": [],
    "emotions": [],
    "colors": [],
    "dosage": [],
    "price_range": [],
    "ref_link": null
};
const initialLeftPanel = [...LEFT_PANEL];

// Define action types
const SET_PAYLOAD = 'SET_PAYLOAD';
const SET_ACTIVE_PANEL = 'SET_ACTIVE_PANEL';
const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP';
const SET_SIGNAL_IF_VALID = 'SET_SIGNAL_IF_VALID';
const SET_DISABLE = 'SET_DISABLE';
const SET_LEFT_PANEL = 'SET_LEFT_PANEL';
const SET_FORM_STATUS = 'SET_FORM_STATUS';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_PAYLOAD:
            return { ...state, payload: action.payload };
        case SET_ACTIVE_PANEL:
            return { ...state, activePanel: action.activePanel };
        case SET_ACTIVE_STEP:
            return { ...state, activeStep: action.activeStep };
        case SET_SIGNAL_IF_VALID:
            return { ...state, signalIfValid: action.signalIfValid };
        case SET_DISABLE:
            return { ...state, disable: action.disable };
        case SET_LEFT_PANEL:
            return { ...state, leftPanel: action.leftPanel };
        case SET_FORM_STATUS:
            return { ...state, formComplete: action.formComplete }
        default:
            return state;
    }
};

const Dashboard = (props) => {
    // useReducer hook
    const [state, dispatch] = useReducer(reducer, {
        payload: initialPayload,
        activePanel: 0,
        activeStep: 0,
        signalIfValid: false,
        disable: false,
        leftPanel: initialLeftPanel,
        formComplete: false
    });

    // Destructuring state for easier use
    const { payload, activePanel, activeStep, signalIfValid, disable, leftPanel, formComplete } = state;

    const { data, loading, setConfig } = useApi();

    const showStepsBasedOnPanel = () => {
        switch (activePanel) {
            case 0:
                return (
                    <BusinessSteps
                        setActiveStep={(step) => dispatch({ type: SET_ACTIVE_STEP, activeStep: step })}
                        activePanel={activePanel}
                        setActivePanel={(panel) => dispatch({ type: SET_ACTIVE_PANEL, activePanel: panel })}
                        setSignalIfValid={(valid) => dispatch({ type: SET_SIGNAL_IF_VALID, signalIfValid: valid })}
                        activeStep={activeStep}
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                    />
                );

            case 1:
                return (
                    <ProductSteps
                        setActiveStep={(step) => dispatch({ type: SET_ACTIVE_STEP, activeStep: step })}
                        activePanel={activePanel}
                        setActivePanel={(panel) => dispatch({ type: SET_ACTIVE_PANEL, activePanel: panel })}
                        setSignalIfValid={(valid) => dispatch({ type: SET_SIGNAL_IF_VALID, signalIfValid: valid })}
                        activeStep={activeStep}
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                    />
                );

            case 2:
                return (
                    <ConsumerSteps
                        setActiveStep={(step) => dispatch({ type: SET_ACTIVE_STEP, activeStep: step })}
                        activePanel={activePanel}
                        setActivePanel={(panel) => dispatch({ type: SET_ACTIVE_PANEL, activePanel: panel })}
                        setSignalIfValid={(valid) => dispatch({ type: SET_SIGNAL_IF_VALID, signalIfValid: valid })}
                        activeStep={activeStep}
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                    />
                );
            case 3:
                return (
                    <FragranceSteps
                        setActiveStep={(step) => dispatch({ type: SET_ACTIVE_STEP, activeStep: step })}
                        activePanel={activePanel}
                        setActivePanel={(panel) => dispatch({ type: SET_ACTIVE_PANEL, activePanel: panel })}
                        setSignalIfValid={(valid) => dispatch({ type: SET_SIGNAL_IF_VALID, signalIfValid: valid })}
                        activeStep={activeStep}
                        payload={payload}
                        setPayload={(newPayload) => dispatch({ type: SET_PAYLOAD, payload: newPayload })}
                    />
                );

            default:
                break;
        }
    };

    const onFormSubmit = () => {
            dispatch({ type: SET_DISABLE, disable: true });
            const config = {
                method: 'post',
                url: `${BASE_URL}save_client_briefing`,
                data: payload
                // You can include other Axios configuration options here
            };
            setConfig(config);
    }

    useEffect(() => {
        const allValuesValid = Object.keys(initialPayload).every(value => {
            if (Array.isArray(payload[value])) {
                return isNotEmptyArray(payload[value]);
            } else {
                return isNotNullOrUndefined(payload[value]);
            }
        });

        if(allValuesValid) {
            dispatch({ type: SET_FORM_STATUS, formComplete: true })
        }


    }, [payload]);

    useEffect(() => {
        if (data && data.success) {
            dispatch({ type: SET_LEFT_PANEL, leftPanel: [...leftPanel, { key: 4, label: 'Thank you 😊' }] });
        }
    }, [data]);

    return (
        <div className={`client-briefing-210 ${disable ? 'disabled' : ''}`}>
            <span className='logout' onClick={() => {
                localStorage.removeItem('token');
                props.setToken()
            }}>
                Logout 
                <LogoutOutlined />
            </span>
            {loading && <Loader />}
            <div className='client-briefing-210-child'>
                <div className='client-briefing-210-gchild'>
                    {data && data.success ? <ThankYou /> : showStepsBasedOnPanel()}
                    {!disable && (
                        <div className='text-center' style={{ width: '100%', paddingTop: '20px' }}>
                            {
                                (activeStep === 7 && activePanel === 3) ? 
                                <button
                                    disabled={!formComplete}
                                    onClick={() => {
                                        onFormSubmit()
                                    }}
                                >
                                    {'Submit >'}
                                </button> :
                                    <button
                                    disabled={!signalIfValid}
                                    onClick={() => {
                                        if (signalIfValid) dispatch({ type: SET_ACTIVE_STEP, activeStep: activeStep + 1 });
                                    }}
                                >
                                    {'Next >'}
                                </button>

                            }
                        </div>
                    )}
                </div>
            </div>
            <SidePanel leftPanel={leftPanel} activePanel={activePanel} setActivePanel={(panel) => dispatch({ type: SET_ACTIVE_PANEL, activePanel: panel })} activeStep={activeStep} setActiveStep={(step) => dispatch({ type: SET_ACTIVE_STEP, activeStep: step })} />
        </div>
    );
};

export default Dashboard;
