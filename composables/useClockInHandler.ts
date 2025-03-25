export const useClockInHandler = () => {
  const clockedIn = useState("useClockInHandler.clockIn", () => false);

  const toggleClockIn = () => {
    clockedIn.value = !clockedIn.value;
  };

  return {
    clockedIn,
    toggleClockIn,
  };
};
