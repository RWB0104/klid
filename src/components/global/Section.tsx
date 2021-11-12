/**
 * 섹션 컴포넌트
 *
 * @author RWB
 * @since 2021.10.29 Fri 00:26:07
 */

import React, { ReactElement } from 'react';
import './Section.scss';

interface Props {
	url?: string,
	width?: number | string
	children: any
}

/**
 * 섹션 ReactElement 반환 메서드
 *
 * @param {Props} props: 컴포넌트 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Section({ url, width, children }: Props): ReactElement
{
	return (
		<section data-section={url} style={{ maxWidth: width ? width : 1024 }}>
			{children}
		</section>
	);
}