import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Sell = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <MonetizationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Best Price',
      description: 'Get the best price for your tractor through our vast network of buyers.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Wide Reach',
      description: 'Connect with thousands of potential buyers across the country.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Transactions',
      description: 'Our platform ensures safe and secure transactions for sellers.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: 'Dedicated Support',
      description: 'Get assistance from our expert team throughout the selling process.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className="mb-4">
                Sell Your Tractor
              </Typography>
              <Typography variant="h5" className="mb-6">
                Get the Best Value for Your Tractor with TractorJunction
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/apply/sell')}
              >
                List Your Tractor
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://source.unsplash.com/800x600/?tractor,selling"
                alt="Sell Tractor"
                className="rounded-lg shadow-lg w-full"
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Benefits Section */}
      <Container maxWidth="lg" className="py-16">
        <Typography variant="h3" className="text-center mb-12">
          Why Sell with Us?
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <Typography variant="h6" className="mb-2">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <Container maxWidth="md" className="text-center">
          <Typography variant="h4" className="mb-4">
            Ready to Sell Your Tractor?
          </Typography>
          <Typography variant="body1" className="mb-6">
            Fill out our simple form and our team will contact you shortly to guide you through the
            process.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/apply/sell')}
          >
            Get Started Now
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Sell;
