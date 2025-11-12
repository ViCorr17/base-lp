import { ReactTyped } from "react-typed";
import "./App.css";

function App() {
  return (
    <>
      {/* navbar */}
      <div className="w-full bg-black min-h-screen text-white flex flex-col">
        <nav className="sticky top-0 z-10 flex items-center justify-between p-6 bg-black">
          <h1 className="text-xl font-medium">
            <span className="text-[13px]">◻️</span>base
            <span className="text-gray-200 font-light">build</span>
          </h1>
          <div className="space-x-4 text-gray-400 text-sm">
            <a className="hover:text-white transition" href="">
              Base.org
            </a>
            <a className="hover:text-white transition" href="">
              Base App
            </a>
            <a className="hover:text-white transition" href="">
              Base Docs
            </a>
          </div>
        </nav>
        {/* mobile menu */}
        <div className="text-center flex flex-col items-center py-20 px-5">
          <h1 className="text-[40px] font-semibold md:5xl mb-4">
            <ReactTyped
              strings={[
                "Grow your app on base",
                "My name is VyCorr",
                "This is my first React app",
              ]}
              typeSpeed={80}
              loop
            />
          </h1>

          <p className="text-gray-400 text-md max-w-xl md:text-2xl">
            Get featured on the base app, win builder awards, and unlock
            insights to grow faster.
          </p>
          <button className="bg-white text-black rounded-lg w-50 h-10 font-bold text-sm mt-5 hover:bg-gray-200">
            Sign up
          </button>
          <p className="text-[9px] text-gray-500 max-w-md mt-4">
            By clicking sign in, I have read and agreed to the{" "}
            <span className="underline text-white">Terms of service</span> and
            <span className="underline text-white"> Privacy policy</span> in
            EU/UK, I confirm I have read and understood the{" "}
            <span className="underline text-white">Privacy policy</span>
          </p>
          <img className="max-w-md" src="public/neuron.webp" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 px-8 md:px-20 py-16 mx-auto max-w-6xl">
          <div className="flex flex-col justify-center">
            <img
              className="bg-[#0d0f0f] rounded-lg px-15 py-5 w-110"
              src="public/rewards.webp"
            />
          </div>
          <div className="md:mt-57">
            <h1 className="text-2xl">Get rewarded for what you build</h1>
            <h2 className="text-gray-500">
              Verify your mini app to become eligible for builder rewards
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 px-8 md:px-20 py-16 mx-auto max-w-6xl md:flex md:flex-row-reverse">
          <div className="flex flex-col justify-center">
            <img
              className="bg-[#0d0f0f] rounded-lg px-35 py-5 md:h-80"
              src="public/featured.webp"
            />
          </div>
          <div className="md:mt-60">
            <h1 className="text-2xl">Get featured on the Base app</h1>
            <h2 className="text-gray-500">
              Increase your chances of being featured in the Base app,<br/> meet
              users where they are, and kickstart your app's growth.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 px-8 md:px-20 py-16 mx-auto max-w-6xl">
          <div className="flex flex-col justify-center">
            <img
              className="bg-[#0d0f0f] rounded-lg px-15 py-5 w-110"
              src="public/understand.webp"
            />
          </div>
          <div className="md:mt-57">
            <h1 className="text-2xl">Make better decisions with data</h1>
            <h2 className="text-gray-500">
              Get real-time analytics to unlock insights, understand your users, and grow your app.
            </h2>
          </div>
        </div>
        {/* footer */}
        <div className="flex flex-col items-center mt-60 mb-20 gap-5">
          <img className="w-[180px]" src="/base-build-logo.webp" />
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="">Base Docs</a>
            <a href="">Privacy policy</a>
            <a href="">Cookie Policy</a>
            <a href="">Terms of service</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
