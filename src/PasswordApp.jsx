import { Generator } from "./components/Generator";

export const PasswordApp = () => {
  return (
    <>
      <main className="h-screen flex flex-col overflow-hidden h-">
        <div className="md:p-10 bg-purple-bar">
          <h1 className="text-3xl md:text-6xl	text-slate-50 font-bold text-center font-poetsen ">
            Generate a custom <span>password.</span>
          </h1>
        </div>

        <Generator />
      </main>
    </>
  );
};
