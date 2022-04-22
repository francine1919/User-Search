import GlobalState from "./Global/GlolbalState";
import Router from "./Router/Router";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
