import React, { useState } from 'react';
import './course.css';

const ScrollbarMenu = () => {
  const [activeTab, setActiveTab] = useState(1);

  const content = {
    1: (
      <ul>
        <li>What is a Fixed or Prime Lens?</li>
        <li>What is a Zoom Lens?</li>
        <li>Lenses I Have, Lenses I Want</li>
        <li>Gear Quiz</li>
      </ul>
    ),
    2: (
      <ul>
        <li>Understanding Exposure</li>
        <li>Manual vs Automatic Exposure</li>
        <li>Exposure Compensation</li>
        <li>Quiz on Exposure</li>
      </ul>
    ),
    3: (
      <ul>
        <li>Camera Settings Overview</li>
        <li>How to Set ISO</li>
        <li>Shutter Speed Guide</li>
        <li>Settings Quiz</li>
      </ul>
    ),
    4: (
      <ul>
        <li>How to Focus Your Camera</li>
        <li>Autofocus vs Manual Focus</li>
        <li>Focus Modes</li>
        <li>Focusing Quiz</li>
      </ul>
    ),
    5: (
      <ul>
        <li>Framing Techniques</li>
        <li>Using the Rule of Thirds</li>
        <li>Framing in Portrait Photography</li>
        <li>Framing Quiz</li>
      </ul>
    ),
    6: (
      <ul>
        <li>Lighting Techniques</li>
        <li>Natural vs Artificial Light</li>
        <li>Studio Lighting Basics</li>
        <li>Lighting Quiz</li>
      </ul>
    ),
    7: (
      <ul>
        <li>Types of Filters</li>
        <li>How to Use ND Filters</li>
        <li>Polarizing Filters for Landscapes</li>
        <li>Filters Quiz</li>
      </ul>
    )
  };

  return (
    <div className="scrollbar-container">
      <div className="scroll-menu">
        <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>1 Gear</button>
        <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>2 Exposure</button>
        <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'active' : ''}>3 Settings</button>
        <button onClick={() => setActiveTab(4)} className={activeTab === 4 ? 'active' : ''}>4 Focusing</button>
        <button onClick={() => setActiveTab(5)} className={activeTab === 5 ? 'active' : ''}>5 Framing</button>
        <button onClick={() => setActiveTab(6)} className={activeTab === 6 ? 'active' : ''}>6 Lighting</button>
        <button onClick={() => setActiveTab(7)} className={activeTab === 7 ? 'active' : ''}>7 Filters</button>
      </div>
      <div className="contentt">
        {content[activeTab]}
      </div>
    </div>
  );
};

export default ScrollbarMenu;
