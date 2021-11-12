/**
 * 보고서 아이템 컴포넌트
 *
 * @author RWB
 * @since 2021.11.12 Fri 18:11:11
 */

import { ReactElement } from 'react';

export default function ReportItem(): ReactElement
{
	return (
		<article className="report-item">
			<h1>정기점검 내역서</h1>
			<h3>{'기준 날짜'}</h3>

			<table>
				<colgroup>
					<col width="15%" />
					<col width="20%" />
					<col width="20%" />
					<col width="20%" />
					<col width="25%" />
				</colgroup>

				<tbody>
					<tr>
						<td rowspan="3">고객사 정보</td>
						<td>기관명</td>
						<td>{'시군구'}</td>
						<td>대상시스템</td>
						<td>국가주소정보시스템</td>
					</tr>

					<tr>
						<td>제품명</td>
						<td>GIS 엔진</td>
						<td>Server 버전</td>
						<td>2.1.5.9</td>
					</tr>

					<tr>
						<td>자치단체 ID</td>
						<td>{'코드'}</td>
						<td>Web 버전</td>
						<td>6.0.0.2</td>
					</tr>
				</tbody>
			</table>

			<table>
				<colgroup>
					<col width=" 7%" />
					<col width="20%" />
					<col width="25%" />
					<col width="22%" />
					<col width="19%" />
					<col width="7%" />
				</colgroup>

				<thead>
					<tr>
						<th>번호</th>
						<th>점검항목</th>
						<th>점검방법</th>
						<th>기준값</th>
						<th>점검값</th>
						<th>정상</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td colspan="6">IntraMap/Server</td>
					</tr>

					<tr>
						<td>1</td>
						<td>네트워크 상태 확인</td>
						<td>./IMapMonitor -con</td>
						<td>Session 갯수</td>
						<td><span>{'세션'}</span></td>
						<td>{'C1'}</td>
					</tr>

					<tr>
						<td>2</td>
						<td>이벤트로그 체크</td>
						<td>로그 확인</td>
						<td>치명적 에러 없음</td>
						<td>{'서버 이벤트'}</td>
						<td>{'C2'}</td>
					</tr>

					<tr>
						<td>3</td>
						<td>디스크 할당량, 사용량 및 여유공간</td>
						<td>df -g . 혹은 df -h .</td>
						<td>할당량, 사용량 및 여유공간(GB)</td>
						<td colspan="2">
							총량: {'서버 총량'}GB<br />
							사용량: {'서버 사용량'}GB<br />
							가용량: {'서버 가용량'}GB<br />
						</td>
					</tr>

					<tr>
						<td>4</td>
						<td>프로세스 정상 여부</td>
						<td>ps -ef | grep -i imapserver</td>
						<td>적절한 PID</td>
						<td>{'PID'}</td>
						<td>{'C4'}</td>
					</tr>
				</tbody>
			</table>
		</article>
	);
}