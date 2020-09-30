import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useSimulateRequest(data) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [result, setResult] = useState([])

	let axiosConfig = {
		headers: {
			'Content-Type': 'application/json',
		}
	};

	useEffect(() => {
		setError(false)
		if(Object.keys(data).length) {
			setLoading(true);
			axios({
				method: 'POST',
				url: 'http://localhost:3000/simulate',
				data: data,
				axiosConfig
			}).then(res => {
				if(res.data.gamesReport.gamesReportWin === -1) {
					setError(true)
				}else{
					setResult(result => [...result, res.data.gamesReport]);
				}
				setLoading(false)

			}).catch(e => {
				setError(true)
			})
		}
	}, [data])

	return { loading, error, result }
}
