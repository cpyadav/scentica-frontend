import React from 'react';

export default ({setActivePanel, activePanel, setActiveStep, leftPanel}) => {
  return (
    <div className="rectangle-parent20">
        {leftPanel.map(d => {
            return(
                <div onClick={() => {
                    setActiveStep(0);
                    setActivePanel(d.key);
                }} key={d.key} className='tell-us-about'><span className={activePanel === d.key ? 'active' : ''}>{d.label}</span></div>
            )
        })}
      </div>
  )
}
