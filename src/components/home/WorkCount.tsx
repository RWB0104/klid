/**
 * 업무 경과 컴포넌트
 *
 * @author RWB
 * @since 2021.11.16 Tue 10:56:37
 */

import React, { ReactElement } from 'react';
import { getDateDetail } from '../../global/util';
import Icon from '@mdi/react';
import { mdiAlertCircleOutline, mdiCheckCircleOutline, mdiHelpCircleOutline, mdiInformationOutline } from '@mdi/js';
import { CalendarDatum } from '@nivo/calendar';

interface Props {
	item?: CalendarDatum
}

/**
 * 업무 경과 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function WorkCount({ item }: Props): ReactElement
{
	// item이 유효한 객체를 가질 경우
	if (item)
	{
		const date = getDateDetail();
		const calc = Math.ceil((new Date(`${date.year}-${date.month}-${date.day}`).getTime() - new Date(item.day).getTime()) / 86400000);

		// 일주일 이하일 경우
		if (calc < 8)
		{
			return (
				<div>
					<Icon path={mdiCheckCircleOutline} size={5} color="limegreen" />
					<p><b data-status="good">D - {calc}</b></p>
				</div>
			);
		}

		// 2주 이하일 경우
		else if (calc < 15)
		{
			return (
				<div>
					<Icon path={mdiInformationOutline} size={5} color="orange" />
					<p><b data-status="warn">D - {calc}</b></p>
				</div>
			);
		}

		// 2주를 넘길 경우
		else
		{
			return (
				<div>
					<Icon path={mdiAlertCircleOutline} size={5} color="orangered" />
					<p><b data-status="bad">D - {calc}</b></p>
				</div>
			);
		}
	}

	// 아닐 경우
	else
	{
		return (
			<div>
				<Icon path={mdiHelpCircleOutline} size={5} color="#FF9999" />
				<p><b data-status="error">D - ???</b></p>
			</div>
		);
	}
}