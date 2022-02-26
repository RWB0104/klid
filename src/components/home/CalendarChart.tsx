/**
 * 캘린더 차트 컴포넌트
 *
 * @author RWB
 * @since 2021.11.15 Mon 22:12:41
 */

import { ResponsiveCalendar, CalendarDatum } from '@nivo/calendar';
import { ReactElement } from 'react';
import { getDateDetail } from '../../global/util';
import ChartError from '../home/ChartError';

interface Props {
	list?: CalendarDatum[]
}

/**
 * 캘린더 차트 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function CalendarChart({ list }: Props): ReactElement
{
	const date = getDateDetail();

	return (
		<div className="body">
			{list ? <ResponsiveCalendar
				data={list}
				from={`${date.year}-01-01`}
				to={`${date.year}-12-31`}
				emptyColor="#DDDDDD"
				colors={[ 'red', 'dodgerblue' ]}
				margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
				yearSpacing={40}
				monthBorderColor="#ffffff"
				dayBorderWidth={2}
				dayBorderColor="#ffffff"
			/> : <ChartError />}
		</div>
	);
}