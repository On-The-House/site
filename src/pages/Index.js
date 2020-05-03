import React from 'react'
import App from '@/src/components/App.js'
import { Newsletter } from '@/src/components/Newsletter.js'

export const pathname = '/'

export function load () {
  return {
    state: require('@/data.js')
  }
}

export function view (props) {
  return (
    <App meta={props.meta}>
      <div className="x ac site rel jcc aic">
        <div className='site__cycle fix x top left' data-component='cycle'>
          <div className='cycle__block f fw aic'>
            <div className='cycle__block-single jcb x f fw aic'>
              <span className='caps block js-span mid-active active sch x'>A cocktail of tech &amp;<br />design volunteers</span>
              <span className='caps block js-span sch x'>Sponsoring Business<br />for Free E-commerce</span>
            </div>
            <div className='cycle__block-single jcb x f fw aic'>
              <span className='caps block js-span  mid-active sch x'>Donating Hours in shaken<br />&amp; stirred times</span>
              <span className='caps block js-span sch x'>Accepting Applications<br />For sponsorship</span>
            </div>
          </div>
        </div>
        <div className='p1 site__body'>
          <h1 className='lars caps'>On The House</h1>
          <div className='ac site__cherry p1 m1'>
          <svg width="316" height="290" viewBox="0 0 316 290" fill="none">
            <g>
              <path d="M90.983 188.759C90.7856 188.759 90.5927 188.75 90.3908 188.732C87.1023 188.408 84.7021 185.479 85.0207 182.187C85.1194 181.158 87.5958 156.59 97.7036 122.027C107.035 90.1184 124.927 43.4442 157.174 2.29098C159.211 -0.310021 162.975 -0.763736 165.573 1.27573C168.171 3.3197 168.624 7.08418 166.587 9.68518C135.582 49.2527 118.3 94.2962 109.265 125.113C99.4308 158.656 96.9499 183.107 96.9274 183.355C96.6268 186.445 94.0248 188.759 90.983 188.759Z" fill="#040701"/>
              <path d="M245.089 188.759C241.809 188.759 239.136 186.108 239.109 182.82C238.813 146.572 232.218 122.166 218.947 108.204C207.386 96.0439 191.805 92.4636 175.304 88.6721C156.919 84.445 137.91 80.0785 123.81 63.4124C121.674 60.8877 130.804 53.1476 132.939 55.6678C144.465 69.2927 160.746 73.0347 177.982 76.9968C195.479 81.0174 213.572 85.1772 227.615 99.9476C243.29 116.439 250.746 142.741 251.074 182.721C251.101 186.028 248.445 188.732 245.143 188.759C245.125 188.759 245.107 188.759 245.089 188.759Z" fill="#040701"/>
              <path className='single__cherry' d="M150.032 178.117C135.42 158.733 114.317 161.109 101.692 164.945C94.7067 167.07 87.2504 167.07 80.2607 164.945C67.6362 161.109 46.5324 158.728 31.9204 178.117C5.24908 213.502 23.0195 290 90.9741 290C158.929 290 176.704 213.502 150.032 178.117Z" fill="#FF512B"/>
              <path className='single__cherry-2' d="M304.147 178.117C289.535 158.733 268.431 161.109 255.807 164.945C248.822 167.07 241.365 167.07 234.376 164.945C221.751 161.109 200.647 158.728 186.035 178.117C159.364 213.502 177.134 290 245.089 290C313.044 290 330.814 213.502 304.147 178.117Z" fill="#FF512B"/>
              <g className='single__cherry-l'>
                <path d="M151.342 31.8678C151.468 31.9127 142.594 40.7759 130.05 50.7666C117.331 60.7618 100.938 71.889 82.0687 76.5744C63.1722 81.1475 43.4996 78.8609 27.609 75.8736C11.8664 72.8144 -0.0897134 69.0544 1.34135e-05 68.9556C0.148063 68.996 3.91659 57.186 14.5447 43.4802C24.9979 29.8508 42.3107 14.3256 65.4782 8.71935C88.6142 2.97829 111.131 8.74181 126.685 15.9968C142.437 23.2382 151.23 31.9711 151.342 31.8678Z" fill="#040701"/>
                <path d="M65.4825 8.72301C42.3106 14.3293 24.9978 29.8544 14.5446 43.4793C3.91645 57.1851 0.147927 68.9952 -0.00012207 68.9547C47.3891 46.3723 98.8923 33.7492 151.342 31.8669C151.23 31.9703 142.441 23.2374 126.69 16.0004C111.136 8.74547 88.6186 2.98195 65.4825 8.72301Z" fill="#040701"/>
              </g>
            </g>
          </svg>

          </div>
          <div className='container--s mxa'>
            <p className='sch site__first'>We’re a collective of technology and design volunteers sponsoring anyone that needs help pivoting their business or personal income online during COVID-19.</p>
            <p className='sch'>Using free fonts & resources, volunteered time and compressed timelines: Our goal is to  help people adapt to these unexpected times as quickly & cost-free as possible.</p>
          </div>
        </div>

        <button className='x button p1 caps lars small fix bottom left bcb cw'>
          Apply for Sponsorship
        </button>
      </div>
    </App>
  )
}
