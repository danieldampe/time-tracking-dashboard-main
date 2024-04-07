import './App.css'
import { useEffect, useState } from 'react'
import { ProfileCard } from './components/ProfileCard.jsx'
import { Card } from './components/Card.jsx'
import { Attribution } from './components/Attribution.jsx'

export default function App () {
  const [stat, setStat] = useState('weekly')
  const [cards, setCards] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await fetch('./data/data.json')
      const data = await res.json()
      setCards(data)
    })()
  }, [])

  return (
    <>
      <main className='time-tracking-dashboard'>
        <ProfileCard
          stat={stat}
          setStat={setStat}
        />
        {cards?.map(card => (
          <Card
            key={card.id}
            title={card.title}
            timeframes={card.timeframes}
            stat={stat}
          />
        ))}
      </main>
      <Attribution />
    </>
  )
}
