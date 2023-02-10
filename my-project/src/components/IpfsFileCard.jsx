function IpfsFileCard({ CID }) {
  return (
    <div className="w-full p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center">
      <h2 className="mb-2 text-lg tracking-tight break-all">{CID}</h2>
      <a
        href={"https://ipfs.io/ipfs/" + CID}
        target="_blank"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Check out on IPFS
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default IpfsFileCard;
