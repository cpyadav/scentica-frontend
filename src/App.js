import React, { useEffect, useState } from 'react';
import SidePanel from './component/SidePanel';
import './App.css';
import BusinessSteps from './component/BusinessSteps';
import ProductSteps from './component/ProductSteps';
import ConsumerSteps from './component/ConsumerSteps';
import FragranceSteps from './component/FragranceSteps';
import ThankYou from './component/ThankYou';

const LEFT_PANEL = [{
  key: 0,
  label: 'Tell us about your Business'
}, {
  key: 1,
  label: 'Tell us about your Product'
}, {
  key: 2,
  label: 'Tell us about your Consumer'
}, {
  key: 3,
  label: 'Tell us about Fragrance'
}]

const App = () => {
  const [payload, setPayload] = useState({});
  const [activePanel, setActivePanel] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [signalIfValid, setSignalIfValid] = useState(false);
  const [disable, setDisable] = useState(false);
  const [leftPanel, setLeftPanel] = useState(LEFT_PANEL);

  useEffect(() => {
    if (activePanel === 4) {
      setDisable(true);
      setLeftPanel([...leftPanel, {
        key: 4,
        label: 'Thankyou 😊'
      }])
    }
  }, [activePanel])

  const showStepsBasedOnPanel = () => {
    switch (activePanel) {
      case 0:
        return <BusinessSteps setActiveStep={setActiveStep} activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />

      case 1:
        return <ProductSteps setActiveStep={setActiveStep} activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />

      case 2:
        return <ConsumerSteps setActiveStep={setActiveStep} activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />
      case 3:
        return <FragranceSteps setActiveStep={setActiveStep} activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />

      case 4:
        return <ThankYou />

      default:
        break;
    }
  }

  return (
    <div className={`client-briefing-210 ${disable ? 'disabled' : ''}`}>
      <div className='client-briefing-210-child'>
        <div className='client-briefing-210-gchild'>
          {showStepsBasedOnPanel()}
          {!disable && <div className='text-center'>
            <button disabled={!signalIfValid} onClick={() => {
              if (signalIfValid) setActiveStep(activeStep + 1)
            }}>{'Next >'}</button>
          </div>}
        </div>
      </div>
      <SidePanel leftPanel={leftPanel} activePanel={activePanel} setActivePanel={setActivePanel} activeStep={activeStep} setActiveStep={setActiveStep} />
    </div>
  )
}

export default App

