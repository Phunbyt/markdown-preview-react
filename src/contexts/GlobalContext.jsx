import React, { createContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [text, setText] = useState(
    "Markdown syntax typed into the first pane will be automatically converted to HTML and rendered in the second pane. Go ahead, give it a try!  \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log('Hello world!');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest. -Isaac Asimov \n\n---\n#### Image:  \n![alt text](https://avatars2.githubusercontent.com/u/9892522?s=100&v=4 'freeCodeCamp Avatar')  \n\n---\n#### Formatted text:\nAs **bolded** or *emphasized* text."
  );
  const handleUpdate = (e) => {
    setText(e.target.value);
  };
  const contexts = {
    text,
    setText,
    handleUpdate,
  };
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};
