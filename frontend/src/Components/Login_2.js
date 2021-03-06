// import React
import React, {useState} from 'react';
// import MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import data from './data/Apis'
// import component
import gettingin from "./assets/gettingin.jpg"
import styled from "styled-components"
import Copyright from './Copyright'
import {setAccessToken, setUserDetails} from "./session/SessionHandler";
import NavBar_Login from "./NavBar_Login";


const theme = createTheme();

function Login() {
  const navigate = useNavigate();
  //  create a local state to capture the Username and Password.
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const OpenAlert = (message) => {
    setMessage(message);
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = `{
      "email":"${email}",
      "password":"${password}"
    }`
    data.login(token).then(res => {
      OpenAlert("Login Successfully");
      setAccessToken(res.token);
      data.getUser().then(response => {
        setUserDetails(response);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      })
    });
  }

  return (
      
      <div>
        <NavBar_Login />
        <Section id="hero">
        <div className = "background">
          <img src={gettingin} />
        </div>
        <div className="content">
        <br/>
        <ThemeProvider theme={theme}>
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
                Please Sign in for Access
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2" color="inherit">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
        </div>
        </Section>
      </div>
  );
}

export default Login;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .background {
    img {
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: white;
  }
`;

const styles = theme => ({
  multilineColor:{
      color:'red'
  }
});