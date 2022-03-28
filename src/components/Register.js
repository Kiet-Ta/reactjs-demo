import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Register = () => {
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

      <Typography variant='h4'>Register Form</Typography>

      <TextField
        required
        id="standard-required"
        label="Enter your name"
        variant="filled"
      />
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
      <Button variant="contained">Register</Button>
    </Box>
  );
};

export default Register;
