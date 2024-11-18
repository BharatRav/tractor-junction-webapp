import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Rent = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const rentTractors = [
    {
      id: 1,
      name: 'Mahindra 575 DI XP Plus',
      rate: '₹2,500/day',
      image: 'https://source.unsplash.com/800x600/?tractor,rental',
      specs: {
        power: '47 HP',
        engine: '4 Cylinder',
        availability: 'Immediate',
      },
    },
    {
      id: 2,
      name: 'John Deere 5045D',
      rate: '₹3,000/day',
      image: 'https://source.unsplash.com/800x600/?tractor,agriculture',
      specs: {
        power: '45 HP',
        engine: '3 Cylinder',
        availability: 'Next Week',
      },
    },
    {
      id: 3,
      name: 'Sonalika DI 47 RX',
      rate: '₹2,800/day',
      image: 'https://source.unsplash.com/800x600/?tractor,field',
      specs: {
        power: '50 HP',
        engine: '4 Cylinder',
        availability: 'Immediate',
      },
    },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h3" className="mb-8 text-center">
        Tractor Rental Services
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        className="mb-8"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Rent a Tractor" />
        <Tab label="List Your Tractor for Rent" />
      </Tabs>

      {tabValue === 0 ? (
        <>
          <Typography variant="h5" className="mb-6 text-center">
            Available Tractors for Rent
          </Typography>
          <Grid container spacing={4}>
            {rentTractors.map((tractor) => (
              <Grid item xs={12} md={4} key={tractor.id}>
                <Card className="h-full">
                  <CardMedia
                    component="img"
                    height="200"
                    image={tractor.image}
                    alt={tractor.name}
                    className="h-48 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6" className="mb-2">
                      {tractor.name}
                    </Typography>
                    <Typography variant="h6" color="primary" className="mb-4">
                      {tractor.rate}
                    </Typography>
                    <Grid container spacing={2} className="mb-4">
                      <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">
                          Power
                        </Typography>
                        <Typography variant="body1">{tractor.specs.power}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">
                          Engine
                        </Typography>
                        <Typography variant="body1">{tractor.specs.engine}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">
                          Availability
                        </Typography>
                        <Typography variant="body1">{tractor.specs.availability}</Typography>
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => navigate('/apply/rent')}
                    >
                      Rent Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <div className="text-center py-8">
          <Typography variant="h5" className="mb-4">
            List Your Tractor for Rent
          </Typography>
          <Typography variant="body1" className="mb-6">
            Earn extra income by renting out your tractor when you're not using it.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/apply/rent')}
          >
            List Your Tractor
          </Button>
        </div>
      )}

      {/* Information Section */}
      <div className="bg-gray-100 mt-16 p-8 rounded-lg">
        <Typography variant="h5" className="mb-4 text-center">
          Why Rent with TractorJunction?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-2">
              Flexible Rental Plans
            </Typography>
            <Typography>
              Choose from daily, weekly, or monthly rental plans that suit your needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-2">
              Quality Assured
            </Typography>
            <Typography>
              All tractors are regularly maintained and inspected for optimal performance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="mb-2">
              24/7 Support
            </Typography>
            <Typography>
              Our support team is always available to assist you with any queries.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Rent;
