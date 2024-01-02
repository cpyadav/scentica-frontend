import React from 'react';

export default ({ setActivePanel, activePanel, setActiveStep, leftPanel }) => {
  return (
    <div className="rectangle-parent20">
      {leftPanel.map(d => {
        return (
          <div className={activePanel === d.key ? 'tell-us-about active' : 'tell-us-about'}
            // onClick={() => {
            //     setActiveStep(0);
            //     setActivePanel(d.key);
            // }} 
            key={d.key}><span>{d.label}</span></div>
        )
      })}
    </div>
  )
}
