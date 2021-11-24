import "./styles.css";
import PracticeUseState from "./PracticeUseState";
import PracticeUseReducer from "./PracticeUseReducer";
import PracticeUseEffect from "./PracticeUseEffect";
import PracticeUseRef from "./PracticeUseRef";

export default function App() {
  return (
    <div className="App">
      {/* <h1> Practicing Hooks </h1>
      <h2> useState Hook </h2>
      <PracticeUseState />
      <h2> useReducer Hook </h2>
      <PracticeUseReducer />
      <h2> useEffect Hook </h2>
      <PracticeUseEffect /> */}
      <h2> useRef Hook </h2>
      <PracticeUseRef />
    </div>
  );
}
