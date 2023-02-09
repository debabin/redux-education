import { CardList } from "./components/CardList/CardList";
import { CardView } from "./components/CardView/CardView";
import { CardProvider } from "./utils/context/Card/CardContext";

export const ContextProblemApp = () => (
  <CardProvider>
    <CardView />
    <CardList />
  </CardProvider>
);
