/**
 * 드로퍼 컴포넌트
 *
 * @author RWB
 * @since 2021.11.12 Fri 11:49:40
 */

import { mdiFileDocument } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactElement } from 'react';

export default function Dropper(): ReactElement
{
	return (
		<div>
			<Icon path={mdiFileDocument} size={3} color="grey" />
			asdfasdfasf
		</div>
	);
}