import { create } from "zustand";

const useNumberSelectionStore = create((set) => ({
  selectedNumber: null,
  setSelectedNumber: (number) => set(() => ({ selectedNumber: number })),
}));

export default useNumberSelectionStore;
