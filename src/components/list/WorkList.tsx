/**
 * 업무 리스트 컴포넌트
 *
 * @author RWB
 * @since 2021.10.29 Fri 02:03:22
 */

import React, { ReactElement } from 'react';
import WorkItem from './WorkItem';
import { WorkItemProps } from '../../global/props';
import './WorkList.scss';

interface Props {
	list?: WorkItemProps[],
	onlyView?: boolean
}

/**
 * 업무 리스트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function WorkList({ list, onlyView = false }: Props): ReactElement
{
	const items = list === undefined || list.length === 0 ? (
		<tr data-type="item" data-view={onlyView}>
			<td colSpan={6} align="center">😅 데이터가 존재하지 않습니다</td>
		</tr>
	) : list.map(({ seq, type, worker, description, start, end }, index) => <WorkItem key={index} seq={seq} type={type} worker={worker} description={description} start={start} end={end} onlyView={onlyView} />);

	return (
		<div className="worklist">
			<table>
				<thead>
					<tr data-type="header">
						<th data-name="seq">SEQ</th>
						<th data-name="type">TYPE</th>
						<th data-name="worker">WORKER</th>
						<th data-name="description">DESCRIPTION</th>
						<th data-name="start">START</th>
						<th data-name="end">END</th>
					</tr>
				</thead>

				<tbody>
					{items}
				</tbody>
			</table>
		</div>
	);
}