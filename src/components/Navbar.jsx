import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className="justify-between">
          <Link to="/" className="flex items-center text-white no-underline">
            <AgricultureIcon className="mr-2" />
            <Typography variant="h6" component="div">
              TractorJunction
            </Typography>
          </Link>
          <div className="space-x-4">
            <Button color="inherit" component={Link} to="/buy">
              Buy
            </Button>
            <Button color="inherit" component={Link} to="/sell">
              Sell
            </Button>
            <Button color="inherit" component={Link} to="/rent">
              Rent
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
