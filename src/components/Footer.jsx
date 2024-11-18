import { Container, Typography, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="mb-4">
              TractorJunction
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              Your one-stop destination for all tractor-related needs. Buy, sell, or rent tractors with ease.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="mb-4">
              Quick Links
            </Typography>
            <div className="space-y-2">
              <div>
                <Link href="/buy" className="text-gray-300 hover:text-white">
                  Buy Tractor
                </Link>
              </div>
              <div>
                <Link href="/sell" className="text-gray-300 hover:text-white">
                  Sell Tractor
                </Link>
              </div>
              <div>
                <Link href="/rent" className="text-gray-300 hover:text-white">
                  Rent Tractor
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="mb-4">
              Connect With Us
            </Typography>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <LinkedInIcon />
              </Link>
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2" className="text-center mt-8 text-gray-400">
          © {new Date().getFullYear()} TractorJunction. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
