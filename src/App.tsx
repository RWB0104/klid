/**
 * 애플리케이션 컴포넌트
 *
 * @author RWB
 * @since 2021.10.28 Thu 00:42:55
 */

import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import List from './pages/List';
import Statistics from './pages/Statistics';
import Report from './pages/Report';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

/**
 * 애플리케이션 컴포넌트 ReactElement 반환 메서드
 *
 * @returns {ReactElement} 컴포넌트 ReactElement
 */
export default function App(): ReactElement
{
	return (
		<RecoilRoot>
			<HelmetProvider>
				<BrowserRouter basename="klid">
					<Header />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/list" component={List} />
						<Route path="/statistics" component={Statistics} />
						<Route path="/report" component={Report} />
						<Route path="/" component={Home} />
					</Switch>

					<Footer />
				</BrowserRouter>
			</HelmetProvider>
		</RecoilRoot>
	);
}