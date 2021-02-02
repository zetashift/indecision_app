import React from "react"

export default function Action({ hasOptions, handleAction }) {
  return (
    <div>
      <button
        className="big-button"
        disabled={!hasOptions}
        onClick={handleAction}
      >
        What should I do?
      </button>
    </div>
  )
}
