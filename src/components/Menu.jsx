function Menu({ topics, onSelect }) {
  return (
    <section className="menu">
      <h1 className="menu-title">WHAT WOULD YOU LIKE TO DO?</h1>

      <div className="blocks">
        {topics.map((name) => (
          <button
            key={name}
            className="block"
            onClick={() => onSelect(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Menu;