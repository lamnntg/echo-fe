import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  showFooter: boolean;
  setShowFooter: (show: boolean) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        showFooter: false,
        setShowFooter: (show) => {
          set(() => ({ showFooter: show }));
        },
      }),
      { name: "authStore" }
    )
  )
);
