import './badge.scss'
export const Badge = ({badge}) => {
  return (
    <div className='badge'>
      <img src={`./images/${badge.icon}`} alt={badge.title} />
      <h2>{badge.title}</h2>
      <p>{badge.text}</p>
    </div>
  )
}
