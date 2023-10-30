import { useSelector, useDispatch } from "react-redux";
import { 
    increment,
    decrement,
    reset,
    incrementByAmount
} from '../../redux-count/count'
export const ReduxCounter = () => {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span>{counter}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>    
    )
}