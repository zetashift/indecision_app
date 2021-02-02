import React from "react"
import Option from "./Option"

export default function Options({ options, clearOptions, handleDeleteOption }) {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your To-Do's</h3>
        {
          <button className="button button--link" onClick={clearOptions}>
            Remove All
          </button>
        }
      </div>
      <div>
        {options.length === 0 && (
          <p className="widget__message">Please add an option to get started</p>
        )}
        {options.map((option, idx) => (
          <Option
            key={option}
            text={option}
            count={idx + 1}
            handleDeleteOption={handleDeleteOption}
          />
        ))}
      </div>
    </div>
  )
}
