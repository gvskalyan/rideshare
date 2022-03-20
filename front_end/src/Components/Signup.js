
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Link } from 'react-router-dom';
import Copyright from './Copyright'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import data from './data/Apis'
import SnackBar from "./SnackBar";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState(new Date('2014-08-18T21:11:54'));
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const OpenAlert = (message) => {
    setMessage(message);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formatDate = (date) => {
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/'
        + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const dateFormatted = formatDate(dob);

    const user = `{
      "email": "${email}",
      "password": "${password}",
      "gender": "${gender}",
      "city": "${city}",
      "dob": "${dateFormatted}",
      "name": "${firstName} ${lastName}",
      "phonenumber": "${phonenumber}"
    }`;

    data.signup(user).then(res => {
      OpenAlert("User Registered Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    });
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeProvider theme={theme}>
        <SnackBar open={open} handleClose={handleClose} message={message}/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                    />
                  </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <DesktopDatePicker
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    autoComplete="city"
                  />
                </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    label="Phone number"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                    />
                  </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="reEnterPassword"
                    label="re-enter Password"
                    type="password"
                    id="rpassword"
                    autoComplete="new-password"
                  />                
                </Grid>
              </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 13, mb: 12 }}
                >
                  Sign Up
                </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
