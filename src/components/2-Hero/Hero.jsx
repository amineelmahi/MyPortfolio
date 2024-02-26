import "./hero.css";
export default function Hero() {
  return (
    <section className="hero  flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img className="avatar" src="/Me-modified.png" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Hi ,<br/> I'm EL MAHI ,<br/> Software Engineer.</h1>
        <p className="sub-title">
          I'm Mohammed Amine EL MAHI, based in Safi, Morocco, boasting an
          engineering degree specializing in Mobile and Web Development.
        </p>

        <div className="icons flex">
          <div className="icon icon-instagram"></div>
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-github"></div>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
}
