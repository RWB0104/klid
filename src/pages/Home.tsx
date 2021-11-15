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
import PieChart from '../components/home/PieChart';
import CalendarChart from '../components/home/CalendarChart';
import { URL } from '../global/variable';
import '../pages-style/Home.scss';
import { getStatistics } from '../api/StatisticsAPI';
import { date2week, getDateDetail } from '../global/util';
import { TotalChartProps } from '../global/props';
import { getList } from '../api/ListAPI';
import Icon from '@mdi/react';
import { mdiAlertCircleOutline, mdiCheckCircleOutline, mdiHelpCircleOutline, mdiInformationOutline } from '@mdi/js';

interface Props {
	item?: CalendarDatum
}

interface CheckProps {
	isChecked?: boolean
}

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
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '02',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '03',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '04',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '05',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '06',
			list: [
				'상반기 중점점검',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '07',
			list: [
				'GIS 엔진교육 시즌',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '08',
			list: [
				'GIS 엔진교육 시즌',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '09',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '10',
			list: [
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '11',
			list: [
				'하반기 중점점검 (11 ~ 12월)',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
			]
		},
		{
			month: '12',
			list: [
				'준공',
				'하반기 중점점검 (11 ~ 12월)',
				'중앙서버 정기점검 (20 ~ 25일)',
				'지자체 월간점검 (월말)'
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
							<Between item={listState && listState[listState?.length - 1]} />
						</div>
					</div>
				</article>

				<article>
					<div className="wrap">
						<div className="meta">
							<p><b>🔧 정기점검 현황</b></p>
						</div>

						<div className="body" data-article="work">
							<Check item={monthState && monthState[3].value > 0} />
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

/**
 * 업무 경과 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
function Between({ item }: Props): ReactElement
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

function Check({ isChecked = false }: CheckProps):ReactElement
{
	// 정기점검을 완료할 경우
	if (isChecked)
	{
		return (
			<div>
				<Icon path={mdiCheckCircleOutline} size={5} color="limegreen" />
				<p><b data-status="good">D - {calc}</b></p>
			</div>
		);
	}

	// 정기점검을 완료하지 않았을 경우
	else
	{
		const ref = 25;
		const day = getDateDetail().day;

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
					<Icon path={mdiCheckCircleOutline} size={5} color="limegreen" />
					<p><b data-status="good">D - {ref - day}</b></p>
				</div>
			);
		}
	}
}