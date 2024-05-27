export const GeneratorCard = () => {
  return (
    <>
      <div className="my-10 md:my-20 px-10 md:h-[700px] w-96 md:w-[600px] bg-slate-800 opacity-80 rounded-3xl border-2 border-slate-50">
        <form className="mt-10 h-48 grid grid-cols-6">
          <input
            className="rounded-md md:w-80 h-11 mr border-2 border-slate-50  col-[1/5] text-slate-50 font-bold text-xl p-4"
            type="text"
            name="password"
            disabled={true}
          />
        <div className="relative group col-[5/6]">
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
          <div className="relative group">
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
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
              Generate
            </div>
          </div>

          <label htmlFor="size" className="text-slate-50 text-4xl col-[1/6] my-10">
            Size:
          </label>
          <input id="size" type="number" max={30} min={10} className="my-10 text-center bg-slate-800 opacity-80 rounded-md border-2 border-slate-50 text-slate-50 w-16 font-bold"/>
          <label htmlFor="char" className="text-slate-50 text-4xl col-[1/6] my-10" >
            Special characters:
          </label>
          <input id="char" type="checkbox" className="my-10 text-center  opacity-80 rounded-md border-2  md:w-16 "/>
          <label htmlFor="nmb" className="text-slate-50 text-4xl col-[1/6] my-10">
            Numbers:
          </label>
          <input id="nmb" type="checkbox" className="my-10 text-center  opacity-80 rounded-md border-2  md:w-16 "/>
          <label htmlFor="up" className="text-slate-50 text-4xl col-[1/6] my-10">
            Uppercase:
          </label>
          <input id="up" type="checkbox" className="my-10 text-center  opacity-80 rounded-md border-2  md:w-16 "/>

          <button className="hover:bg-slate-50 hover:text-slate-800 col-[2/6] h-20 bg-slate-800 opacity-80 rounded-md border-2 border-slate-50 font-bold text-slate-50">
            Generate password
          </button>
        </form>
      </div>
    </>
  );
};
