import { create } from "zustand";

interface Props {
  isMouseHovered: boolean;
  setIsMouseHovered: (value: boolean) => void;
}

export const useMouseHoverStore = create<Props>((set) => ({
  isMouseHovered: false,
  setIsMouseHovered: (value: boolean) =>
    set(() => ({
      isMouseHovered: value,
    })),
}));

export default useMouseHoverStore;
