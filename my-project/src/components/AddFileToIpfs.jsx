import { MdCloudUpload } from "react-icons/md";
import { makeFileObjects, storeFiles } from "../web3Storage";

function AddFileToIpfs({ files, setUploadedFileCids }) {
  const uploadFilesToWeb3 = () => {
    // const files = makeFileObjects();
    storeFiles(files)
      .then((cid) => {
        console.log("resolved", cid);
        setUploadedFileCids((prevState) => [...prevState, cid]);
      })
      .catch((err) => console.log("rejected", err.message));
  };

  return (
    <button
      onClick={uploadFilesToWeb3}
      className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <MdCloudUpload className="fill-current" size="1.4em" />
      <span>Add to IPFS</span>
    </button>
  );
}

export default AddFileToIpfs;
