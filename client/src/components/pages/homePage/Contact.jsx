/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import contactAnimation from "../../../assets/94599-contact-us.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ro4qdd",
        "template_b4gcugv",
        form.current,
        "hZH3lT6LQB3zJ2Qn7"
      )
      .then(
        (result) => {
          // console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Send",
            text: "I will reply you as soon as possible",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="container mx-auto lg:pt-16 pb-5 justify-center"
      id="contact"
    >
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg lg:grid-cols-2 lg:px-16 xl:px-32">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-between"
        >
          <Lottie
            animationData={contactAnimation}
            loop={true}
            className="w-96"
          />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
              Let's connect
            </h2>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="name"
              name="from_name"
              id="name"
              className="block p-3 rounded py-2.5 px-0 w-full text-sm lg:text-base ps-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="from_email"
              id="email"
              className="block p-3 rounded py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer ps-2 text-sm lg:text-base"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              rows={3}
              type="message"
              name="message"
              id="message"
              className="block p-3 rounded py-2.5 px-0 w-full text-sm lg:text-base ps-2 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
