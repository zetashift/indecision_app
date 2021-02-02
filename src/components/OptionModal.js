import React from "react"
import Modal from "react-modal"

export default function OptionModal({ selectedOption, handleOptionModal }) {
  return (
    <Modal
      className="modal"
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleOptionModal}
      closeTimeoutMS={200}
    >
      <h3 className="modal__title">Selected Option:</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={handleOptionModal}>
        Okay
      </button>
    </Modal>
  )
}
