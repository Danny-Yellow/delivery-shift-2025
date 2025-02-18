import { InfoPanel, InfoPanelElement, InfoPanelTitle, Pencil } from '@src/shared/components';

import styles from './styles.module.scss';

export const CheckOrderDetails = () => {
	return (
		<div className={styles.details}>
			<InfoPanel>
				<InfoPanelTitle>Получатель</InfoPanelTitle>
				<InfoPanelElement label="ФИО">Иванов Иван Иванович</InfoPanelElement>
				<InfoPanelElement label="Телефон">+7 913 123 45 67</InfoPanelElement>
				<Pencil />
			</InfoPanel>
		</div>
	);
};
