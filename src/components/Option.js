import React from "react"

export default function Option({ text, count, handleDeleteOption }) {
  return (
    <div className="option">
      <p className="option__text">
        {count}. {text}
      </p>
      <button
        className="button button--link"
        onClick={() => handleDeleteOption(text)}
      >
        Remove
      </button>
    </div>
  )
}
