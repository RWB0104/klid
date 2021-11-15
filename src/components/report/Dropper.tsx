/**
 * 드로퍼 컴포넌트
 *
 * @author RWB
 * @since 2021.11.12 Fri 11:49:40
 */

import { mdiDownload, mdiFileDocument, mdiFileSearch } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactElement } from 'react';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { reportAtom } from '../../global/state';
import './Dropper.scss';

interface ReportProps {
	flag: boolean,
	list: string[][]
}

/**
 * 드로퍼 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function Dropper(): ReactElement
{
	const setReportState = useSetRecoilState(reportAtom);

	return (
		<div id="dropper"
			onDrop={(e) =>
			{
				e.preventDefault();

				const data = e.dataTransfer.files[0];

				// data가 유효한 객체를 가질 경우
				if (data)
				{
					csv2arr(data, setReportState);
				}
			}}

			onDragOver={(e) =>
			{
				e.preventDefault();
			}}
		>
			<p>
				<Icon path={mdiFileDocument} size={3} />
			</p>

			<p>CSV 양식을 Drag &amp; Drop 하거나, 아래의 버튼을 클릭해서 파일을 선택하세요.</p>

			<input type="file" onChange={(e) =>
			{
				e.preventDefault();

				// e.target이 유효한 객체를 가질 경우
				if (e.target)
				{
					const file = e.target.files;

					// file이 유효한 객체를 가질 경우
					if (file)
					{
						csv2arr(file[0], setReportState);
					}
				}
			}} />

			<div>
				<button className="icon-button" data-active="download" onClick={() => open('/klid/sheet.csv')}>
					<Icon path={mdiDownload} size={0.75} /> 양식 다운로드
				</button>

				<button className="icon-button" data-active="choose" onClick={() =>
				{
					// document가 유효한 객체를 가질 경우
					if (document)
					{
						const file: HTMLInputElement | null = document.querySelector('input[type="file"]');

						// file이 유효한 객체를 가질 경우
						if (file)
						{
							file.accept = '.csv';
							file.click();
						}
					}
				}}>
					<Icon path={mdiFileSearch} size={0.75} /> 파일 선택하기
				</button>
			</div>
		</div>
	);
}

/**
 * CSV to 배열 변환 및 반환 메서드
 *
 * @param {File} file: 파일 객체
 * @param {ReportProps}
 */
function csv2arr(file: File, setter: SetterOrUpdater<ReportProps>)
{
	if (file)
	{
		const reader = new FileReader();
		const extension = file.name.split('.').pop() as string;
		const isAllow = [ 'csv' ].indexOf(extension) !== -1;

		// 허용된 확장자일 경우
		if (isAllow)
		{
			reader.readAsText(file, 'EUC-KR');
			reader.onload = (e) =>
			{
				// e.target이 유효한 객체를 가질 경우
				if (e.target)
				{
					const text = e.target.result as string;
					const arr = text.split('\r\n').map(e => e.split(',')).slice(1);

					setter({
						flag: true,
						list: arr
					});
				}

				// 아닐 경우
				else
				{

				}
			};
		}

		// 아닐 경우
		else
		{
			alert('지원하지 않는 확장자');
		}
	}
}