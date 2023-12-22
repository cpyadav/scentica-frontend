import React from 'react';

const LEFT_PANEL = [{
    key:0,
    label: 'Tell us about your Business'
},{
    key:1,
    label: 'Tell us about your Product'
},{
    key:2,
    label: 'Tell us about your Consumer'
},{
    key:3,
    label: 'Tell us about Fragrance'
}]

export default ({setActivePanel, activePanel}) => {
  return (
    <div className="rectangle-parent20">
        {LEFT_PANEL.map(d => {
            return(
                <div onClick={() => setActivePanel(d.key)} key={d.key} className='tell-us-about'><span className={activePanel === d.key ? 'active' : ''}>{d.label}</span></div>
            )
        })}
      </div>
  )
}
