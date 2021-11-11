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
	url: string,
	image: string
}

/**
 * 메타 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Meta({ title, description = '도로명주소 업무 시스템', url, image }: Props): ReactElement
{
	const fullTitle = `${title} - ${SITE_NAME}`;

	return (
		<Helmet>
			<meta name="description" content={description} />

			<meta name="og:site_name" content={SITE_NAME} />
			<meta name="og:title" content={fullTitle} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={`${URL}${url}`} />
			<meta name="og:locale" content="ko_KR" />
			<meta name="og:image" content={image} />

			<title>{fullTitle}</title>
		</Helmet>
	);
}