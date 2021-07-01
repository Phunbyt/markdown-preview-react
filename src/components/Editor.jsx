import React, { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext';
import './Editor.css'
const Editor = () => {
    const {handleUpdate, text} = useContext(GlobalContext)
    return (
      <textarea
        id="editor"
        onChange={handleUpdate}
        rows="4"
        cols="50"
        value={text}
      ></textarea>
    );
}

export default Editor
