function Landing({ onStart }) {
  return (
    <section className="landing">
      <h1 className="landing-title">
        DATA STRUCTURE <span>SIMULATOR</span>
      </h1>

      <p className="landing-desc">
        We turn confusing data structure theory into something you can see and
        play with. Pick a structure, perform operations, and watch every step
        happen live on screen. Made for students who learn better by doing.
      </p>

      <button className="start-btn" onClick={onStart}>
        Let's Start!!
      </button>
    </section>
  );
}

export default Landing;