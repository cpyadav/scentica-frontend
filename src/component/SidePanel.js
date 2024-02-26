import React from 'react';
import Logo from '../images/MicrosoftTeams-image (3).png'

export default ({ activePanel, leftPanel, setActiveStep, setActivePanel }) => {
  return (
    <div className="rectangle-parent20">
      <div className='header grid-item'>
        <img className='logo' src={Logo} />
        </div>
      {leftPanel.map(d => {
        return (
          <div className={activePanel === d.key ? 'tell-us-about active' : 'tell-us-about'}
            onClick={() => {
                setActiveStep(0);
                setActivePanel(d.key);
            }} 
            key={d.key}><span>{d.label}</span></div>
        )
      })}
    </div>
  )
}
