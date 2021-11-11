/**
 * 홈 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:06
 */

import React, { ReactElement } from 'react';
import Section from '../components/global/Section';
import Meta from '../components/header/Meta';
import { URL } from '../global/variable';
import '../pages-style/Home.scss';

/**
 * 홈 페이지 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Home(): ReactElement
{
	return (
		<Section url="home">
			<Meta title="🏠 Home" url="/" image={`${URL}/logo512.png`} />
			Home
		</Section>
	);
}