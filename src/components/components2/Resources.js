import React from 'react';
import './Resources.css';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { FaBook, FaVideo, FaFileAlt, FaQuestionCircle, FaPhone } from 'react-icons/fa';
import './Handbook';
import { useNavigate } from 'react-router-dom';

export default function Resources() {
  const navigate=useNavigate();
  const goToHandbook = () => {
    navigate('/handbook');
  };
  const goToFaq = () => {
    navigate('/faqpage');
  };


  
  return (
    <Box className="resources-container" sx={{ padding: 3, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
        Resources
      </Typography>

      <Grid container spacing={4}>
        {/* Company Handbook */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#ffebee', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaBook style={{ marginRight: 8 }} /> Company Handbook
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                Learn about the company policies, culture, and standards to help you adjust to the workplace.
              </Typography>
              <Button onClick={goToHandbook} variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Download Handbook
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Training Videos */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#e8f5e9', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaVideo style={{ marginRight: 8 }} /> Training Videos
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                Watch instructional videos that cover everything from basic tasks to advanced procedures.
              </Typography>
              <Button href="/livestreaming" variant="contained" color="secondary" sx={{ marginTop: 2 }}>
                Watch Videos
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Document Templates */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#fff3e0', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaFileAlt style={{ marginRight: 8 }} /> Document Templates
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                Access templates for reports, presentations, and other documents to streamline your work.
              </Typography>
              <Button href="/document-templates" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Download Templates
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* FAQs */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#e3f2fd', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaQuestionCircle style={{ marginRight: 8 }} /> FAQs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                Got a question? Check out our frequently asked questions section for quick answers.
              </Typography>
              <Button onClick={goToFaq} variant="contained" color="secondary" sx={{ marginTop: 2 }}>
                View FAQs
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Support and Contact Information */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#ffe0b2', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaPhone style={{ marginRight: 8 }} /> Support &amp; Contact Information
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                Need help? Reach out to our support team for any questions or issues you may have.
              </Typography>
              <Button href="/support" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Other Resources */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#c5cae9', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                Other Resources
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                Access additional resources such as company policies, tools, and more.
              </Typography>
              <Button href="/other-resources" variant="contained" color="secondary" sx={{ marginTop: 2 }}>
                Explore More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
