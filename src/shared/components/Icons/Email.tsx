import type { ComponentProps } from 'react';

export const Email = (props: ComponentProps<'svg'>) => {
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
				d="M3.90625 5.62435L9.46637 9.61623C9.78741 9.84672 10.2126 9.84672 10.5336 9.61623L16.0938 5.62435M4.375 15.8327H15.625C16.6605 15.8327 17.5 14.9621 17.5 13.8882V6.11046C17.5 5.03657 16.6605 4.16602 15.625 4.16602H4.375C3.33947 4.16602 2.5 5.03657 2.5 6.11046V13.8882C2.5 14.9621 3.33947 15.8327 4.375 15.8327Z"
				stroke="#97A1AF"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};
