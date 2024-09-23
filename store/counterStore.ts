import {createStore} from "zustand/vanilla"

export type CounterState = {
    count: number;
    open:boolean;
  }
  
  export type CounterActions = {
    decrementCount: () => void
    incrementCount: () => void
    handleLogin:()=>void
  }
  export type CounterStore = CounterState & CounterActions
  export const defaultInitState: CounterState = {
    count: 0,
    open:false

  }

  export const createCounterStore = (
    initState: CounterState = defaultInitState,
  ) => {
    return createStore<CounterStore>()((set) => ({
      ...initState,
      decrementCount: () => set((state) => ({ count: state.count - 1 })),
      incrementCount: () => set((state) => ({ count: state.count + 1 })),
      handleLogin:()=>set((state)=>({open:!state.open}))
    }))
  }