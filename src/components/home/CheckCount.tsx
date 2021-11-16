/**
 * 업무 경과 컴포넌트
 *
 * @author RWB
 * @since 2021.11.16 Tue 10:56:37
 */

import React, { ReactElement } from 'react';
import { getDateDetail } from '../../global/util';
import Icon from '@mdi/react';
import { mdiAlertCircleOutline, mdiCheckCircleOutline, mdiProgressWrench } from '@mdi/js';

interface Props {
	isChecked?: boolean
}

/**
 * 업무 경과 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function CheckCount({ isChecked = false }: Props):ReactElement
{
	// 정기점검을 완료할 경우
	if (isChecked)
	{
		return (
			<div>
				<Icon path={mdiCheckCircleOutline} size={5} color="limegreen" />
				<p><b data-status="good">DONE</b></p>
			</div>
		);
	}

	// 정기점검을 완료하지 않았을 경우
	else
	{
		const ref = 25;
		const day = parseInt(getDateDetail().day);

		// 25일이 지났을 경우
		if (day > ref)
		{
			return (
				<div>
					<Icon path={mdiAlertCircleOutline} size={5} color="orangered" />
					<p><b data-status="bad">D + {day - ref}</b></p>
				</div>
			);
		}

		// 25일이 지나지 않았을 경우
		else
		{
			return (
				<div>
					<Icon path={mdiProgressWrench} size={5} />
					<p><b>D - {ref - day}</b></p>
				</div>
			);
		}
	}
}