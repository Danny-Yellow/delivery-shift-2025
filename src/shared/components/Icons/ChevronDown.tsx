import type { ComponentProps } from 'react';

export const ChevronDown = (props: ComponentProps<'svg'>) => {
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
				d="M15.834 7.50065L10.7078 12.6269C10.3172 13.0174 9.68407 13.0174 9.29354 12.6269L4.16732 7.50065"
				stroke="#97A1AF"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
		</svg>
	);
};
