import { Card } from "@/components/ui/card";
const Code = () => {
  return (
    <Card className="glass bg-linear-to-br from-white/5 to-transparent m-0 p-0 border-slate-800 font-jetbrains md:aspect-square relative">
      <div className="bg-neutral-900 h-8 p-3 rounded-t-2xl">
        <div className="absolute top-0 left-0 right-0 bg-neutral-900 h-8 p-3 rounded-t-xl flex space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-600 block brightness-200"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-600 block brightness-150"></span>
          <span className="w-3 h-3 rounded-full bg-green-600 block brightness-150"></span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] z-100"></div>
      <div className="space-y-2 p-4 md:p-8 md:mt-8">
        <p className="text-[#a3a3a3]"># Mohammed.js</p>

        <p className="text-blue-400">
          class <span className="text-red-500 brightness-155">Mohammed</span>
          <span className="text-yellow-500"> &#123;</span>
        </p>

        <p className="text-blue-400 pl-4">
          constructor<span className="text-violet-500">() &#123;</span>
        </p>

        <p className="text-blue-400 pl-8">
          this<span className="text-blue-300">.name = </span>
          <span className="text-green-400">"Mohammed"</span>
          <span className="text-white">;</span>
        </p>

        <p className="text-blue-400 pl-8">
          this<span className="text-blue-300">.role = </span>
          <span className="text-green-400">"Fullstack Developer"</span>
          <span className="text-white">;</span>
        </p>

        <p className="text-blue-400 pl-8">
          this<span className="text-blue-300">.energyEnum = </span>
          <span className="text-green-600">Energy.</span>
          <span className="span">High</span>
          <span className="text-white">;</span>
        </p>

        <p className="text-blue-400 pl-8">
          this<span className="text-blue-300">.age = </span>
          <span className="text-lime-500">28</span>
          <span className="text-white">;</span>
        </p>

        <p className="text-blue-400 pl-8">
          this<span className="text-blue-300">.creativity = </span>
          <span className="text-blue-400">Infinity</span>
          <span className="text-white">;</span>
        </p>

        <p className="pl-4 text-violet-500">&#125;</p>

        <br />
        <p className="text-yellow-400 pl-4">
          build<span className="text-violet-500">() &#123;</span>
        </p>

        <p className="text-blue-400 pl-8">
          return{" "}
          <span className="text-green-400">
            "Crafting scalable, beautiful systems ✨"
          </span>
          <span className="text-white">;</span>
        </p>

        <p className="pl-4 text-violet-500">&#125;</p>
        <p className="text-yellow-500">&#125;</p>
      </div>
    </Card>
  );
};

export default Code;
