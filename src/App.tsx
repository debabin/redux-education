import { useState } from "react";
import "./App.css";

import { ReduxCardsApp } from "./src/ReduxCards/ReduxCards";
import { ContextProblemApp } from "./src/ContextProblem/ContextProblem";
import { StateApp } from "./src/StateApp/StateApp";
import { TwoBlocksContextApp } from "./src/TwoBlockContext /TwoBlocksContext";
import { TwoBlocksApp } from "./src/TwoBlocks/TwoBlocks";
import { OldReduxApp } from "./src/OldRedux/OldRedux";
import { ToolkitReduxApp } from "./src/ToolkitRedux/ToolkitRedux";
import { ReduxThunkApp } from "./src/ReduxThunk/ReduxThunk";
import { OldReduxThunkApp } from "./src/OldReduxThunk/OldReduxThunk";
import { ReduxThunkAdapterApp } from "./src/ReduxThunkAdapter/ReduxThunkAdapter";
import { ReduxSagaApp } from "./src/ReduxSaga/ReduxSaga";
import { ReduxRTKQueryApp } from "./src/ReduxRTKQuery/ReduxRTKQuery";

function App() {
  return (
    <div className="App">
      {/* <StateApp /> */}
      {/* <TwoBlocksApp /> */}
      {/* <TwoBlocksContextApp /> */}
      {/* <ContextProblemApp /> */}
      {/* <ReduxCardsApp /> */}
      {/* <OldReduxApp /> */}
      {/* <ToolkitReduxApp /> */}

      {/* <OldReduxThunkApp /> */}
      {/* <ReduxThunkApp /> */}
      {/* <ReduxThunkAdapterApp /> */}
      {/* <ReduxSagaApp /> */}
      <ReduxRTKQueryApp />
    </div>
  );
}

export default App;
