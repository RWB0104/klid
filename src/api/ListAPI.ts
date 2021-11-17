/**
 * 리스트 API 모듈
 *
 * @author RWB
 * @since 2021.11.01 Mon 23:29:49
 */

import { WorkItemProps } from '../global/props';
import { API_BASE } from '../global/variable';

const API_URL = `${API_BASE}/list`;

/**
 * 리스트 반환 API 메서드
 *
 * @param {string | number} year: 연
 * @param {string | number} month: 월
 *
 * @returns {Promise<WorkItemProps[]>} 비동기 WorkItemProps[] 객체
 */
export async function getList(year: string | number, month: string | number): Promise<WorkItemProps[]>
{
	const response = await fetch(`${API_URL}/ym/${year}${month === '' ? '' : `/${month}`}`, { method: 'GET' });

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

/**
 * 주별 리스트 반환 API 메서드
 *
 * @param {string | number} year: 연
 * @param {string | number} week: 주
 *
 * @returns {Promise<WorkItemProps[]>} 비동기 WorkItemProps[] 객체
 */
export async function getWeekList(year: string | number, week: string | number): Promise<WorkItemProps[]>
{
	const response = await fetch(`${API_URL}/wk/${year}/${week}`, { method: 'GET' });

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

/**
 * 리스트 추가 응답 반환 API 메서드
 *
 * @param {WorkItemProps} item: 리스트 아이템
 *
 * @returns {Promise<boolean>} 비동기 boolean 객체
 */
export async function postList(item: WorkItemProps): Promise<boolean>
{
	const response = await fetch(`${API_URL}/item`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			type: item.type,
			worker: item.worker,
			description: item.description,
			start: item.start,
			end: item.end
		})
	});

	const { ok } = response;

	return ok;
}

export async function putList(item: WorkItemProps): Promise<string>
{
	const response = await fetch(`${API_URL}/item/${item.seq}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			type: item.type,
			worker: item.worker,
			description: item.description,
			start: item.start,
			end: item.end
		})
	});

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
		return '';
	}
}

export async function deleteList(seq: number): Promise<boolean>
{
	const response = await fetch(`${API_URL}/item/${seq}`, { method: 'DELETE' });

	const { ok } = response;

	return ok;
}