import { useKeenSlider } from "keen-slider/react";
import { Button } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const JS = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="text-center md:text-left">
      <h1 className="text-2xl mb-2">
        Grow your software development skills with JavaScript
      </h1>
      <p className="mb-4">
        JavaScript is a text-based computer programming language used to make
        dynamic web pages. A must-learn for aspiring web developers or
        programmers, JavaScript can be used for features like image carousels,
        displaying countdowns and timers, and playing media on a webpage. With
        JavaScript online classes, you can learn to build
      </p>

      <Link className="hover:bg-blue-600 transition-all duration-300 hover:text-white px-4 py-2 rounded-md border-[1px] border-blue-600">
        Explore
      </Link>
      <div className="JavaScriptSlider mt-8">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 p-2">
            <div className="h-full grid md:grid-cols-4 grid-cols-1 gap-14">
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 p-2">
            <div className="h-full grid md:grid-cols-4 grid-cols-1 gap-14">
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/js.jpg"
                  title="JavaScript"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $ 20
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JS;
