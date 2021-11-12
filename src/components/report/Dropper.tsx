/**
 * 드로퍼 컴포넌트
 *
 * @author RWB
 * @since 2021.11.12 Fri 11:49:40
 */

import { mdiDownload, mdiFileDocument, mdiFileSearch } from '@mdi/js';
import Icon from '@mdi/react';
import { ReactElement } from 'react';
import './Dropper.scss';

export default function Dropper(): ReactElement
{
	return (
		<div id="dropper"
			onDrop={(e) =>
			{
				e.preventDefault();

				const data = e.dataTransfer.files[0];

				if (data)
				{
					csv2arr(data);
				}
			}}

			onDragOver={(e) =>
			{
				e.preventDefault();
			}}
		>
			<Icon path={mdiFileDocument} size={3} />

			<p>CSV 양식을 Drag &amp; Drop 하거나, 아래의 버튼을 클릭해서 파일을 선택하세요.</p>

			<input type="file" onChange={(e) =>
			{
				e.preventDefault();

				if (e.target !== null)
				{
					const file = e.target.files;

					if (file)
					{
						csv2arr(file[0]);
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

function csv2arr(file: File)
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
				if (e.target)
				{
					const text = e.target.result as string;
					const arr = text.split('\r\n').map(e => e.split(','));

					console.dir(arr);
				}
			};
		}

		// 아닐 경우
		else
		{

		}
	}
}