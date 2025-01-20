import {createStore} from 'redux';
console.log(createStore);
import { MyReduxCreateStore } from './ReduxStore';
import { ProductsList } from './productsList';
const countValue = document.getElementById('countValue');
const decrementFuntion = document.getElementById('decrementFuntion');
const incrementFuntion = document.getElementById('incrementFuntion');


const reducerState={
      name:"Bhartesh",
      age:26,
      count:0
}

const initialState={
      products:ProductsList,
      cartItem:[],
      wishList:[],
}

console.log(initialState);

const INITIAL_STATE={
      name:"Bhartesh",
      age:26,
      count:0
}

const ACTION ={
      INCREMENT:'post/increament',
      DECREMENT:'post/decreament',
      INCREMENTBY:'post/increamentBy'
}

function reducerFunction (state = INITIAL_STATE ,action){
      const {type, payload}= action;

      // if(type === 'post/increament'){
      //       return {...state, count:state.count +1};
      // } if(type === 'post/decreament'){
      //       return {...state, count:state.count -1};
      // } if(type === 'post/increamentBy'){
      //       return {...state, count:state.count + payload};
      // }
      
      switch (type) {
            case ACTION.INCREMENT:
                  return {...state, count:state.count +1};
                  
            case ACTION.DECREMENT:
                  return {...state, count:state.count -1};
                  
            case ACTION.INCREMENTBY:
                  return {...state, count: state.count+payload};
                  
            default:
                  return state;
                  
            }
}

// const store = createStore(reducerFunction, window.__REDUX_DEVTOOLS_EXTENSION__?.());
// console.log(store.getState());

// // subscribe the action done by reducer funtion when state changes 
// store.subscribe(()=>{
//       console.log(store.getState());
//       countValue.innerText = store.getState().count;

// })

// countValue.innerText = store.getState().count;

// store.dispatch({type:ACTION.INCREMENT});
// store.dispatch({type:ACTION.INCREMENT});
// store.dispatch({type:ACTION.INCREMENTBY, payload:10});

// incrementFuntion.addEventListener('click',() =>{
//       store.dispatch({type:ACTION.INCREMENT});
// });

// decrementFuntion.addEventListener('click',()=>{
//       store.dispatch({type:ACTION.DECREMENT});
// });

const myStore = MyReduxCreateStore(reducerFunction);

myStore.subScribe(()=>{
      console.log(myStore.getState());
      countValue.innerText = myStore.getState().count;
})

countValue.innerText = myStore.getState().count;

myStore.dispatch({type:ACTION.INCREMENT});
myStore.dispatch({type:ACTION.INCREMENT});
myStore.dispatch({type:ACTION.INCREMENTBY, payload:10});

incrementFuntion.addEventListener('click',() =>{
      myStore.dispatch({type:ACTION.INCREMENT});
});

decrementFuntion.addEventListener('click',()=>{
      myStore.dispatch({type:ACTION.DECREMENT});
});

