// src/components/ModelSelector.js
import React from 'react';
import { Button, List, ListItem, Typography } from '@mui/material';

const ModelSelector = ({ selectedDevice, onSelectModel }) => {
  const getModelsForDevice = (device) => {
    switch (device) {
      case 'iPhone':
        return ['iPhone 11', 'iPhone 12', 'iPhone 13'];
      case 'MacBook':
        return ['MacBook Air', 'MacBook Pro'];
      case 'iWatch':
        return ['Apple Watch 3', 'Apple Watch 4', 'Apple Watch 5'];
      case 'iPad':
        return ['iPad', 'iPad Pro Max'];
      default:
        return [];
    }
  };

  const models = getModelsForDevice(selectedDevice);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Select Model for {selectedDevice}:
      </Typography>
      <List>
        {models.map((model) => (
          <ListItem key={model} button onClick={() => onSelectModel(model)}>
            {model}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ModelSelector;
