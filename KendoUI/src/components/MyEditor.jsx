import React from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
function MyEditor() {
  return (
    <div>
      <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic, EditorTools.Underline]]}
        resizable={true}
        style={{ resize: "vertcal", marginTop: "20px" }}
      />
    </div>
  );
}

export default MyEditor;
