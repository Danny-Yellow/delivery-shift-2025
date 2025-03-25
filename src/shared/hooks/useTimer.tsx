import { useEffect, useState } from 'react';

export const useTimer = () => {
	const [time, setTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState(false);

	function start(seconds: number) {
		if (seconds > 0) {
			setTime(seconds);
			setIsRunning(true);
		}
	}

	useEffect(() => {
		if (!isRunning) return;

		const timerId = setInterval(() => {
			setTime((prev) => {
				if (prev <= 0) {
					clearInterval(timerId);
					setIsRunning(false);
					return 0;
				}

				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timerId);
	}, [isRunning]);

	return { time, isRunning, start };
};
