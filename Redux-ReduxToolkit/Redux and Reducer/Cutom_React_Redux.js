import { Children, createContext, useContext, useState } from "react"

const StoreContext = createContext();

export function Provider({children, store}){

      const [state, setState] = useState(store.getState());

      store.subscribe(()=> setState(store.getState()));

      return <StoreContext.Provider value={{state, dispatch: store.getState()}}>
            {children}
      </StoreContext.Provider>
}

export const useDispatch= ()=>{
      const store = useContext(StoreContext);
      return store.dispatch;
}

export const useSelector = (selector)=>{
      const store = useContext(StoreContext);
      return selector(store.state);
}