import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
    >
      <Typography variant="h4">Login Form</Typography>

      <TextField
        required
        id="standard-required"
        label="Enter your email"
        variant="filled"
      />
      <TextField
        required
        id="standard-password-input"
        label="Enter your password"
        type="password"
        variant="filled"
      />
      <Button variant="contained">Login</Button>
      <Typography variant="subtitlé1">If you don't have an account.</Typography>
      <Button href='/' variant="contained">Reigster</Button>
    </Box>
  );
};

export default Login;
