/**
 * 통계 페이지 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:49:37
 */

import React, { ReactElement, useState } from 'react';
import Section from '../components/global/Section';
import { getStatistics } from '../api/StatisticsAPI';
import Meta from '../components/header/Meta';
import MonthTable from '../components/statistics/MonthTable';
import TotalTable from '../components/statistics/TotalTable';
import DetailTable from '../components/statistics/DetailTable';
import { WorkItemProps, StatProps } from '../global/props';
import '../pages-style/Statistics.scss';
import WorkList from '../components/list/WorkList';
import { getWeekList } from '../api/ListAPI';

/**
 * 통계 페이지 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Statistics(): ReactElement
{
	const [ listState, setListState ] = useState<WorkItemProps[]>();

	const [ yearState, setYearState ] = useState<StatProps>();
	const [ monthState, setMonthtate ] = useState<StatProps>();
	const [ presentState, setPresentState ] = useState<StatProps>();
	const [ pastState, setPastState ] = useState<StatProps>();

	return (
		<Section url="statistics" width={1200}>
			<Meta title="📊 Statistics" url="/statistics" />

			<div className="pannel">
				<input type="week" name="week" aria-label="week" onChange={(e) =>
				{
					const [ yr, wk ] = e.target.value.split('-W');

					(async () =>
					{
						const [ year, month, present, past ] = await getStatistics(yr, wk);
						const response = await getWeekList(yr, wk);

						setListState(response);

						setYearState(year);
						setMonthtate(month);
						setPresentState(present);
						setPastState(past);
					})();
				}} />
			</div>

			<div className="stat">
				<div className="full-width">
					<MonthTable stat={monthState} />
				</div>

				<div>
					<TotalTable title="연 현황" stat={yearState} />
				</div>

				<div>
					<TotalTable title="금주 현황" stat={presentState} />
				</div>

				<div>
					<TotalTable title="전주 현황" stat={pastState} />
				</div>

				<div>
					<DetailTable title="연 세부 현황" stat={yearState} />
				</div>

				<div>
					<DetailTable title="금주 세부 현황" stat={presentState} />
				</div>

				<div>
					<DetailTable title="전주 세부 현황" stat={pastState}  />
				</div>

				<div className="full-width">
					<WorkList list={listState} onlyView />
				</div>
			</div>
		</Section>
	);
}