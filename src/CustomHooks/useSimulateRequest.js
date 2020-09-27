import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useSimulateRequest(data) {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [result, setResult] = useState([])

	console.log(data)

	useEffect(() => {
		setLoading(true)
		setError(false)
		if(data.length > 0) {
			axios({
				method: 'POST',
				url: 'http://localhost:3000/simulate',
				data: data
			}).then(res => {
				console.log(res)
				// setBooks(prevResult => {
				// 	// return [[...prevResult, ...res.data.docs.map(b => b.title)]]
				// })
				setLoading(false)
			}).catch(e => {
				setError(true)
			})
		}
	}, [data])

	return { loading, error, result }
}
