/**
 * 전체 통계 테이블 컴포넌트
 *
 * @author RWB
 * @since 2021.11.11 Thu 12:53:01
 */

import { ReactElement } from 'react';
import { StatProps } from '../../global/props';
import { getDateDetail } from '../../global/util';
import  './Table.scss';

interface Props {
	title?: string,
	stat?: StatProps
}

/**
 * 전체 통계 테이블 컴포넌트 ReactElement 반환 메서드
 *
 * @param {Props} 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function TotalTable({ title, stat }: Props): ReactElement
{
	const startDate = getDateDetail(stat?.meta.start_date);
	const endDate = getDateDetail(stat?.meta.end_date);

	const percent = isNaN((stat?.done.total || 0) / (stat?.all.total || 0) * 100) ? 100 : Math.ceil((stat?.done.total || 0) / (stat?.all.total || 0) * 10000) / 100;

	return (
		<table className="stat-table" data-type="total">
			<thead>
				<tr>
					<th colSpan={2}>{title}</th>
					<th colSpan={2}>{`${startDate.year}-${startDate.month}-${startDate.day} ~ ${endDate.year}-${endDate.month}-${endDate.day}`}</th>
				</tr>

				<tr>
					<th>접수</th>
					<th>완료</th>
					<th>처리중</th>
					<th>비율</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td data-td="all" align="center">{stat?.all.total || 0}</td>
					<td data-td="done" align="center">{stat?.done.total || 0}</td>
					<td data-td="fail" align="center">{(stat?.all.total || 0) - (stat?.done.total || 0)}</td>
					<td data-td="percent" align="center">{percent}%</td>
				</tr>
			</tbody>
		</table>
	);
}