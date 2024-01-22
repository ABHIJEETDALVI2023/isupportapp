// src/components/FeaturesSection.js
import React from 'react';
import { Typography } from '@mui/material';

const FeaturesSection = () => {
  return (
    <section id="features">
      <div className="features">
        {/* Feature 1 */}
        <div>
          {/* Feature Icon */}
          <Typography variant="h4">Convenient Service</Typography>
          <p>We bring the repair service to your doorstep for maximum convenience.</p>
        </div>
        {/* Feature 2 */}
        <div>
          {/* Feature Icon */}
          <Typography variant="h4">Quality Repairs</Typography>
          <p>Our skilled technicians ensure high-quality repairs using genuine parts.</p>
        </div>
        {/* Feature 3 */}
        <div>
          {/* Feature Icon */}
          <Typography variant="h4">Fast Turnaround</Typography>
          <p>Experience quick and efficient service with our fast turnaround times.</p>
        </div>
      </div>
      {/* Testimonials Section */}
    </section>
  );
};

export default FeaturesSection;
