/**
 * 통계 API 모듈
 *
 * @author RWB
 * @since 2021.11.06 Sat 03:26:36
 */

import { StatProps } from '../global/props';

const API_URL = 'https://api.itcode.dev/klid/api/statistics';

/**
 * 통계 반환 API 메서드
 *
 * @param {string | number} year
 * @param {string | number} month
 * @param {string | number} day
 *
 * @returns {Promise<StatProps[]>} 비동기 StatProps[] 객체
 */
export async function getStatistics(year: string | number, week: string | number): Promise<StatProps[]>
{
	const response = await fetch(`${API_URL}/${year}/${week}`, { method: 'GET' });

	const { ok } = response;
	const json = await response.json();

	// 정상 응답일 경우
	if (ok)
	{
		return json.body;
	}

	// 정상 응답이 아닐 경우
	else
	{
		return [];
	}
}