import Storage from "./components/Storage";
export default function App() {
  return (
    <div className="p-6 text-center">
      <h1 className="m-4 text-5xl font-bold">IPFS Demo</h1>
      <h3 className="mx-auto mb-5 text-xl text-red-600 md:w-3/4 lg:w-3/5">
        WARNING: Everything on IPFS is public by default. Do NOT add anything
        private that you don't want out in the wild. Encryption is in the works.
      </h3>
      <Storage />
    </div>
  );
}
