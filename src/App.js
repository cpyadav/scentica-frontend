import React, { useState } from 'react';
import SidePanel from './component/SidePanel';
import './App.css';
import BusinessSteps from './component/BusinessSteps';
import ProductSteps from './component/ProductSteps';
import ConsumerSteps from './component/ConsumerSteps';
import FragranceSteps from './component/FragranceSteps';

const App = () => {
  const [payload, setPayload] = useState({});
  const [activePanel, setActivePanel] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [signalIfValid, setSignalIfValid] = useState(false);

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

      default:
        break;
    }
  }

  return (
    <div className='client-briefing-210'>
      <div className='client-briefing-210-child'>
        <div className='client-briefing-210-gchild'>
          {showStepsBasedOnPanel()}
          <div className='text-center'>
              <button disabled={!signalIfValid} onClick={() => {
                if(signalIfValid) setActiveStep(activeStep + 1)
              }}>{'Next >'}</button>
          </div>
        </div>
      </div>
      <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} activeStep={activeStep} setActiveStep={setActiveStep}/>
    </div>
  )
}

export default App

