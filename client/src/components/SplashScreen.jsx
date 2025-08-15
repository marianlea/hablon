import hablonLogo from "../assets/images/hablon_shadow.png";

const SplashScreen = () => {
  return (
    <section className="splash-screen">
      <img src={hablonLogo} alt="Hablon" className="hero-img" />
      <p className="tagline">Gawang lokal. Kuwentong global.</p>
    </section>
  );
};

export default SplashScreen;
