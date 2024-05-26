import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTaskAction } from "../redux/slice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const EditTask = ({ item }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [editedTask, setEditedTask] = useState(item.task);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedItem = {
      id: item.id,
      task: editedTask,
      isDone: item.isDone,
    };
    dispatch(editTaskAction(editedItem))
    closeModal()
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} >  
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <div>
            <button onClick={closeModal}>Cancel</button>
            <button type="submit">Confirme</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
