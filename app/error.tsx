"use client";
// @ts-ignore
export default function Error({ error, reset }) {
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={() => reset}>Click to reset</button>
    </div>
  );
}
