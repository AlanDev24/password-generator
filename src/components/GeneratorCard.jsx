import { useState, useRef } from "react";
import { generator } from "../helpers/generator";

export const GeneratorCard = () => {
  const [password, setPassword] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let password = generator(e);
    setPassword(password);
  };

  const handleCopy = async () => {
    if (inputRef.current) {
      try {
        await navigator.clipboard.writeText(inputRef.current.value);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <>
      <div className="my-10 md:my-20 px-10 md:h-[700px] w-96 md:w-[600px] bg-slate-800 opacity-80 rounded-3xl border-2 border-slate-50">
        <form className="mt-10 h-48 grid grid-cols-6" onSubmit={(e) => {
              handleSubmit(e);
            }}>
          <input
            ref={inputRef}
            className="rounded-md md:w-80 h-11 mr border-2 border-slate-50  col-[1/5] text-slate-50 font-bold text-xl p-4"
            type="text"
            id="password"
            name="password"
            disabled={true}
            value={password}
          />
          <div className="relative group col-[5/6]" onClick={handleCopy}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 ml-5 hover:w-12 hover:h-12 hover:cursor-pointer"
            >
              <path
                className="text-white"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
              Copy
            </div>
          </div>

          <label
            htmlFor="size"
            className="text-slate-50 text-4xl col-[1/6] my-10"
          >
            Max size:
          </label>
          <input
            name="size"
            id="size"
            type="number"
            max={30}
            min={10}
            className="my-10 text-center bg-slate-800 opacity-80 rounded-md border-2 border-slate-50 text-slate-50 w-16 font-bold"
            defaultValue={10}
          />
          <label
            htmlFor="char"
            className="text-slate-50 text-4xl col-[1/6] my-10"
          >
            Special characters:
          </label>
          <input
            name="char"
            id="char"
            type="checkbox"
            className="my-10 text-center  opacity-80 rounded-md border-2  md:w-16"
            defaultChecked={true}
          />
          <label
            htmlFor="nmb"
            className="text-slate-50 text-4xl col-[1/6] my-10"
          >
            Numbers:
          </label>
          <input
            name="nmb"
            id="nmb"
            type="checkbox"
            className="my-10 text-center  opacity-80 rounded-md border-2  md:w-16"
            defaultChecked={true}
          />
          <label
            htmlFor="up"
            className="text-slate-50 text-4xl col-[1/6] my-10"
          >
            Uppercase:
          </label>
          <input
            name="up"
            id="up"
            type="checkbox"
            className="my-10 text-center  opacity-80 rounded-md border-2  md:w-16"
            defaultChecked={true}
          />

          <button
            className="hover:bg-slate-50 hover:text-slate-800 col-[2/6] bg-slate-800 opacity-80 rounded-md border-2 border-slate-50 font-bold text-slate-50 md:h-20"
          >
            Generate password
          </button>
        </form>
      </div>
    </>
  );
};