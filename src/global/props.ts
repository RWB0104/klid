export interface TotalChartProps {
	id: string,
	label: string,
	value: number,
}

export interface WorkItemProps {
	seq: number,
	type: string,
	worker: string,
	description?: string,
	start: number,
	end: number
}

export interface DateProps {
	year: string,
	month: string,
	day: string,
	week: string,
	hour: string,
	minute: string,
	second: string
}

export interface StatProps {
	meta: {
		start_date: number,
		end_date: number
	},
	all: StatItemProps,
	done: StatItemProps,
	fail: StatItemProps
}

export interface StatItemProps {
	total: number,
	monitor: number,
	kais: number,
	city: number,
	check: number,
	develope: number,
	educate: number
}