// src/components/ProblemSelector.js
import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const ProblemSelector = ({ selectedDevice, onSelectProblem }) => {
  const getProblemsForDevice = (device) => {
    switch (device) {
      case 'iPhone':
        return ['Screen Repair', 'Battery Replacement', 'Software Issue'];
      case 'MacBook':
        return ['Battery Issues', 'Keyboard Replacement', 'Software Problems'];
      case 'iWatch':
        return ['Screen Replacement', 'Battery Replacement', 'Connection Issues'];
      case 'iPad':
        return ['Software Repair', 'Screen Blackout', 'Charging Problems'];
      default:
        return [];
    }
  };

  const problems = getProblemsForDevice(selectedDevice);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Select Problem:
      </Typography>
      <List>
        {problems.map((problem) => (
          <ListItem key={problem} button onClick={() => onSelectProblem(problem)}>
            {problem}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ProblemSelector;
