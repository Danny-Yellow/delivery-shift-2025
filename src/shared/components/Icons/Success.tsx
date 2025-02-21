import type { ComponentProps } from 'react';

export const Success = (props: ComponentProps<'svg'>) => {
	return (
		<svg
			fill="none"
			height="56"
			width="57"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 57 56"
			{...props}
		>
			<path
				d="M56.3555 28C56.3555 43.464 43.8194 56 28.3555 56C12.8915 56 0.355469 43.464 0.355469 28C0.355469 12.536 12.8915 0 28.3555 0C43.8194 0 56.3555 12.536 56.3555 28Z"
				fill="url(#paint0_linear_692_406)"
			/>
			<path
				d="M40.4936 19.3899C39.8458 18.8734 38.9021 18.9798 38.3856 19.6276L25.3018 36.0364C25.1158 36.2697 24.7683 36.2892 24.5573 36.0783L18.2204 29.7413C17.6346 29.1555 16.6848 29.1555 16.099 29.7413C15.5133 30.3271 15.5133 31.2768 16.099 31.8626L22.436 38.1996C23.9127 39.6762 26.3455 39.5395 27.6475 37.9067L40.7312 21.4979C41.2477 20.8501 41.1413 19.9064 40.4936 19.3899Z"
				fill="white"
			/>
			<defs>
				<linearGradient
					gradientUnits="userSpaceOnUse"
					id="paint0_linear_692_406"
					x1="28.3555"
					x2="28.3555"
					y1="56"
					y2="-1.41898e-06"
				>
					<stop stopColor="#7DBA6E" />
					<stop offset="0.9531" stopColor="#C6E99A" />
				</linearGradient>
			</defs>
		</svg>
	);
};
