/**
 * 푸터 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 10:13:57
 */

import { mdiGithub, mdiGmail, mdiReact, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import React, { ReactElement } from 'react';
import './Footer.scss';

/**
 * 푸터 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Footer(): ReactElement
{
	const size = 1.2;
	return (
		<footer>
			<div data-name="interact">
				<button className="icon-button" title="github" data-active="github" onClick={() => open('https://github.com/RWB0104')}>
					<Icon path={mdiGithub} color="grey" size={size} />
				</button>

				<button className="icon-button" title="gmail" data-active="gmail" onClick={() => open('mailto:psj2716@gmail.com')}>
					<Icon path={mdiGmail} color="grey" size={size} />
				</button>

				<button className="icon-button" title="project" data-active="project" onClick={() => open('https://project.itcode.dev')}>
					<Icon path={mdiWeb} color="grey" size={size} />
				</button>

				<button className="icon-button" title="blog" data-active="blog" onClick={() => open('https://blog.itcode.dev')}>
					<Icon path={mdiReact} color="grey" size={size} />
				</button>
			</div>

			<div data-name="info">
				<p>💻 Copyright ⓒ RWB 2021.11</p>
			</div>
		</footer>
	);
}