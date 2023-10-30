import './App.css'
// import { ReduxCounter } from './components/store/slices/counter'
// import { PostsThunkApi } from './components/redux-count/post-comp';
// import { A2 } from './components/use-effect/a2';
// import { A3 } from './components/use-effect/a3';
// import { A4 } from './components/use-effect/a4'
// import { A5 } from './components/use-effect/a5'
// import { A6 } from './components/use-effect/a6'
// import { A7 } from './components/use-effect/a7'
// import { A8 } from './components/use-effect/a8';
import { store } from './components/store/store.jsx'
import { Provider, } from 'react-redux';
import { Cart } from './components/Carts/Cart';
import { Header } from './components/HeaderCart/HeaderCart';
import { Home } from './components/Home/Home';
import { CarouselComp } from './components/carousel/carousel';
function App() {
  return (
    <div className='App'>
      {/* <PostsThunkApi/> */}
      {/* <A2/>
      <A3/> */}
      {/* <A4/>
      <A5/> */}
      {/* <ReduxCounter/> */}
      {/* <A6/>
      <A7/> */}
      {/* <A8/> */}
      <Provider store={store}>
      <Header />
      <CarouselComp/>
      <Home />
      <Cart />
      </Provider>
    </div>
  )
}

export default App
