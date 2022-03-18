import Router from "./routes";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Router />
    </div>
  );
}

export default App;
