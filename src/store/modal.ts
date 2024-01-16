import { create } from "zustand";

interface State {
  isOpen: boolean;
  contentComponent: React.ReactNode;
}

interface Action {
  toggleModal: (contentComponent: React.ReactNode) => void;
}

export const useModalStore = create<State & Action>()((set) => ({
  isOpen: false,
  contentComponent: "empty",
  toggleModal: (contentComponent) =>
    set((state) => ({ isOpen: !state.isOpen, contentComponent })),
}));
