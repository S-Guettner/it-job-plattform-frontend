import { create } from 'zustand'
/* import { devtools, persist } from 'zustand/middleware' */

interface UserState {
    userLoggedInState: boolean
    userLoggedIn: () => void
    userLoggedOut: () => void
}

const useBearStore = create<UserState>((set) => ({
    userLoggedInState: false,
    userLoggedIn: () => set({ userLoggedInState:true }),
    userLoggedOut: () => set({ userLoggedInState: false}),
}))