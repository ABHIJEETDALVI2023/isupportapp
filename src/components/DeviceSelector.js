// src/components/DeviceSelector.js
import React, { useState } from 'react';

const DeviceSelector = ({ onSelectDevice }) => {
  const devices = ['iPhone', 'MacBook', 'iWatch', 'iPad'];
  const [selectedDevice, setSelectedDevice] = useState('');

  const handleDeviceChange = (device) => {
    setSelectedDevice(device);
    onSelectDevice(device);
  };

  return (
    <div>
      <h2>Select Device:</h2>
      <ul>
        {devices.map((device) => (
          <li key={device} onClick={() => handleDeviceChange(device)}>
            {device}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceSelector;
