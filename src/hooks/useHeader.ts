import { create } from 'zustand';

export type Pages = 'Home' | 'About' | 'Projects' | 'Contact';

type HeaderState = {
    current: Pages;
    setCurrent: (current: Pages) => void;
    navOpen: boolean;
    setNavOpen: (navOpen: boolean) => void;
};

export const useHeader = create<HeaderState>((set) => ({
    current: 'Home',
    setCurrent: (current) => set({ current }),
    navOpen: false,
    setNavOpen: (navOpen) => set({ navOpen }),
}));
