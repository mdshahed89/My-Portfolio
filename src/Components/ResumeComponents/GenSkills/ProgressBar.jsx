import React from 'react'

function ProgressBar({progress}) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className={`bg-[#0E46A3] h-2 sm:h-4 rounded-full`}
        style={{ width: `${progress}%` }}
        ></div>
    </div>
  )
}

export default ProgressBar