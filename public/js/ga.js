/**
 * Google Analytics 자바스크립트
 *
 * @author RWB
 * @since 2022.02.25 Fri 17:38:33
 */

/**
 * GA 동작 함수
 */
function gtag()
{
	dataLayer.push(arguments);
}

window.dataLayer = window.dataLayer || [];

gtag('js', new Date());
gtag('config', 'G-1YPNLPR0CQ');