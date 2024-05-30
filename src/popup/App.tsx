import { useState } from "react";
import "./App.css";
import Card from "../component/Card";
import Advice from "../component/Advice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex flex-col gap-4">
      <h1 className=" text-2xl font-bold">PandA Downloader</h1>
      <Advice>
        <code>src/popup/App.tsx</code> を編集してカスタマイズしてみよう！
      </Advice>
      <div>
        {/*✅ PandAのリンクが上野動物園に...？正しいリンクに直そう！*/}
        {/* href="https://panda.ecs.kyoto-u.ac.jp/portal/" */}
        <p className="text-lg">
          PandAは
          <a href="https://www.ueno-panda.jp/" target="_blank" rel="noopener">
            こちら
          </a>
        </p>
      </div>
      <Card>
        {/*✅ボタンをクリックすると+1されるはずなのに-1されています。setCountの中身を直してみよう！ */}
        <p>👇クリックすると増えます</p>
        <button type="button" onClick={() => setCount((count) => count - 1)}>
          {count} 回クリックしました
        </button>
      </Card>
    </div>
  );
}

export default App;
