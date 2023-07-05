/* eslint-disable react/no-unescaped-entities */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import showAnimation from "../../../assets/Animation/login.json";
import instructorImg from "../../../assets/img/guardian.png";
import studentImg from "../../../assets/img/tutor.png";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="pt-20 flex justify-center items-center bg-gray-100/50 pb-4">
      <div>
        <Lottie animationData={showAnimation} loop={true} className="w-10/12" />
      </div>
      <div>
        <div className="option flex justify-around">
          <button className="px-4 py-2 border-2 border-blue-500/70 w-auto rounded-3xl flex items-center">
            <img src={studentImg} alt="" className="w-10" />
            <p>Student Login</p>
          </button>
          <button className="px-4 py-2 border-2 border-blue-500/70 w-auto rounded-3xl flex items-center">
            <img src={instructorImg} alt="" className="w-10" />
            <p>Instructor Login</p>
          </button>
        </div>
        <Container
          sx={{
            width: 550,
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
              padding: "15px",
            }}
            className="shadow-xl"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
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
                  <Link to={"#"} className="text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  "Don't have an account?
                  <Link
                    to={"/signup"}
                    className="ms-1 text-blue-600 hover:underline"
                  >
                    Sign Up"
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Login;
