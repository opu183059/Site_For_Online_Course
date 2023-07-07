import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import showAnimation from "../../../assets/Animation/134945-zpunet-icon.json";
import { useContext, useState } from "react";
import instructorImg from "../../../assets/img/guardian.png";
import studentImg from "../../../assets/img/tutor.png";
import { Authcontext } from "../../../provider/Authprovider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";
const Register = () => {
  const auth = getAuth();
  const { userRegistration, userSignOut } = useContext(Authcontext);
  const [student, setStudent] = useState(true);
  const [instructor, setInstructor] = useState(false);

  const studentFunction = () => {
    setStudent(true);
    setInstructor(false);
  };
  const instructorFunction = () => {
    setInstructor(true);
    setStudent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const name = data.get("name");
    const password = data.get("password");
    console.log(name);
    if (email && password) {
      userRegistration(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "Account Created Successfully goto login",
          });
          updateProfile(auth.currentUser, {
            displayName: name,
            // photoURL: photo,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
          form.reset();
          userSignOut()
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="pt-24 pb-10 flex justify-center items-center">
      <div>
        <Lottie animationData={showAnimation} loop={true} className="w-10/12" />
      </div>
      <div>
        <div className="option flex justify-around">
          <button
            onClick={studentFunction}
            className={` ${
              student ? "bg-blue-500" : "bg-white"
            } px-4 py-2 border-2 border-blue-500/70 w-auto rounded-2xl flex items-center flex-col`}
          >
            <img src={studentImg} alt="" className="w-10" />
            <p>Student registration</p>
          </button>
          <button
            onClick={instructorFunction}
            className={`${
              instructor ? "bg-blue-500" : "bg-white"
            } px-4 py-2 border-2 border-blue-500/70 w-auto rounded-2xl flex items-center flex-col`}
          >
            <img src={instructorImg} alt="" className="w-10" />
            <p>Instructor registration</p>
          </button>
        </div>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  Already have an account?
                  <Link
                    to={"/login"}
                    className="ms-1 text-blue-600 hover:underline"
                  >
                    Sign in
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

export default Register;
