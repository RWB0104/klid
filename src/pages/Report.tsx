/**
 * 보고서 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:51
 */

import React, { ReactElement } from 'react';
import Section from '../components/global/Section';
import Meta from '../components/header/Meta';
import { URL } from '../global/variable';

/**
 * 보고서 페이지 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Report(): ReactElement
{
	return (
		<Section url="report">
			<Meta title="📝 Report" url="/report" image={`${URL}/logo.png`} />
		</Section>
	);
}