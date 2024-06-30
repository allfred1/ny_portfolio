// stores/useThemeStore.ts
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface ThemeState {
  darkTheme: boolean
  toggleTheme: () => void
}

const storage = createJSONStorage(() => window.localStorage)

const useThemeStore = create<ThemeState>(
  persist(
    (set) => ({
      darkTheme: false,
      toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
    }),
    {
      name: "theme-storage",
      storage,
    }
  )
)

export default useThemeStore
