/**
 * 보고서 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:51
 */

import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import Section from '../components/global/Section';
import Meta from '../components/header/Meta';
import Dropper from '../components/report/Dropper';
import ReportList from '../components/report/ReportList';
import { reportAtom } from '../global/state';
import { URL } from '../global/variable';
import '../pages-style/Report.scss';

/**
 * 보고서 페이지 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Report(): ReactElement
{
	const [ reportState, setReportState ] = useRecoilState(reportAtom);

	return (
		<Section url="report" width="100%">
			<Meta title="📝 Report" url="/report" image={`${URL}/logo.png`} />

			{!reportState.flag ? <Dropper /> : <ReportList list={reportState.list} />}
		</Section>
	);
}