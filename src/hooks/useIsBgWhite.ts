import {create} from 'zustand'

interface Props {
    isBgWhite: boolean;
    setIsBgWhite: (value: boolean) => void;
  }
  
  export const useIsBgWhite = create<Props>((set) => ({
    isBgWhite: false,
    setIsBgWhite: (value: boolean) =>
      set(() => ({
        isBgWhite: value,
      })),
  }));
  
  export default useIsBgWhite;
  