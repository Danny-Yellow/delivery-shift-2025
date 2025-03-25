import type { PackageSize } from './packageType';
import type { PointCoordinates } from './point';

export interface DeliveryInfo {
	package: PackageSize;
	receiverPoint: PointCoordinates;
	senderPoint: PointCoordinates;
}
