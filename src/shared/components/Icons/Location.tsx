import type { ComponentProps } from 'react';

export const Location = (props: ComponentProps<'svg'>) => {
	return (
		<svg
			fill="none"
			height="20"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			{...props}
		>
			<path
				d="M9.99915 18C9.99915 18 16.26 12.4348 16.26 8.26087C16.26 4.80309 13.4569 2 9.99915 2C6.54137 2 3.73828 4.80309 3.73828 8.26087C3.73828 12.4348 9.99915 18 9.99915 18Z"
				stroke="#97A1AF"
				strokeWidth="2"
			/>
			<path
				d="M11.9994 8.00013C11.9994 9.1047 11.104 10.0001 9.99941 10.0001C8.89484 10.0001 7.99941 9.1047 7.99941 8.00013C7.99941 6.89556 8.89484 6.00013 9.99941 6.00013C11.104 6.00013 11.9994 6.89556 11.9994 8.00013Z"
				stroke="#97A1AF"
				strokeWidth="2"
			/>
		</svg>
	);
};
