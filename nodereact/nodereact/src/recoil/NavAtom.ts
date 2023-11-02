import { atom } from 'recoil';

export const ToggledAtom = atom<boolean>({
    key: 'ToggledAtom',
    default: false,
});

export const MenuModalAtom = atom<boolean>({
    key:'MenuModalAtom',
    default: false,
});
