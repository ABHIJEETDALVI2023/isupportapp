import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';
import DeviceSelector from './components/DeviceSelector';
import ModelSelector from './components/ModelSelector';
import ProblemSelector from './components/ProblemSelector';
import ContactForm from './components/ContactForm';
import './style.css';
import repairglass from './repairglass.jpg'

function App() {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [step, setStep] = useState(1);

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setStep(2);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setStep(3);
  };

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
    setStep(4);
  };

  const handleSubmit = (userData) => {
    // Handle submitting user data (e.g., send to backend or external service)
    console.log('User Data:', userData);
    // You can implement the logic to send data to the owner's number or a server here
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <HeroSection />

    <div>
    <img src={repairglass} alt="Mobile Repair Image" />
    </div>

      {/* Device Selection Steps */}
      <div className="grid-container">
        <h1></h1>
        {step === 1 && <DeviceSelector onSelectDevice={handleDeviceSelect} />}
        {step === 2 && (
          <ModelSelector selectedDevice={selectedDevice} onSelectModel={handleModelSelect} />
        )}
        {step === 3 && (
          <ProblemSelector
            selectedDevice={selectedDevice}
            onSelectProblem={handleProblemSelect}
          />
        )}
        {step === 4 && (
          <ContactForm
            selectedDevice={selectedDevice}
            selectedModel={selectedModel}
            selectedProblem={selectedProblem}
            onSubmit={handleSubmit}
          />
          
        )}
        
      </div>
      {/* How It Works Section */}
      <HowItWorksSection />
   
      {/* Features Section */}
      <FeaturesSection />
        {/* Contact Section */}
        <ContactSection />
    </div>
  );
}

export default App;
