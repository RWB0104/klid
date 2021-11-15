/**
 * 헤더 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:54:03
 */

import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { reportAtom } from '../../global/state';
import './Header.scss';

/**
 * 헤더 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Header(): ReactElement
{
	const setReportState = useSetRecoilState(reportAtom);

	return (
		<header>
			<div className="title">
				<img src="/klid/logo.png" />
				<b>도로명주소 업무 시스템</b>
			</div>

			<div className="menu">
				<Link to="/" data-path="home" onClick={() => setReportState({ flag: false, list: new Array([]) })}><span>🏠</span> <span>Home</span></Link>
				<Link to="/list" data-path="list" onClick={() => setReportState({ flag: false, list: new Array([]) })}><span>📋</span> <span>List</span></Link>
				<Link to="/statistics" data-path="statistics" onClick={() => setReportState({ flag: false, list: new Array([]) })}><span>📊</span> <span>Statistics</span></Link>
				<Link to="/report" data-path="report" onClick={() => setReportState({ flag: false, list: new Array([]) })}><span>📝</span> <span>Report</span></Link>
			</div>
		</header>
	);
}