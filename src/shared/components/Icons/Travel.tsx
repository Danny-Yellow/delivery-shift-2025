import type { ComponentProps } from 'react';

export const Travel = (props: ComponentProps<'svg'>) => {
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
				d="M8.55269 11.6689L10.4141 17.0529C10.763 18.0621 12.1779 18.0958 12.5745 17.1044L17.9147 3.75597C18.2862 2.82736 17.3802 1.89849 16.4426 2.24671L2.75163 7.3316C1.75114 7.70319 1.74891 9.1175 2.74822 9.49224L8.55269 11.6689Z"
				stroke="#97A1AF"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};
