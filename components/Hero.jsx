import heroPhotos from "./images/hero_photos.png";

function Hero() {
  return (
    <section className="hero">
      <img src={heroPhotos} alt="Hero Photos" className="hero--photos" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
