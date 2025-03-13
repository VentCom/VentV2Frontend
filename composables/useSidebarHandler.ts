/**
 * Composable to handle the sidebar state.
 *
 * @returns {{ minimizeSideBar: Ref<boolean>, toggleSideBar: () => void }}
 * - `minimizeSideBar`: A reactive state that indicates whether the sidebar is minimized or not.
 * - `toggleSideBar`: A function that toggles the `minimizeSideBar` state.
 */
export const useSidebarHandler = () => {
  const minimizeSideBar = useState("minimizeSideBar", () => false);
  const toggleSideBar = () => {
    minimizeSideBar.value = !minimizeSideBar.value;
  };
  return { minimizeSideBar, toggleSideBar };
};
