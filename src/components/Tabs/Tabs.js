import React, { useState } from 'react';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab-inventory');

  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === 'tab-inventory' ? 'active' : ''}`}
        onClick={() => setActiveTab('tab-inventory')}
      >
        My Inventory
      </button>

      <button
        className={`tab ${activeTab === 'tab-company' ? 'active' : ''}`}
        onClick={() => setActiveTab('tab-company')}
      >
        Company Profile
      </button>

      <button
        className={`tab ${activeTab === 'tab-users' ? 'active' : ''}`}
        onClick={() => setActiveTab('tab-users')}
      >
        All Users
      </button>

      <button
        className={`tab ${activeTab === 'tab-account' ? 'active' : ''}`}
        onClick={() => setActiveTab('tab-account')}
      >
        My Account
      </button>
    </div>
  );
}

export default Tabs;
