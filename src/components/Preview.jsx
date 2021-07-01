import React, { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext'
import './Preview.css'
import marked from 'marked'
import parse from "html-react-parser";

const Preview = () => {
    marked.setOptions({
      breaks: true,
    });
    const {text}  = useContext(GlobalContext)
    const html = marked(text)

    console.log(text, "the text");
    console.log(html, 'the html');
    return (
      <div className="preview" id="preview">
        {parse(html)}
      </div>
    );
}

export default Preview
