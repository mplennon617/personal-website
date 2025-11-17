import { useState } from "react";
import Designs from "../../pages/Designs";
import Grid from "../tic-tac-toe/components/Grid";

interface LearningZoneComponent {
  name: string;
  element: React.ReactElement;
}

const LearningZoneContainer: React.FC = () => {
  const learningZoneComponents: LearningZoneComponent[] = [
    { name: "Tic Tac Toe", element: <Grid></Grid> },
    { name: "Designs", element: <Designs></Designs> },
  ];

  const [currComponentIdx, setCurrComponentIdx] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-white text-2xl font-bold">LEARNING ZONE</h1>
      <ul className="flex space-x-6 justify-center p-2">
        {learningZoneComponents.map((component, idx) => (
          <li>
            <button
              className={`text-white px-2 hover:text-slate-300 transition ${idx === currComponentIdx ? 'border-b-2 border-white' : ''}`}
              onClick={() => setCurrComponentIdx(idx)}
            >
              {" "}
              {component.name}{" "}
            </button>
          </li>
        ))}
      </ul>
      {learningZoneComponents[currComponentIdx].element}
    </div>
  );
};

export default LearningZoneContainer;
