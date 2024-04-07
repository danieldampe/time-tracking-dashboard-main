import { useCallback } from 'react'
import '../styles/Card.css'
import kebabCase from 'lodash.kebabcase'

/* eslint-disable react/prop-types */
export function Card ({ title, stat, timeframes }) {
  const txt = useCallback((stat) => {
    if (stat === 'daily') {
      return 'day'
    } else if (stat === 'weekly') {
      return 'week'
    } else {
      return 'month'
    }
  }, [])

  return (
    <div
      className={`card card-${kebabCase(title)}`}
      style={{ backgroundColor: `var(--c-${kebabCase(title)})` }}
    >
      <div
        className='card-top'
        style={{ backgroundColor: `var(--c-${kebabCase(title)})` }}
      >
        <img
          className='card-icon'
          src={`/images/icon-${kebabCase(title)}.svg`}
          alt={title + ' icon'}
        />
      </div>
      <div className='card-bottom'>
        <div className='card-hdr'>
          <h3 className='card-title'>{title}</h3>
          <img className='card-ellipsis' src='/images/icon-ellipsis.svg' alt='Ellipsis' />
        </div>
        <div className='card-body'>
          <p className='card-current'>
            {timeframes[stat].current}hrs
          </p>
        </div>
        <div className='card-ftr'>
          <p className='card-previus'>
            Last {txt(stat)} - {timeframes[stat].previous}hrs
          </p>
        </div>
      </div>
    </div>
  )
}
