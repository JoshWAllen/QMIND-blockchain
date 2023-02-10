import { Web3Storage } from "web3.storage";

export function getAccessToken() {
  // If you're just testing, you can paste in a token
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2RDQ1YmRCMDYwMTU4OEQwMzE4ODcwNDhkZkI4QzA4RTRFNkFGNDciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzU5NzE2NTk2MDksIm5hbWUiOiJRTUlORCJ9.BVUYarV50vHJRjM71pD-O65EPoMqZfKMzn6kpB3Pdwc";

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.WEB3STORAGE_TOKEN;
}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export function makeFileObjects() {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  const obj = { hello: "world" };
  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([blob], "hello.json"),
  ];
  return files;
}

export async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}
