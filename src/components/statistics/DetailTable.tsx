import { ReactElement } from 'react';
import { getDateDetail } from '../../global/util';
import { StatProps } from '../../global/props';
import  './Table.scss';

interface Props {
	title?: string,
	stat?: StatProps
}

export default function DetailTable({ title, stat }: Props): ReactElement
{
	const startDate = getDateDetail(stat?.meta.start_date);
	const endDate = getDateDetail(stat?.meta.end_date);

	return (
		<table className="stat-table" data-type="detail">
			<thead>
				<tr>
					<th colSpan={2}>{title}</th>
					<th colSpan={2}>{`${startDate.year}-${startDate.month}-${startDate.day} ~ ${endDate.year}-${endDate.month}-${endDate.day}`}</th>
				</tr>

				<tr>
					<th>구분</th>
					<th>접수</th>
					<th>완료</th>
					<th>처리중</th>
				</tr>
			</thead>

			<tbody>
				<tr data-tr="total">
					<td data-td="title" align="center">합계</td>
					<td data-td="all" align="center">{stat?.all.total || 0}</td>
					<td data-td="done" align="center">{stat?.done.total || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.total || 0}</td>
				</tr>

				<tr data-tr="monitor">
					<td data-td="title" align="center">모니터링</td>
					<td data-td="all" align="center">{stat?.all.monitor || 0}</td>
					<td data-td="done" align="center">{stat?.done.monitor || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.monitor || 0}</td>
				</tr>

				<tr data-tr="kais">
					<td data-td="title" align="center">KAIS</td>
					<td data-td="all" align="center">{stat?.all.kais || 0}</td>
					<td data-td="done" align="center">{stat?.done.kais || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.kais || 0}</td>
				</tr>

				<tr data-tr="city">
					<td data-td="title" align="center">자치단체</td>
					<td data-td="all" align="center">{stat?.all.city || 0}</td>
					<td data-td="done" align="center">{stat?.done.city || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.city || 0}</td>
				</tr>

				<tr data-tr="check">
					<td data-td="title" align="center">정기점검</td>
					<td data-td="all" align="center">{stat?.all.check || 0}</td>
					<td data-td="done" align="center">{stat?.done.check || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.check || 0}</td>
				</tr>

				<tr data-tr="develope">
					<td data-td="title" align="center">중점개선</td>
					<td data-td="all" align="center">{stat?.all.develope || 0}</td>
					<td data-td="done" align="center">{stat?.done.develope || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.develope || 0}</td>
				</tr>

				<tr data-tr="educate">
					<td data-td="title" align="center">교육</td>
					<td data-td="all" align="center">{stat?.all.educate || 0}</td>
					<td data-td="done" align="center">{stat?.done.educate || 0}</td>
					<td data-td="fail" align="center">{stat?.fail.educate || 0}</td>
				</tr>
			</tbody>
		</table>
	);
}