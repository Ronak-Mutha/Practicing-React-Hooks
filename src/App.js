import "./styles.css";
import PracticeUseState from "./PracticeUseState";
import PracticeUseReducer from "./PracticeUseReducer";
import PracticeUseEffect from "./PracticeUseEffect";
import PracticeUseRef from "./PracticeUseRef";
import PracticeUseLayoutEffect from "./PracticeUseLayoutEffect";
import PracticeUseImperativeHandle from "./PracticeUseImperativeHandle";
import PracticeUseContext from "./PracticeUseContext";
import PracticeUseMemo from "./PracticeUseMemo";
import PracticeUseCallback from "./PracticeUseCallback";

export default function App() {
  return (
    <div className="App">
      {/* <h1> Practicing Hooks </h1>
      <h2> useState Hook </h2>
      <PracticeUseState />
      <h2> useReducer Hook </h2>
      <PracticeUseReducer />
      <h2> useEffect Hook </h2>
      <PracticeUseEffect /> 
      <h2> useRef Hook </h2>
      <PracticeUseRef />
      <h2> useLayoutEffect Hook </h2>
      <PracticeUseLayoutEffect /> 
      <h2> useImperativeHandle Hook </h2>
      <PracticeUseImperativeHandle />
      <h2> useContext Hook </h2>
      <PracticeUseContext /> 
      <h2> useMemo Hook </h2>
      <PracticeUseMemo /> */}
      <h2> useCallback Hook </h2>
      <PracticeUseCallback />
    </div>
  );
}
