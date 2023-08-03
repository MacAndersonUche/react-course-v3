import { useState } from "react";
import { AppContext } from "./context";
import { Home } from "./Home";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsSidebarOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSidebar = () => {
    console.log("Opening Sidebar");
    setIsSidebarOpen(true);
    setIsModalOpen(false);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      <Home />
    </AppContext.Provider>
  );
};
export default App;
