import { GlobalContext } from "./context";

export const AppContext = (params) => {
  return <GlobalContext.Provider value={"hey"}></GlobalContext.Provider>;
};
