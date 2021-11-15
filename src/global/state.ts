/**
 * 상태 모듈
 *
 * @author RWB
 * @since 2021.11.03 Wed 00:25:17
 */

import { atom } from 'recoil';

export const defaultItemViewerState = {
	seq: -1,
	type: '모니터링',
	worker: '',
	description: '',
	start: new Date().getTime(),
	end: new Date().getTime()
};

export interface ReportState {
	flag: boolean,
	list: string[][]
}

export const itemViewerAtom = atom({
	key: 'itemViewerState',
	default: {
		flag: false,
		isAdd: false,
		item: defaultItemViewerState
	}
});

export const itemViewerModeAtom = atom({
	key: 'itemViewerModeState',
	default: false
});

export const reportAtom = atom({
	key: 'reportState',
	default: {
		flag: false,
		list: new Array([]) as string[][]
	}
});