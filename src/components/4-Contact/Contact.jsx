import "./contact.css";
export default function Footer() {
  return (
    <section className="contact  ">
      <div className="head flex">
        <span className="icon-envelope"></span>
        <h1 className="title">Send me a message!</h1>
      </div>
      <p className="subtitle">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <div className="flex">
        <form className="">
          <div className="form-group flex">
            <label htmlFor="email"> Email Address:</label>
            <input
              required
              type="email"
              placeholder="Email Address "
              id="email"
            ></input>
          </div>
          <div className="form-group-Message flex">
            <label htmlFor="message"> Your message: </label>
            <textarea placeholder="Message" required name="" id="message"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="animation border">animaa</div>
      </div>
    </section>
  );
}
