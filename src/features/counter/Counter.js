import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount , incrementByAmount , incrementAsync , refresh} from './counterSlice'

export function Counter() {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    return (
        <div>
            <button className={"button"} aria-label="increment value" onClick={() => dispatch(increment())}>
                +
            </button>
            <span className={"value"}>{count}</span>
            <button className={"button"} aria-label="decrement value" onClick={() => dispatch(decrement())}>
                -
            </button>
            <div>
                <input
                    className={"textbox"}
                    aria-label="Set increment"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button className='button' onClick={() => dispatch(incrementByAmount(Number(incrementAmount || 0)))}>
                 Add amount
                </button>
                <button className='asyncButton' onClick={() => dispatch(incrementAsync(Number(incrementAmount || 0)))}>
                 Async amount
                </button>
                <button className='button' onClick={() => dispatch(refresh())}>
                 default
                </button>
            </div>

        </div>



    );
}