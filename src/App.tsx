import { useState } from "react";
import "./App.css";

import { ReduxCardsApp } from "./app/ReduxCards/ReduxCards";
import { ContextProblemApp } from "./app/ContextProblem/ContextProblem";
import { StateApp } from "./app/StateApp/StateApp";
import { TwoBlocksContextApp } from "./app/TwoBlockContext/TwoBlocksContext";
import { TwoBlocksApp } from "./app/TwoBlocks/TwoBlocks";
import { OldReduxApp } from "./app/OldRedux/OldRedux";
import { ToolkitReduxApp } from "./app/ToolkitRedux/ToolkitRedux";
import { ReduxThunkApp } from "./app/ReduxThunk/ReduxThunk";
import { OldReduxThunkApp } from "./app/OldReduxThunk/OldReduxThunk";
import { ReduxThunkAdapterApp } from "./app/ReduxThunkAdapter/ReduxThunkAdapter";
import { ReduxSagaApp } from "./app/ReduxSaga/ReduxSaga";
import { ReduxRTKQueryApp } from "./app/ReduxRTKQuery/ReduxRTKQuery";

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
