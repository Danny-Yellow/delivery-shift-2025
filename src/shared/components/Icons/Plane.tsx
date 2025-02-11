import type { ComponentProps } from 'react';

export const Plane = (props: ComponentProps<'svg'>) => {
	return (
		<svg
			fill="none"
			height="48"
			width="49"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 49 48"
			{...props}
		>
			<circle cx="24.8555" cy="24" fill="#F3F4F7" r="24" />
			<path
				d="M21.9486 23.492L15.8002 18.6907C15.4578 18.4229 15.2337 18.0316 15.1772 17.603C15.1206 17.1744 15.2362 16.7434 15.4985 16.4048L15.5623 16.327L15.7255 16.1598C16.0123 15.8731 16.3778 15.6775 16.7771 15.597C17.1765 15.5164 17.5924 15.5544 17.974 15.7063L26.1764 18.9686L28.7926 16.1728C29.2596 15.6723 29.9011 15.3697 30.5887 15.3257C31.2763 15.2817 31.9591 15.4995 32.5001 15.9354L32.6547 16.0703L32.7196 16.1352C33.7948 17.2104 33.808 18.9404 32.7391 20.0092L29.8872 22.6774L33.1496 30.8818C33.3015 31.2635 33.3394 31.6794 33.2589 32.0788C33.1783 32.4781 32.9828 32.8435 32.6961 33.1304L32.6017 33.2247C32.4397 33.3867 32.2446 33.5119 32.0293 33.5919C31.814 33.672 31.5834 33.705 31.3529 33.6889C31.1224 33.6729 30.8972 33.608 30.6922 33.4986C30.4873 33.3893 30.3073 33.2379 30.1641 33.0547L25.3619 26.9053L23.1848 28.9406L23.916 31.5558C24.007 31.8809 24.0108 32.223 23.927 32.5474C23.8431 32.8718 23.6746 33.1669 23.4386 33.4029C23.1778 33.6637 22.8225 33.8086 22.4509 33.8058C22.0793 33.8029 21.7218 33.6526 21.457 33.3878L19.9935 31.9243L19.8222 32.0696C19.411 32.3845 18.897 32.5373 18.3762 32.4995C17.8553 32.4618 17.3631 32.2361 16.9913 31.8645C16.6194 31.4929 16.3934 31.0008 16.3553 30.48C16.3172 29.9591 16.4697 29.4451 16.7843 29.0337L16.9306 28.8614L15.467 27.3979C15.2023 27.1331 15.0519 26.7756 15.0491 26.4039C15.0463 26.0323 15.1912 25.677 15.452 25.4163C15.9328 24.9354 16.6378 24.7535 17.2991 24.9389L19.9133 25.6691L21.9486 23.492ZM16.7228 17.1571L16.6098 17.2722C16.5734 17.3195 16.5575 17.3796 16.5656 17.4393C16.5737 17.4989 16.605 17.5533 16.6528 17.5905L24.0181 23.3433L20.3711 27.2478L16.9408 26.2875C16.8544 26.2635 16.7636 26.2626 16.6775 26.2849C16.5914 26.3072 16.513 26.3519 16.4503 26.4146L18.8783 28.8425L17.9446 29.844C17.8054 29.9833 17.728 30.173 17.7295 30.3714C17.731 30.5699 17.8113 30.7608 17.9527 30.9022C18.0941 31.0436 18.285 31.1239 18.4834 31.1254C18.6819 31.1269 18.8716 31.0495 19.0109 30.9102L20.0104 29.9746L22.4403 32.4045L22.507 32.3218C22.5453 32.2624 22.5704 32.1953 22.5808 32.1251C22.5912 32.0548 22.5866 31.9829 22.5673 31.9141L21.606 28.4828L25.5106 24.8358L31.2813 32.223C31.3712 32.3128 31.5149 32.3149 31.6034 32.2264L31.6977 32.132C31.7933 32.0364 31.8585 31.9145 31.8853 31.7813C31.9121 31.6481 31.8993 31.5094 31.8486 31.3822L28.2337 22.2904L31.7507 19.003C31.8736 18.8803 31.9708 18.7342 32.0367 18.573C32.1025 18.4119 32.1357 18.2388 32.1344 18.0637C32.133 17.8887 32.0972 17.7151 32.0289 17.5529C31.9606 17.3907 31.8612 17.2431 31.7363 17.1185L31.7044 17.0866C31.5757 16.966 31.4248 16.8716 31.2605 16.8088C31.0961 16.7461 30.9215 16.7162 30.7466 16.7208C30.5717 16.7255 30.3999 16.7646 30.2411 16.836C30.0824 16.9073 29.9397 17.0095 29.8214 17.1367L26.5615 20.6222L17.4737 17.0053C17.3464 16.9546 17.2077 16.9418 17.0746 16.9686C16.9414 16.9954 16.8195 17.0606 16.7238 17.1561"
				fill="#97A1AF"
			/>
		</svg>
	);
};
