import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addBasket }  from '../store/action'; 

const Basket = () => {
    const dispatch = useDispatch()

        const getSort= useSelector(state => state.basketState.basketProducts)
        console.log(getSort);

        useEffect(() => {
        dispatch(addBasket())
        },[dispatch])

    return (
			<div>
				<div>
					{getSort.map(item => (
						<div className={'product'} key={item._id}>
							<span>{item.name}</span>
							<span>{item.price}</span>
							{/* <button onClick={() => handleClick(item)}>BUY</button> */}
						</div>
					))}
				</div>
			</div>
		)
};

export default Basket;