import { create } from "zustand";

const useProductQueryStore = create((set) => ({
  productQuery: {},
  setSearchText: (searchText) => set(() => ({ productQuery: { searchText } })),
  setSelectedCategory: (selectedCategory) =>
    set((store) => ({
      productQuery: {
        ...store.productQuery,
        selectedCategory: selectedCategory,
        searchText: undefined,
      },
    })),
  setSelectedPlatform: (selectedPlatform) =>
    set((store) => ({
      productQuery: {
        ...store.productQuery,
        selectedPlatform: selectedPlatform,
        searchText: undefined,
      },
    })),
  // setSortOrder: (sortOrder) =>
  //   set((store) => ({
  //     gameQuery: { ...store.productQuery, sortOrder },
  //   })),
}));

export default useProductQueryStore;
