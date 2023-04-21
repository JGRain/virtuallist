import './app.css'
import VList from './components/vlist'
import ObserverItem from './components/observer-item'
import faker from 'faker'

let data = []
for (let id = 0; id < 100; id++) {
	const item = {
		id,
		value: faker.lorem.paragraphs(), // 长文本
	}

	if (id % 10 === 1) {
		item.src = faker.image.image()
	}
	data.push(item)
}

export default function App() {
	return (
		<div className="App">
			<VList list={data}>
				{({ index, item, measure }) => (
					<ObserverItem
						index={index}
						key={item.id}
						item={item}
						measure={measure}
					>
						<>
							{item.value}
							{item.src && <img src={item.src} alt="" />}
						</>
					</ObserverItem>
				)}
			</VList>
		</div>
	)
}
