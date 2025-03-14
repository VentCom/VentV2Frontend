/**
 * Composable to handle the sidebar state.
 *
 * @returns {{ minimizeSideBar: Ref<boolean>, toggleSideBar: () => void }}
 * - `minimizeSideBar`: A reactive state that indicates whether the sidebar is minimized or not.
 * - `toggleSideBar`: A function that toggles the `minimizeSideBar` state.
 */
export const useSidebarHandler = () => {
  const minimizeSideBar = useState(
    "useSidebarHandler.minimizeSideBar",
    () => false
  );
  const sidebarOpened = useState(
    "useSidebarHandler.sidebarOpened",
    () => false
  );
  const toggleSideBar = () => {
    minimizeSideBar.value = !minimizeSideBar.value;
  };

  const closeSidebar = () => {
    sidebarOpened.value = false;
  };
  const openSidebar = () => {
    sidebarOpened.value = true;
  };
  return {
    minimizeSideBar,
    toggleSideBar,
    openSidebar,
    closeSidebar,
    sidebarOpened,
  };
};
