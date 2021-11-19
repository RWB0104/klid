/**
 * 인덱스 모듈
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:54:28
 */

import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import App from './App';

const root = document.querySelector('main');

root?.hasChildNodes() ? hydrate(<App />, root) : render(<App />, root);