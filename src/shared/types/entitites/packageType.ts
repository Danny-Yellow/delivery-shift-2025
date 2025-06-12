export interface PackageSize {
	height: number;
	length: number;
	weight: number;
	width: number;
}

export type PackageTypeId = 'bag' | 'box-l' | 'box-m' | 'box-s' | 'box-xl' | 'envelope' | 'pallet';

export interface PackageType extends PackageSize {
	id?: PackageTypeId;
	name: string;
}
