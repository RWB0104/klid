/**
 * 메타 컴포넌트
 *
 * @author RWB
 * @since 2021.10.29 Fri 09:23:34
 */

import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, URL } from '../../global/variable';
import './Header.scss';

interface Props {
	title: string,
	description?: string,
	url: string
}

/**
 * 메타 컴포넌트 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Meta({ title, description = '도로명주소 업무 시스템', url }: Props): ReactElement
{
	const fullTitle = `${title} - ${SITE_NAME}`;

	return (
		<Helmet>
			<meta name="description" content={description} />

			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`${URL}${url}`} />
			<meta property="og:locale" content="ko_KR" />
			<meta property="og:image" content="https://user-images.githubusercontent.com/50317129/155682455-98d30d63-d608-4190-a6f1-2d89868c62ba.png" />

			<link rel="canonical" href={`${URL}${url}`} />

			<title>{fullTitle}</title>

			<script async src="https://www.googletagmanager.com/gtag/js?id=G-1YPNLPR0CQ"></script>
			<script src="https://project.itcode.dev/js/ga.js"></script>
		</Helmet>
	);
}