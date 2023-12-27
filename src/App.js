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
        return <BusinessSteps activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />

      case 1:
        return <ProductSteps activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />

      case 2:
        return <ConsumerSteps activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />
      case 3:
        return <FragranceSteps activePanel={activePanel} setActivePanel={setActivePanel} setSignalIfValid={setSignalIfValid} activeStep={activeStep} payload={payload} setPayload={setPayload} />

      default:
        break;
    }
  }

  return (
    <div className='client-briefing-210'>
      <div className='client-briefing-210-child'>
        {showStepsBasedOnPanel()}
        <div className='text-center'>
            <button onClick={() => {
              if(signalIfValid) setActiveStep(activeStep + 1)
            }}>{'Test >'}</button>
        </div>
      </div>
      <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} activeStep={activeStep} setActiveStep={setActiveStep}/>
    </div>
  )
}

export default App

