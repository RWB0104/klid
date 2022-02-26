/**
 * 차트 에러 컴포넌트
 *
 * @author RWB
 * @since 2021.11.15 Mon 22:45:55
 */

import { ReactElement } from 'react';
import { mdiAlertOctagonOutline } from '@mdi/js';
import Icon from '@mdi/react';

/**
 * 차트 에러 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function ChartError(): ReactElement
{
	return (
		<div className="chart-error">
			<Icon path={mdiAlertOctagonOutline} color="#FF9999" size={7} />
			<h4>차트 렌더링 실패</h4>
		</div>
	);
}