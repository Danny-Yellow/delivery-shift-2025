import qr from '@src/assets/images/QR_koronapay.png';
import { Box } from '@src/shared/components';
import { Typography } from '@src/shared/ui/Typography/Typography';

import styles from './styles.module.scss';

export const DeliveryPromo = () => {
	return (
		<div className={styles.card}>
			<Typography className={styles.title} tag="h1" variant="h1">
				Мы доставим ваш заказ
			</Typography>
			<Typography className={styles.paragraph} variant="p_24_light" color="tertiary">
				Отправляйте посылки в приложении Шифт Delivery
			</Typography>
			<div className={styles.banner}>
				<Box className={styles.box} />
				<img alt="qr-code" className={styles.qr} src={qr} />
				<Typography className={styles.banner_paragraph} variant="p_16_medium" color="tertiary">
					Наведите камеру телефона на QR‑код
				</Typography>
			</div>
		</div>
	);
};
