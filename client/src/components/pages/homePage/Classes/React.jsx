import { useKeenSlider } from "keen-slider/react";
import { Button } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const React = () => {
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
    <div>
      <h1 className="text-2xl mb-2">
        Grow your Web Development development skills with React
      </h1>
      <p className="mb-4">
        The world of web development is as wide as the internet itself. Much of
        our social and vocational lives play out on the internet, which prompts
        new industries aimed at creating, managing, and debugging the websites
        and applications that we increasingly rely on.
      </p>

      <Button variant="outlined" color="success" size="small">
        Explore
      </Button>
      <div className="ReactSlider mt-8">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 p-2">
            <div className="h-full grid md:grid-cols-4 grid-cols-1 gap-14">
              <Card sx={{ maxWidth: 345 }} className="shadow-xl">
                <CardMedia
                  sx={{ height: 140 }}
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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
                  image="../src/assets/img/React.jpg"
                  title="React"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    React
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

export default React;
