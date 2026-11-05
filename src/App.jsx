import { useState } from "react";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Topic from "./components/Topic";
import OperationPage from "./components/OperationPage";
import { topics } from "./data/topics";
import "./App.css";

function App() {
  const [page, setPage] = useState("landing"); // landing | menu | topic | operation
  const [selected, setSelected] = useState(null);
  const [trail, setTrail] = useState([]); // opened operations, e.g. [Sorting, Bubble Sort]

  if (page === "landing") {
    return <Landing onStart={() => setPage("menu")} />;
  }

  if (page === "menu") {
    return (
      <Menu
        topics={topics.map((t) => t.name)}
        onSelect={(name) => {
          setSelected(name);
          setPage("topic");
        }}
      />
    );
  }

  const topic = topics.find((t) => t.name === selected);

  if (page === "operation") {
    return (
      <OperationPage
        topicName={topic.name}
        trail={trail}
        onOpen={(item) => setTrail([...trail, item])}
        onBack={() => {
          if (trail.length > 1) {
            setTrail(trail.slice(0, -1));
          } else {
            setTrail([]);
            setPage("topic");
          }
        }}
      />
    );
  }

  return (
    <Topic
      topic={topic}
      onBack={() => setPage("menu")}
      onOpenOperation={(op) => {
        setTrail([op]);
        setPage("operation");
      }}
    />
  );
}

export default App;