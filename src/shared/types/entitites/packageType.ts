export interface PackageSize {
	height: number;
	length: number;
	weight: number;
	width: number;
}

export interface PackageType extends PackageSize {
	id: string;
	name: string;
}
