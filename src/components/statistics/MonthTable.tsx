/**
 * 월 통계 테이블 컴포넌트
 *
 * @author RWB
 * @since 2021.11.11 Thu 16:36:19
 */

import { ReactElement } from 'react';
import { StatProps } from '../../global/props';
import { getDateDetail } from '../../global/util';
import  './Table.scss';

interface Props {
	stat?: StatProps
}

/**
 * 월 통계 테이블 컴포넌트 ReactElement 반환 메서드
 *
 * @param {Props} 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function MonthTable({ stat }: Props): ReactElement
{
	const startDate = getDateDetail(stat?.meta.start_date );
	const endDate = getDateDetail(stat?.meta.end_date);

	return (
		<table className="stat-table" data-type="month">
			<thead>
				<tr>
					<th colSpan={9}>{`${startDate.year}-${startDate.month}-${startDate.day} ~ ${endDate.year}-${endDate.month}-${endDate.day}`}</th>
				</tr>
				<tr>
					<th colSpan={6}>당월 접수 현황</th>
					<th colSpan={3}>당월 처리 현황</th>
				</tr>

				<tr>
					<th>모니터링</th>
					<th>KAIS</th>
					<th>자치단체</th>
					<th>정기점검</th>
					<th>중점점검</th>
					<th>교육</th>
					<th>접수</th>
					<th>완료</th>
					<th>처리중</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td data-td="monitor" align="center">{stat?.all.monitor || 0}</td>
					<td data-td="kais" align="center">{stat?.all.kais || 0}</td>
					<td data-td="city" align="center">{stat?.all.city || 0}</td>
					<td data-td="check" align="center">{stat?.all.check || 0}</td>
					<td data-td="develope" align="center">{stat?.done.develope || 0}</td>
					<td data-td="educate" align="center">{stat?.all.educate || 0}</td>
					<td data-td="total" align="center">{stat?.all.total || 0}</td>
					<td data-td="done" align="center">{stat?.done.total || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.total || 0}</td>
				</tr>
			</tbody>
		</table>
	);
}