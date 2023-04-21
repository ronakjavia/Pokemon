import React from 'react'

const Card = ({ id, name, img, type, height, weight, base_exp }) => {
  const style = `thumb-container ${type}`
  return (
    <div className={style}>
      <div className="card-top">
        <div className="number">
          <small>#{id}</small>
        </div>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </div>

      <div className="card-bottom">
        <small>Type: {type}</small>
        <small>Height: {height}</small>
        <small>Weight: {weight}</small>
        <small>Base_Experience: {base_exp}</small>
      </div>
    </div>
  )
}

export default Card
