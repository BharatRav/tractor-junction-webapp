import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Buy Tractor',
      description: 'Browse our wide selection of tractors and find the perfect match for your needs.',
      icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
      path: '/buy',
    },
    {
      title: 'Sell Tractor',
      description: 'List your tractor for sale and reach thousands of potential buyers.',
      icon: <SellIcon sx={{ fontSize: 40 }} />,
      path: '/sell',
    },
    {
      title: 'Rent Tractor',
      description: 'Rent a tractor for your temporary needs or list your tractor for rent.',
      icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
      path: '/rent',
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
                Welcome to TractorJunction
              </Typography>
              <Typography variant="h5" className="mb-6">
                Your One-Stop Destination for All Tractor Needs
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/buy')}
              >
                Explore Tractors
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://source.unsplash.com/800x600/?tractor"
                alt="Tractor"
                className="rounded-lg shadow-lg w-full"
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Services Section */}
      <Container maxWidth="lg" className="py-16">
        <Typography variant="h3" className="text-center mb-12">
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className="h-full hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate(service.path)}
              >
                <CardContent className="text-center p-6">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <Typography variant="h5" className="mb-4">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center mb-12">
            Why Choose TractorJunction?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="mb-3">
                Extensive Selection
              </Typography>
              <Typography>
                Access to a wide range of tractors from top manufacturers.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="mb-3">
                Verified Sellers
              </Typography>
              <Typography>
                All our sellers are verified to ensure safe and secure transactions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="mb-3">
                Expert Support
              </Typography>
              <Typography>
                Our team of experts is always ready to assist you with your queries.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
