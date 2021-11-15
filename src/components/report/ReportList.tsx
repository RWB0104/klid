/**
 * 보고서 리스트 컴포넌트
 *
 * @author RWB
 * @since 2021.11.15 Mon 23:03:16
 */

import { ReactElement } from 'react';
import ReportItem from './ReportItem';
import './ReportList.scss';

interface Props {
	list?: string[][]
}

/**
 * 보고서 리스트 ReactElement 반환 메서드
 *
 * @param {Props} 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function ReportList({ list }: Props): ReactElement
{
	return (
		<div id="report-list">
			{list?.map((e, index) => <ReportItem key={index} item={e} />)}
		</div>
	);
}