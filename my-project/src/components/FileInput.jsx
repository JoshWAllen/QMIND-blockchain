import React, { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";

const FileInput = ({ files, setFiles }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <label className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <input type="file" className="hidden" onChange={setFiles} multiple />
          <AiFillFileAdd className="fill-current" size="1.25em" />
          Upload Files
        </label>
        <div className="mx-3">
          {files.length > 0 ? (
            <ul>
              {[...files].map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          ) : (
            <p>No files selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
