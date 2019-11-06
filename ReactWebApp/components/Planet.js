import React from 'react';

import styles from './Planet.scss';
import logoStyles from './Planet-logo.scss';

export default function Planet(props) {

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313 184">
    <g fill="none" fillRule="evenodd" transform="rotate(-24 162.5 122.08009571)">
      <path d="M169 141C75.6638773 141 0 119.509668 0 93s75.6638773-48 169-48c93.336123 0 169 21.490332 169 48s-75.663877 48-169 48zm.5-34C243.230014 107 303 95.3594035 303 81s-59.769986-26-133.5-26C95.7699859 55 36 66.6405965 36 81s59.7699859 26 133.5 26z"/>
      <circle cx="168.5" cy="91.5" r="91.5"/>
      <path d="M5.32423875 81H36c0 14.3594035 59.7699859 26 133.5 26C243.230014 107 303 95.3594035 303 81h29.675761C336.151436 84.8354391 338 88.8564052 338 93c0 26.509668-75.663877 48-169 48C75.6638773 141 0 119.509668 0 93c0-4.1435948 1.84856438-8.1645609 5.32423875-12z"/>
    </g>
    {!props.logo && <defs>
      <linearGradient id="grad1">
        <stop offset="0%" stopColor="#25c5b4"/>
        <stop offset="100%" stopColor="#0a59ea"/>
      </linearGradient>
    </defs>}
  </svg>;

}