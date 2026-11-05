function Topic({ topic, onBack, onOpenOperation }) {
  return (
    <div className="app">
      <header className="header">
        <h1>DATA STRUCTURE SIMULATOR</h1>
        <button className="back-btn" onClick={onBack}>
          ← Menu
        </button>
      </header>

      <main className="topic">
        <h2 className="topic-title">{topic.name}</h2>

        <section className="topic-section">
          <h3>What is it?</h3>
          <p>{topic.description}</p>
        </section>

        <section className="example-box">
          <h3>Example</h3>
          <p>{topic.example}</p>
        </section>

        <section className="topic-section">
          <h3>Operations</h3>
          <div className="operations">
            {topic.operations.map((op) => (
              <button
                className="op-card"
                key={op.name}
                onClick={() => onOpenOperation(op)}
              >
                <h4>{op.name}</h4>
                <p>{op.info}</p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Topic;