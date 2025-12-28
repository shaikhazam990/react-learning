import React from 'react'

const Card = ({ fullName, title, likeCount, views, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={fullName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{fullName}</h2>
        <p className="text-gray-500">{title}</p>

        <div className="flex justify-between mt-3 text-sm">
          <span>❤️ {likeCount}</span>
          <span>👁 {views}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
