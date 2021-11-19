/**
 * 유틸 모듈
 *
 * @author RWB
 * @since 2021.11.17 Wed 22:45:53
 */

import { DateProps } from './props';

/**
 * 날짜 및 시간 정보 반환 함수
 *
 * @param {string | number | Date} raw: 날짜 및 시간 데이터 (yyyy-MM-ddTHH:mm:ss)
 *
 * @returns {DateProps} DateProps
 */
export function getDateDetail(raw?: string | number | Date): DateProps
{
	const date = raw === undefined ? new Date() : (raw instanceof Date ? raw : new Date(raw));
	const weeks = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

	return {
		year: date.getFullYear().toString(),
		month: (date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : `0${(date.getMonth() + 1)}`,
		day: date.getDate() > 9 ? date.getDate().toString() : `0${date.getDate()}`,
		week: weeks[date.getDay()],
		hour: date.getHours() > 9 ? date.getHours().toString() : `0${date.getHours()}`,
		minute: date.getMinutes() > 9 ? date.getMinutes().toString() : `0${date.getMinutes()}`,
		second: date.getSeconds() > 9 ? date.getSeconds().toString() : `0${date.getSeconds()}`
	};
}

/**
 * 주 번호 -> 날짜 객체 변환 메서드
 *
 * @param {number} year: 연
 * @param {number} week: 주 번호
 * @param {number} dayFlag: 날짜 기준 (0: 월요일 ~ 7: 일요일)
 *
 * @returns {Date} 날짜 객체
 */
export function week2date(year: number, week: number, dayFlag: number): Date
{
	const j10 = new Date(year, 0, 10, 12, 0, 0);
	const j4 = new Date(year, 0, 4, 12, 0, 0);
	const mon1 = j4.getTime() - j10.getDay() * 86400000;

	return new Date(mon1 + ((week - 1)  * 7  + dayFlag) * 86400000);
}

/**
 * 날짜 -> 주 번호 객체 변환 메서드
 *
 * @param {Date} date: 날짜 객체
 *
 * @returns {number} 주 번호
 */
export function date2week(date: Date): number
{
	const tdt = new Date(date.valueOf());
	const dayn = (date.getDay() + 6) % 7;

	tdt.setDate(tdt.getDate() - dayn + 3);

	const firstThursday = tdt.valueOf();

	tdt.setMonth(0, 1);

	if (tdt.getDay() !== 4)
	{
		tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
	}

	return 1 + Math.ceil((firstThursday - tdt.getTime()) / 604800000);
}