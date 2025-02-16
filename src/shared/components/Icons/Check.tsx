import type { ComponentProps } from 'react';

export const Check = (props: ComponentProps<'svg'>) => {
	return (
		<svg
			fill="none"
			height="16"
			width="17"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 17 16"
			{...props}
		>
			<path
				d="M5.02222 8.66667L7.02222 10.6667L11.6889 6"
				stroke="white"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
		</svg>
	);
};
