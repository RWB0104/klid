/**
 * 업무 아이템 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:51
 */

import React, { ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';
import { WorkItemProps } from '../../global/props';
import { itemViewerAtom } from '../../global/state';
import { getDateDetail } from '../../global/util';

interface Props extends WorkItemProps {
	onlyView?: boolean
}

/**
 * 업무 아이템 컴포넌트 ReactElement 반환 메서드
 *
 * @param {Props} 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function WorkItem({ seq, type, worker, description, start, end, onlyView = false }: Props): ReactElement
{
	const setItemViewerState = useSetRecoilState(itemViewerAtom);

	const startDate = getDateDetail(start);
	const endDate = getDateDetail(end);

	return (
		<tr data-type="item" data-view={onlyView} data-key={seq} onClick={() => !onlyView && setItemViewerState({
			flag: true,
			isAdd: false,
			item: {
				seq: seq,
				type: type,
				worker: worker,
				description: description || '',
				start: start,
				end: end
			}
		})}>
			<td align="center" data-name="seq">{seq}</td>
			<td align="center" data-name="type">{type}</td>
			<td align="center" data-name="worker">{worker}</td>
			<td data-name="description">{description}</td>
			<td align="center" data-name="start">{`${startDate.year}-${startDate.month}-${startDate.day}`}</td>
			<td align="center" data-name="end">{`${endDate.year}-${endDate.month}-${endDate.day}`}</td>
		</tr>
	);
}