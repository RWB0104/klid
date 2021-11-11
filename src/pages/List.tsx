/**
 * 리스트 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:24
 */

import React, { ReactElement, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Icon } from '@mdi/react';
import { mdiPlus } from '@mdi/js';

import Section from '../components/global/Section';
import WorkList from '../components/list/WorkList';
import ItemViewer from '../components/list/ItemViewer';
import { getList } from '../api/ListAPI';
import { WorkItemProps } from '../global/props';
import { defaultItemViewerState, itemViewerAtom } from '../global/state';

import '../pages-style/List.scss';
import Meta from '../components/header/Meta';
import { URL } from '../global/variable';

/**
 * 리스트 페이지 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function List(): ReactElement
{
	const [ itemViewerState, setItemViewerState ] = useRecoilState(itemViewerAtom);

	const [ year, setYear ] = useState<string | number>(new Date().getFullYear());
	const [ month, setMonth ] = useState<string | number>('');
	const [ list, setList ] = useState<WorkItemProps[]>([]);

	useEffect(() =>
	{
		(async() =>
		{
			const yearList = await getList(year, month);

			setList(yearList);
		})();
	}, [ year, month, itemViewerState.flag ]);

	return (
		<Section url="list" width={1600}>
			<Meta title="📋 List" url="/list" image={`${URL}/logo512.png`} />

			<div className="pannel">
				<button className="icon-button add" onClick={() => setItemViewerState({ flag: true, isAdd: true, item: defaultItemViewerState })}>
					<Icon path={mdiPlus} color="white" size={1} /> 추가
				</button>

				<input type="number" name="year" aria-label="year" value={year} max="2099" onChange={(e) => setYear(e.currentTarget.value)} />

				<select value={month} name="month" aria-label="month" onChange={(e) => setMonth(e.currentTarget.value)}>
					<option value="">전체</option>
					<option value="1">1월</option>
					<option value="2">2월</option>
					<option value="3">3월</option>
					<option value="4">4월</option>
					<option value="5">5월</option>
					<option value="6">6월</option>
					<option value="7">7월</option>
					<option value="8">8월</option>
					<option value="9">9월</option>
					<option value="10">10월</option>
					<option value="11">11월</option>
					<option value="12">12월</option>
				</select>
			</div>

			<WorkList list={list} />

			<ItemViewer isAdd={itemViewerState.isAdd} item={itemViewerState.item} />
		</Section>
	);
}