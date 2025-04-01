import type { ComponentProps } from 'react';

export const ArrowLeft = (props: ComponentProps<'svg'>) => {
	return (
		<svg
			fill="none"
			height="24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				d="M15.4876 21.2377C15.8801 21.6302 16.5173 21.6273 16.9063 21.2314C17.2905 20.8404 17.2877 20.2128 16.9001 19.8252L9.0251 11.9502L16.9001 4.07522C17.2877 3.68761 17.2905 3.06003 16.9063 2.669C16.5173 2.27305 15.8801 2.27023 15.4876 2.66272L6.9072 11.2431C6.51668 11.6336 6.51668 12.2668 6.9072 12.6573L15.4876 21.2377Z"
				fill="#CED2DA"
			/>
		</svg>
	);
};
