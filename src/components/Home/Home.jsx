import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from 'redux/auth/useAuth';
import { toast } from 'react-toastify';
import background from '../../images/social-media-g942e7eb9e_1920.png';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      // alert('Please login or register');
      toast.info('Please login or register');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Button variant="contained" onClick={handleButtonClick}>
        Get started
      </Button>
    </div>
  );
};

export default Home;
