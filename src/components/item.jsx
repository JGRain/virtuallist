import React, { useEffect, useRef } from 'react'

export default function Item(props) {
	const { index, measure } = props
	const element = useRef(null)

	useEffect(() => {
		measureItem(index)
	}, [])

	// 文本渲染完成
	const measureItem = (index) => {
		const item = element.current
		if (item?.clientHeight) {
			measure(index, item.clientHeight)
		}
	}

	return (
		<div index={index} className="list-item" ref={element}>
			{props.children}
		</div>
	)
}
