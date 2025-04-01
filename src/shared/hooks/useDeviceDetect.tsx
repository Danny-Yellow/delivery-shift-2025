import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 520);
	const [isTablet, setIsTablet] = useState(window.innerWidth > 520 && window.innerWidth <= 820);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 520);
			setIsTablet(window.innerWidth > 520 && window.innerWidth <= 820);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { isMobile, isTablet };
};
