export type TypeOfProgress = 'education' | 'work';

export type ProgressType = {
	title: string;
	local: string;
	description?: string;
	startDate: string;
	endDate?: string;
	certificate?: string;
	type: TypeOfProgress;
};

export type ProgressHistoryType = ProgressType[];
