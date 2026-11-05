function OperationPage({ topicName, trail, onOpen, onBack }) {
  const current = trail[trail.length - 1];
  const backLabel =
    trail.length > 1 ? trail[trail.length - 2].name : topicName;

  return (
    <div className="app">
      <header className="header">
        <h1>DATA STRUCTURE SIMULATOR</h1>
        <button className="back-btn" onClick={onBack}>
          ← {backLabel}
        </button>
      </header>

      <main className="topic">
        <h2 className="topic-title">{current.name}</h2>

        <section className="topic-section">
          <h3>What is it?</h3>
          <p>{current.info}</p>
        </section>

        {current.options ? (
          <section className="topic-section">
            <h3>Algorithms</h3>
            <div className="operations">
              {current.options.map((opt) => (
                <button
                  className="op-card"
                  key={opt.name}
                  onClick={() => onOpen(opt)}
                >
                  <h4>{opt.name}</h4>
                  <p>{opt.info}</p>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="visual-box">
            <h3>Visualization</h3>
            <p>The visualization will appear here.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default OperationPage;