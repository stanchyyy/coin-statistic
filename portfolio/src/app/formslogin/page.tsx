'use client'
import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormLabel, Stack, styled, TextField, Typography } from "@mui/material";
import React from "react";
import ForgotPassword from "../components/forgotPassword";
import Link from 'next/link'

export default function Page(){
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);




    const SignInContainer = styled(Stack)(({ theme }) => ({
        width: '50%',
        margin: "auto",
        position: 'relative',
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          zIndex: -1,
          top: 0,  
          left: 0, 
          width: '100%',  
          height: '100%', 
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', 
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
          }),
        },
      }));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

    const handleClickOpen = ()=>{
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const validateInputs = () => {
      const email = document.getElementById('email') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;
  
      let isValid = true;
  
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        setEmailError(true);
        setEmailErrorMessage('Please enter a valid email address.');
        isValid = false;
      } else {
        setEmailError(false);
        setEmailErrorMessage('');
      }
  
      if (!password.value || password.value.length < 1) {
        setPasswordError(true);
        setPasswordErrorMessage('Password must be at least 1 character long.');
        isValid = false;
      } else {
        setPasswordError(false);
        setPasswordErrorMessage('');
      }
  
      return isValid;
    };

    return (
        <Box  >
        <h1>Hello from form login. Try signing in with a user you created or use <samp>admin@admin.com|admin</samp>.</h1>
        <SignInContainer direction="column" justifyContent="space-between" sx={{
            marginTop:'5vh'
        }}>
        <Card variant="outlined"
        sx={{
            padding: '1vh'
        }}>
            <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%',  marginBottom:'1vh' }}
          >
            Sign in
            </Typography>
            <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'secondary'}
                sx={{ ariaLabel: 'email' }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'secondary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"

              variant="contained"
              color="secondary"
            fullWidth
              onClick={validateInputs}
            >
              Sign in
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignSelf:"center" }}>
                <Typography
                component="button"

                sx={{ alignSelf: 'baseline', color:"text.secondary" }}
                color={'secondary'}>
                <Link
                  href={""}
                  onClick={handleClickOpen}
                >
                  Forgot your password?
                </Link>
                </Typography>
              </Box>
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <span>
              <Typography
                variant="body2"
                sx={{ alignSelf: 'center', color:'text.secondary'}}>
                <Link
                 href='/formsregister'
                  color={'secondary'}
                >
                  Sign up
                </Link>
                </Typography>
              </span>
            </Typography>
          </Box>
            </Card>
        </SignInContainer>
        </Box>
    )
}