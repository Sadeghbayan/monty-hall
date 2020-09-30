import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useSimulateRequest from "./useSimulateRequest";

test("useSimulateRequest performs POST request", async () => {
	const initialValue = [{
		toSwitch: true,
		number: 10,
		gamesReportWin: 4
	}];
	const mockValue = {
		gamesReport:
			{
				number:10,
				toSwitch:true,
				gamesReportWin:4
			}
	}
	const mock = new MockAdapter(axios);

	const url = "http://localhost:3000/simulate";
	mock.onPost(url).reply(200, mockValue);

	const { result, waitForNextUpdate } = renderHook(() =>
		useSimulateRequest(initialValue)
	);

	expect(result.current.result).toEqual([]);
	expect(result.current.loading).toBeTruthy();

	await waitForNextUpdate();

	expect(result.current.result).toEqual(initialValue);
	expect(result.current.error).toBeFalsy();
});
