/**
 * 홈 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:06
 */

import React, { ReactElement, useEffect, useState } from 'react';
import { CalendarDatum } from '@nivo/calendar';
import Section from '../components/global/Section';
import Meta from '../components/header/Meta';
import WorkCount from '../components/home/WorkCount';
import CheckCount from '../components/home/CheckCount';
import PieChart from '../components/home/PieChart';
import CalendarChart from '../components/home/CalendarChart';
import { URL } from '../global/variable';
import '../pages-style/Home.scss';
import { getStatistics } from '../api/StatisticsAPI';
import { date2week, getDateDetail } from '../global/util';
import { TotalChartProps } from '../global/props';
import { getList } from '../api/ListAPI';

/**
 * 홈 페이지 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Home(): ReactElement
{
	const [ totalState, setTotalState ] = useState<TotalChartProps[]>();
	const [ monthState, setMonthState ] = useState<TotalChartProps[]>();
	const [ weekState, setWeekState ] = useState<TotalChartProps[]>();

	const [ listState, setListState ] = useState<CalendarDatum[]>();

	const date = getDateDetail();

	useEffect(() =>
	{
		(async() =>
		{
			const list = await getList(date.year, '');
			const statistics = await getStatistics(date.year, date2week(new Date()));

			setTotalState([
				{
					'id': '모니터링',
					'label': '모니터링',
					'value': statistics[0].all.monitor
				},
				{
					'id': 'KAIS',
					'label': 'KAIS',
					'value': statistics[0].all.kais
				},
				{
					'id': '자치단체',
					'label': '자치단체',
					'value': statistics[0].all.city
				},
				{
					'id': '정기점검',
					'label': '정기점검',
					'value': statistics[0].all.check
				},
				{
					'id': '증점개선',
					'label': '증점개선',
					'value': statistics[0].all.develope
				},
				{
					'id': '교육',
					'label': '교육',
					'value': statistics[0].all.educate
				}
			]);

			setMonthState([
				{
					'id': '모니터링',
					'label': '모니터링',
					'value': statistics[1].all.monitor
				},
				{
					'id': 'KAIS',
					'label': 'KAIS',
					'value': statistics[1].all.kais
				},
				{
					'id': '자치단체',
					'label': '자치단체',
					'value': statistics[1].all.city
				},
				{
					'id': '정기점검',
					'label': '정기점검',
					'value': statistics[1].all.check
				},
				{
					'id': '증점개선',
					'label': '증점개선',
					'value': statistics[1].all.develope
				},
				{
					'id': '교육',
					'label': '교육',
					'value': statistics[1].all.educate
				}
			]);

			setWeekState([
				{
					'id': '모니터링',
					'label': '모니터링',
					'value': statistics[2].all.monitor
				},
				{
					'id': 'KAIS',
					'label': 'KAIS',
					'value': statistics[2].all.kais
				},
				{
					'id': '자치단체',
					'label': '자치단체',
					'value': statistics[2].all.city
				},
				{
					'id': '정기점검',
					'label': '정기점검',
					'value': statistics[2].all.check
				},
				{
					'id': '증점개선',
					'label': '증점개선',
					'value': statistics[2].all.develope
				},
				{
					'id': '교육',
					'label': '교육',
					'value': statistics[2].all.educate
				}
			]);

			setListState(list.map(e =>
			{
				const date = getDateDetail(e.start);

				return {
					day: `${date.year}-${date.month}-${date.day}`,
					value: e.start === e.end ? 1 : -1
				};
			}));
		})();
	}, []);

	const event = [
		{
			month: '01',
			list: [
				'착수계',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '02',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '03',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '04',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '05',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '06',
			list: [
				'상반기 중점점검',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '07',
			list: [
				'GIS 엔진교육 시즌',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '08',
			list: [
				'GIS 엔진교육 시즌',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '09',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '10',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '11',
			list: [
				'하반기 중점점검 (11 ~ 12월)',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		},
		{
			month: '12',
			list: [
				'준공',
				'하반기 중점점검 (11 ~ 12월)',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)',
				'전월 기성금 서류 작성'
			]
		}
	];

	return (
		<Section url="home">
			<Meta title="🏠 Home" url="/" image={`${URL}/logo.png`} />

			<div>
				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>🕑 업무 경과</b></p>
						</div>

						<div className="body" data-article="work">
							<WorkCount item={listState && listState[listState?.length - 1]} />
						</div>
					</div>
				</article>

				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>🔧 정기점검 현황</b></p>
						</div>

						<div className="body" data-article="work">
							<CheckCount isChecked={monthState && monthState[3].value > 0} />
						</div>
					</div>
				</article>

				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>📋 {event.find(e => e.month === getDateDetail().month)?.month}월 예정사항</b></p>
						</div>

						<div className="body">
							<ul>
								{event.find(e => e.month === getDateDetail().month)?.list.map((e, i) => <li key={i}>{e}</li>)}
							</ul>
						</div>
					</div>
				</article>

				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>📅 전체 작업 현황</b></p>
						</div>

						<PieChart list={totalState} />
					</div>
				</article>

				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>📆 월간 작업 현황</b></p>
						</div>

						<PieChart list={monthState} />
					</div>
				</article>

				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>🕑 주간 작업 현황</b></p>
						</div>

						<PieChart list={weekState} />
					</div>
				</article>

				<article className="full-width">
					<div className="wrap">
						<div className="meta">
							<p><b>📌 연간 방문 현황</b></p>
						</div>

						<CalendarChart list={listState} />
					</div>
				</article>
			</div>
		</Section>
	);
}