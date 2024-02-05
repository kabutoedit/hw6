import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, marketAction } from '../store/action.js'

const ProductsPage = () => {
	const dispatch = useDispatch()
	const getPost = useSelector(state => state.marketState.post)
	console.log(getPost)

	const handleClick = selectProduct => {
		console.log(selectProduct)
		dispatch(addBasket({ selectProduct }))
	}

	return (
		<div>
			{getPost.map(
				item => (
					(
						<div className={'product'} key={item._id}>
							<span>{item.name}</span>
							<span>{item.price}</span>
							<button onClick={() => handleClick(item)}>BUY</button>
						</div>
					),
					console.log(item)
				)
			)}
		</div>
	)
}

export default ProductsPage
