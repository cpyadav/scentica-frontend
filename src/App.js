import React, { useState } from 'react';
import SidePanel from './component/SidePanel';
import './App.css';
import BusinessSteps from './component/BusinessSteps';
import ProductSteps from './component/ProductSteps';
import ConsumerSteps from './component/ConsumerSteps';
import FragranceSteps from './component/FragranceSteps';

const App = () => {
  const [payload, setPayload] = useState({});
  console.log(payload)
  const [activePanel, setActivePanel] = useState(0);

  const showStepsBasedOnPanel = () => {
    switch (activePanel) {
      case 0:
        return <BusinessSteps payload={payload} setPayload={setPayload} />

      case 1:
        return <ProductSteps payload={payload} setPayload={setPayload} />

      case 2:
        return <ConsumerSteps payload={payload} setPayload={setPayload} />
      case 3:
        return <FragranceSteps payload={payload} setPayload={setPayload} />

      default:
        break;
    }
  }

  return (
    <div className='client-briefing-210'>
      <div className='client-briefing-210-child'>
        {showStepsBasedOnPanel()}
      </div>
      <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} />
    </div>
  )
}

export default App

