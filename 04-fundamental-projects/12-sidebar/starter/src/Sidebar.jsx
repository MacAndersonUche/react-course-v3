import { useAppContext } from "./context";

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <div className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <h4 className="sidebar-header">Sidebar Header</h4>
      <button className="close-btn" onClick={closeSidebar}>
        Close Modal
      </button>
    </div>
  );
};
