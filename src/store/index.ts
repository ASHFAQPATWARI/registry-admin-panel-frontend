// import type {} from '@redux-devtools/extension'; // required for devtools typing
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createSelectors } from "./autoCreateSelectors";
import { IGlobalActions, IGlobalState } from "./types";

import { isAuthenticated } from "@/utils/helper";

const useGlobalStoreBase = create<IGlobalState & IGlobalActions>()(
  immer(
    devtools((set) => ({
      isAppReady: false,
      isAuthenticated: isAuthenticated(),
      showStoreProducts: { open: false },
      setShowStoreProducts: (open, storeId) =>
        set((state) => {
          state.showStoreProducts = {
            open,
            storeId,
          };
        }),

      signIn: () =>
        set((state) => {
          state.isAuthenticated = true;
        }),
      signOut: () =>
        set((state) => {
          state.isAuthenticated = false;
        }),
      setIsAppReady: () =>
        set((state) => {
          state.isAppReady = true;
        }),
    })),
  ),
);

export const useGlobalStore = createSelectors(useGlobalStoreBase);
