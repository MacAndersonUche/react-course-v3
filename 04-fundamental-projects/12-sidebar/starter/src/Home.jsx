import { Modal } from "./Modal";
import { Sidebar } from "./Sidebar";
import { useAppContext } from "./context";

export const Home = () => {
  const { openModal, openSidebar, isSidebarOpen, isModalOpen } =
    useAppContext();
  return (
    <>
      <h1>Home</h1>
      <button className="sidebar-toggle" onClick={openSidebar}>
        Open Sidebar
      </button>
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>

      {isSidebarOpen && <Sidebar />}
      {isModalOpen && <Modal />}
    </>
  );
};
