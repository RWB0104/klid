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