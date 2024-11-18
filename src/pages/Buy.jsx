import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
  const navigate = useNavigate();

  const tractors = [
    {
      id: 1,
      name: 'Mahindra 575 DI XP Plus',
      price: '₹7,50,000',
      image: 'https://source.unsplash.com/800x600/?tractor,mahindra',
      specs: {
        power: '47 HP',
        engine: '4 Cylinder',
        transmission: '8 Forward + 2 Reverse',
      },
    },
    {
      id: 2,
      name: 'John Deere 5045D',
      price: '₹8,25,000',
      image: 'https://source.unsplash.com/800x600/?tractor,johndeere',
      specs: {
        power: '45 HP',
        engine: '3 Cylinder',
        transmission: '8 Forward + 4 Reverse',
      },
    },
    {
      id: 3,
      name: 'Sonalika DI 47 RX',
      price: '₹6,75,000',
      image: 'https://source.unsplash.com/800x600/?tractor,farm',
      specs: {
        power: '50 HP',
        engine: '4 Cylinder',
        transmission: '10 Forward + 2 Reverse',
      },
    },
    {
      id: 4,
      name: 'New Holland 3600-2',
      price: '₹7,25,000',
      image: 'https://source.unsplash.com/800x600/?tractor,newholland',
      specs: {
        power: '55 HP',
        engine: '3 Cylinder',
        transmission: '8 Forward + 2 Reverse',
      },
    },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h3" className="mb-8 text-center">
        Available Tractors
      </Typography>
      <Grid container spacing={4}>
        {tractors.map((tractor) => (
          <Grid item xs={12} md={6} key={tractor.id}>
            <Card className="h-full">
              <CardMedia
                component="img"
                height="300"
                image={tractor.image}
                alt={tractor.name}
                className="h-64 object-cover"
              />
              <CardContent>
                <Typography variant="h5" className="mb-2">
                  {tractor.name}
                </Typography>
                <Typography variant="h6" color="primary" className="mb-4">
                  {tractor.price}
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
                      Transmission
                    </Typography>
                    <Typography variant="body1">{tractor.specs.transmission}</Typography>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate('/apply/buy')}
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Buy;
