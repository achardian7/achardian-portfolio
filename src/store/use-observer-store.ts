import { create } from "zustand";

export type TActiveSection = "about" | "skills" | "projects" | "contact";

interface IObserver {
  activeSection: TActiveSection;
  setObserver: (activeSection: TActiveSection) => void;
}

const useObserverStore = create<IObserver>((set) => ({
  activeSection: "about",
  setObserver: (state) => set(() => ({ activeSection: state })),
}));

export default useObserverStore;
