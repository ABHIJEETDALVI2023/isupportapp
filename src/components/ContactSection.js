// src/components/ContactSection.js
import React from 'react';
import { Button } from '@mui/material';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          {/* Input fields for phone number, device model, and message */}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        {/* Call-to-Action to call a specific number */}
      </div>
    </section>
  );
};

export default ContactSection;
