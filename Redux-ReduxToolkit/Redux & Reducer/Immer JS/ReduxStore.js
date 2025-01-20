export function MyReduxCreateStore (reducer){
      // create state like a redux 
      let state;
      const Listeners=[];
      // creating the store same as redux
      const store ={
            getState(){
                  return state;
            },
            dispatch(action){
                 state= reducer(state, action);
                 Listeners.forEach((listener)=>{
                  listener();
                 })
            },
            subScribe(listener){
                  Listeners.push(listener);
                  console.log(Listeners);

                  return function(){
                        const index = Listeners.findIndex((regListerner)=>{
                              regListerner === listener;
                        })

                        Listeners.splice(index,1);
                  }
                  
            },
      }

      store.dispatch({type:'@@INIT'});
      return store;
}