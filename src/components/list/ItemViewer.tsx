/**
 * 업무 아이템 뷰어 컴포넌트
 *
 * @author RWB
 * @since 2021.11.02 Tue 23:45:56
 */

import { mdiBookEdit, mdiClose, mdiDeleteOff, mdiFileUpload } from '@mdi/js';
import Icon from '@mdi/react';
import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { deleteList, postList, putList } from '../../api/ListAPI';
import { WorkItemProps } from '../../global/props';
import { defaultItemViewerState, itemViewerAtom } from '../../global/state';
import { getDateDetail } from '../../global/util';
import './ItemViewer.scss';

interface Props {
	isAdd: boolean,
	item: WorkItemProps
}

/**
 * 업무 아이템 뷰어 ReactElement 반환 메서드
 *
 * @param {Props} props: 프로퍼티
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function ItemViewer({ isAdd, item }: Props): ReactElement
{
	const [ itemViewerState, setItemViewerState ] = useRecoilState(itemViewerAtom);

	const startDate = getDateDetail(item.start);
	const endDate = getDateDetail(item.end);

	return (
		<article id="itemviewer" data-show={itemViewerState.flag} onClick={(e) =>
		{
			const { id } = e.target as HTMLElement;

			// itemviewer를 클릭했을 경우
			if (id === 'itemviewer')
			{
				setItemViewerState({ flag: false, isAdd: isAdd, item: defaultItemViewerState });
			}
		}}>
			<div>
				<div className="top">
					<button data-active="close" onClick={() => setItemViewerState({ flag: false, isAdd: isAdd, item: defaultItemViewerState })}>
						<Icon path={mdiClose} color="grey" size={0.75} />
					</button>
				</div>

				<form onSubmit={(e) =>
				{
					e.preventDefault();

					(async () =>
					{
						const { submitter } = e.nativeEvent as SubmitEvent;

						if (submitter?.getAttribute('data-active'))
						{
							const active = submitter.getAttribute('data-active');

							switch (active)
							{
								case 'create':
									const createResult = await postList(itemViewerState.item);

									// 생성 결과가 정상일 경우
									if (createResult)
									{
										setItemViewerState({ flag: false, isAdd: isAdd, item: defaultItemViewerState });
									}

									// 생성 결과가 비정상일 경우
									else
									{
										alert('생성 실패');
									}

									break;

								case 'update':
									const putResult = await putList(itemViewerState.item);

									// 갱신 결과가 정상일 경우
									if (putResult !== '')
									{
										setItemViewerState({ flag: false, isAdd: isAdd, item: defaultItemViewerState });
									}

									// 갱신 결과가 비정상일 경우
									else
									{
										alert('갱신 실패');
									}

									break;

								case 'delete':
									const deleteResult = await deleteList(itemViewerState.item.seq);

									// 삭제 결과가 정상일 경우
									if (deleteResult)
									{
										setItemViewerState({ flag: false, isAdd: isAdd, item: defaultItemViewerState });
									}

									// 삭제 결과가 비정상일 경우
									else
									{
										alert('삭제 실패');
									}

									break;
							}
						}
					})();
				}}>
					<div className="full-width">
						<p>No. {item.seq === -1 ? 'New' : item.seq}</p>
					</div>

					<div>
						<label htmlFor="type">타입<span>*</span></label>

						<select name="type" value={item.type} onChange={(e) => setItemViewerState({
							flag: itemViewerState.flag,
							isAdd,
							item: {
								seq: itemViewerState.item.seq,
								type: e.target.value,
								worker: itemViewerState.item.worker,
								description: itemViewerState.item.description,
								start: itemViewerState.item.start,
								end: itemViewerState.item.end
							}
						})}>
							<option value="모니터링">모니터링</option>
							<option value="KAIS 기술지원">KAIS 기술지원</option>
							<option value="자치단체 기술지원">자치단체 기술지원</option>
							<option value="정기점검">정기점검</option>
							<option value="중점개선">중점개선</option>
							<option value="교육">교육</option>
						</select>
					</div>

					<div>
						<label htmlFor="worker">담당자<span>*</span></label>
						<input name="worker" type="text" placeholder="담당자" value={item.worker} required onChange={(e) => setItemViewerState({
							flag: itemViewerState.flag,
							isAdd,
							item: {
								seq: itemViewerState.item.seq,
								type: itemViewerState.item.type,
								worker: e.target.value,
								description: itemViewerState.item.description,
								start: itemViewerState.item.start,
								end: itemViewerState.item.end
							}
						})} />
					</div>

					<div>
						<label htmlFor="start">수행일자<span>*</span></label>
						<input name="start" type="date" value={`${startDate.year}-${startDate.month}-${startDate.day}`} onChange={(e) => setItemViewerState({
							flag: itemViewerState.flag,
							isAdd,
							item: {
								seq: itemViewerState.item.seq,
								type: itemViewerState.item.type,
								worker: itemViewerState.item.worker,
								description: itemViewerState.item.description,
								start: new Date(e.target.value).getTime(),
								end: itemViewerState.item.end
							}
						})} />
					</div>

					<div>
						<label htmlFor="end">완료일자<span>*</span></label>
						<input name="end" type="date" value={`${endDate.year}-${endDate.month}-${endDate.day}`} onChange={(e) => setItemViewerState({
							flag: itemViewerState.flag,
							isAdd,
							item: {
								seq: itemViewerState.item.seq,
								type: itemViewerState.item.type,
								worker: itemViewerState.item.worker,
								description: itemViewerState.item.description,
								start: itemViewerState.item.start,
								end: new Date(e.target.value).getTime()
							}
						})} />
					</div>

					<div className="full-width">
						<label htmlFor="description">내용</label>
						<input name="description" type="text" placeholder="내용" value={item.description} onChange={(e) => setItemViewerState({
							flag: itemViewerState.flag,
							isAdd,
							item: {
								seq: itemViewerState.item.seq,
								type: itemViewerState.item.type,
								worker: itemViewerState.item.worker,
								description: e.target.value,
								start: itemViewerState.item.start,
								end: itemViewerState.item.end
							}
						})} />
					</div>

					{interactive(isAdd)}
				</form>
			</div>
		</article>
	);
}

/**
 * 업무 아이템 뷰어 상호작용 ReactElement 반환 메서드
 *
 * @param {boolean} isAdd: 추가 모드 여부
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
function interactive(isAdd: boolean): ReactElement
{
	return isAdd ? (
		<div className="full-width interactive">
			<button className="icon-button" data-active="create">
				<Icon path={mdiFileUpload} color="white" size={0.75} /> 추가
			</button>
		</div>
	) : (
		<div className="full-width interactive">
			<button className="icon-button" data-active="update">
				<Icon path={mdiBookEdit} color="white" size={0.75} /> 수정
			</button>

			<button className="icon-button" data-active="delete">
				<Icon path={mdiDeleteOff} color="white" size={0.75} /> 삭제
			</button>
		</div>
	);
}