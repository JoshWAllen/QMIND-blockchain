import FileInput from "./FileInput";
import IpfsCIDCard from "./IpfsFileCard";
import AddFileToIpfs from "./AddFileToIpfs";
import { useState } from "react";

function Storage() {
  const [uploadedFileCids, setUploadedFileCids] = useState([]);
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    setFiles(event.target.files);
  };

  return (
    <div>
      <FileInput files={files} setFiles={handleChange} />

      <AddFileToIpfs files={files} setUploadedFileCids={setUploadedFileCids} />

      <h1 className="mt-2 text-2xl">Added Content Identifiers (CIDs):</h1>
      <div className="flex flex-col items-center">
        {uploadedFileCids.length ? (
          uploadedFileCids.map((file) => (
            <div key={file}>
              <IpfsCIDCard CID={file} />
            </div>
          ))
        ) : (
          <h2>No Files</h2>
        )}
      </div>
    </div>
  );
}

export default Storage;
