/* eslint-disable react/prop-types */
import '../styles/ProfileCard.css'
import { ProfileCardOption } from './ProfileCardOption.jsx'

export function ProfileCard ({ stat, setStat }) {
  return (
    <div className='profile-card'>
      <div className='profile-card-top'>
        <img
          className='profile-card-user-picture'
          src='/images/image-jeremy.png'
          alt='Jeremy'
        />
        <p className='profile-card-user-info'>
          <span className='profile-card-user-txt'>Report for</span>
          <span className='profile-card-user-name'>Jeremy Robson</span>
        </p>
      </div>
      <nav className='profile-card-bottom'>
        <ul className='profile-card-ul'>
          <ProfileCardOption stat={stat} setStat={setStat}>Daily</ProfileCardOption>
          <ProfileCardOption stat={stat} setStat={setStat}>Weekly</ProfileCardOption>
          <ProfileCardOption stat={stat} setStat={setStat}>Monthly</ProfileCardOption>
        </ul>
      </nav>
    </div>
  )
}
