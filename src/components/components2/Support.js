import React, { useState } from 'react';
import './Support.css';
import { Box, Typography, TextField, Button, Collapse, Card, CardContent } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Support() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <Box className="support-container" sx={{ padding: 3, backgroundColor: '#e4ef81', borderRadius: 2 }}>
      <Typography variant="h4" className="support-title" sx={{ textAlign: 'center', marginBottom: 4, color: '#333' }}>
        Support
      </Typography>

      <Box className="support-section" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Button
          className="faq-button"
          variant="contained"
          color="primary"
          onClick={() => setShowFAQ(!showFAQ)}
          sx={{ marginBottom: 2, transition: '0.3s' }}
        >
          <FaQuestionCircle style={{ marginRight: 8 }} />
          {showFAQ ? 'Hide FAQs' : 'Show FAQs'}
          {showFAQ ? <FaChevronUp style={{ marginLeft: 8 }} /> : <FaChevronDown style={{ marginLeft: 8 }} />}
        </Button>

        <Collapse in={showFAQ}>
          <Card className="faq-card" sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Frequently Asked Questions
              </Typography>
              <Typography variant="body2">
                <strong>Q:</strong> How do I reset my password?<br />
                <strong>A:</strong> You can reset your password in the account settings.<br /><br />
                <strong>Q:</strong> Where do I find the onboarding materials?<br />
                <strong>A:</strong> The onboarding materials are available under the Resources section.
              </Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Box>

      <Box className="support-section" sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Button
          className="contact-button"
          variant="contained"
          color="secondary"
          onClick={() => setShowContact(!showContact)}
          sx={{ marginBottom: 2, transition: '0.3s' }}
        >
          <FaPhoneAlt style={{ marginRight: 8 }} />
          {showContact ? 'Hide Contact Information' : 'Show Contact Information'}
          {showContact ? <FaChevronUp style={{ marginLeft: 8 }} /> : <FaChevronDown style={{ marginLeft: 8 }} />}
        </Button>

        <Collapse in={showContact}>
          <Card className="contact-card" sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2">
                <FaPhoneAlt /> <strong>Phone:</strong> (123) 456-7890<br />
                <FaEnvelope /> <strong>Email:</strong> support@company.com<br />
              </Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Box>

      <Box className="support-section live-chat" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Still need help? Try our live chat:
        </Typography>
        <Button variant="contained" color="success" className="chat-button">
          Start Live Chat
        </Button>
      </Box>
    </Box>
  );
}
