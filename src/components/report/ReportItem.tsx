/**
 * 보고서 아이템 컴포넌트
 *
 * @author RWB
 * @since 2021.11.12 Fri 18:11:11
 */

import { ReactElement } from 'react';
import { getDateDetail } from '../../global/util';
import './ReportItem.scss';

interface Props {
	item: string[]
}

/**
 * 보고서 아이템 ReactElement 반환 메서드
 *
 * @param {Props} 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function ReportItem({ item }: Props): ReactElement
{
	const date = item[25] ? getDateDetail(item[25]) : getDateDetail();

	return (
		<article className="report-item">
			<h1>정기점검 내역서</h1>
			<h3>{`${date.year}년 ${date.month}월`}</h3>

			<table className="meta">
				<colgroup>
					<col width="15%" />
					<col width="20%" />
					<col width="20%" />
					<col width="20%" />
					<col width="25%" />
				</colgroup>

				<tbody>
					<tr>
						<td rowSpan={3}>고객사 정보</td>
						<td>기관명</td>
						<td>{item[0] || ''}</td>
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
						<td>{item[1] || ''}</td>
						<td>Web 버전</td>
						<td>6.0.0.2</td>
					</tr>
				</tbody>
			</table>

			<br />

			<table className="body">
				<colgroup>
					<col width="7%" />
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
						<td colSpan={6}><b>IntraMap/Server</b></td>
					</tr>

					<tr>
						<td>1</td>
						<td>네트워크 상태 확인</td>
						<td>./IMapMonitor -con</td>
						<td>Session 갯수</td>
						<td><span>{item[2] || ''}</span></td>
						<td>{item[3] || ''}</td>
					</tr>

					<tr>
						<td>2</td>
						<td>이벤트로그 체크</td>
						<td>로그 확인</td>
						<td>치명적 에러 없음</td>
						<td>{item[4] || ''}</td>
						<td>{item[5] || ''}</td>
					</tr>

					<tr>
						<td>3</td>
						<td>디스크 할당량, 사용량 및 여유공간</td>
						<td>df -g . 혹은 df -h .</td>
						<td>할당량, 사용량 및 여유공간(GB)</td>
						<td colSpan={2}>
							총량: {item[6] || ''}GB<br />
							사용량: {item[7] || ''}GB<br />
							가용량: {item[8] || ''}GB<br />
						</td>
					</tr>

					<tr>
						<td>4</td>
						<td>프로세스 정상 여부</td>
						<td>ps -ef | grep -i imapserver</td>
						<td>적절한 PID</td>
						<td>{item[9] || ''}</td>
						<td>{item[10] || ''}</td>
					</tr>

					<tr>
						<td>5</td>
						<td>ORACLE OCI 버전</td>
						<td>LD_LIBRARY_PATH의 OCI Lib 버전</td>
						<td>9 or 10.2 or 11</td>
						<td>{item[11] || ''}</td>
						<td>{item[12] || ''}</td>
					</tr>

					<tr>
						<td>6</td>
						<td>Log Level</td>
						<td>IMapSvrConf.xml의 Log Level</td>
						<td>1 ~ 5</td>
						<td>{item[13] || ''}</td>
						<td>{item[14] || ''}</td>
					</tr>

					<tr>
						<td>7</td>
						<td>당월 재기동 횟수</td>
						<td>업무시간 모니터링</td>
						<td>월 재기동 횟수</td>
						<td colSpan={2}>{item[29] || ''}</td>
					</tr>

					<tr>
						<td rowSpan={2}>담당</td>
						<td>소속</td>
						<td>(주)한국공간정보통신</td>
						<td>점검일자</td>
						<td colSpan={2}>{item[25] || ''}</td>
					</tr>

					<tr>
						<td>성명</td>
						<td>{item[26] || ''}</td>
						<td>연락처</td>
						<td colSpan={2}>{item[27] || ''}</td>
					</tr>

					<tr>
						<td colSpan={6}><b>IntraMap/Web</b></td>
					</tr>

					<tr>
						<td>8</td>
						<td>이벤트로그 체크</td>
						<td>로그 확인</td>
						<td>치명적 에러 없음</td>
						<td>{item[15] || ''}</td>
						<td>{item[16] || ''}</td>
					</tr>

					<tr>
						<td>9</td>
						<td>디스크 할당량, 사용량 및 여유공간</td>
						<td>df -g . 혹은 df -h .</td>
						<td>할당량, 사용량 및 여유공간(GB)</td>
						<td colSpan={2}>
							총량: {item[17] || ''}GB<br />
							사용량: {item[18] || ''}GB<br />
							가용량: {item[19] || ''}GB<br />
						</td>
					</tr>

					<tr>
						<td>10</td>
						<td>프로세스 정상 여부</td>
						<td>ps -ef | grep -i intramapweb</td>
						<td>적절한 PID</td>
						<td>{item[20] || ''}</td>
						<td>{item[21] || ''}</td>
					</tr>

					<tr>
						<td>11</td>
						<td>Log Level</td>
						<td>intramap.conf의 Log Level</td>
						<td>1 ~ 5</td>
						<td>{item[22] || ''}</td>
						<td>{item[23] || ''}</td>
					</tr>

					<tr>
						<td>12</td>
						<td>당월 재기동 횟수</td>
						<td>업무시간 모니터링</td>
						<td>월 재기동 횟수</td>
						<td colSpan={2}>{item[30] || ''}</td>
					</tr>

					<tr>
						<td>13</td>
						<td>GIS 지도 확인</td>
						<td>WMS 호출 확인</td>
						<td>
							<img src={`/klid/wms/${item[1] || ''}.png`} width="100px" />
						</td>
						<td colSpan={2}>
							<img src={`/klid/wms/${item[1] || ''}.png`} width="100px" />
						</td>
					</tr>

					<tr>
						<td colSpan={2}>점검의견</td>
						<td colSpan={4}>{item[24] || ''}</td>
					</tr>

					<tr>
						<td rowSpan={2}>담당</td>
						<td>소속</td>
						<td>(주)한국공간정보통신</td>
						<td>점검일자</td>
						<td colSpan={2}>{item[28] || ''}</td>
					</tr>

					<tr>
						<td>성명</td>
						<td>{item[26]}</td>
						<td>연락처</td>
						<td colSpan={2}>{item[27] || ''}</td>
					</tr>
				</tbody>
			</table>
		</article>
	);
}