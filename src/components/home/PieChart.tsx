/**
 * 파이 차트 컴포넌트
 *
 * @author RWB
 * @since 2021.11.15 Mon 21:35:53
 */

import { ReactElement } from 'react';
import { ResponsivePie } from '@nivo/pie';
import ChartError from '../home/ChartError';
import { TotalChartProps } from '../../global/props';

interface Props {
	list?: TotalChartProps[]
}

/**
 * 파이 차트 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function PieChart({ list }: Props): ReactElement
{
	return list ? (
		<div className="body">
			<ResponsivePie
				data={list}
				margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				activeOuterRadiusOffset={8}
				borderWidth={1}
				borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor="#333333"
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: 'color' }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
			/>
		</div>
	) : (
		<div className="chart-error">
			<ChartError />
		</div>
	);
}