import TopLive from "./toplive";
import { getOnlineLiveList } from "@/requests/live";
import { MessageCircle, Radio, Video } from "lucide-react";

export const revalidate = 0;

export default async function Home() {
  const lives = await getOnlineLiveList();

  return (
    <div className="h-full w-full flex flex-col gap-6">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
              Live Streaming Hub
            </p>
            <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
              いますぐ配信を始めて、チャットで盛り上がろう
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              配信枠を作成 → OBSやブラウザで配信 → 視聴者とリアルタイムで交流。登録なしでもライブを始められます。
            </p>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
            配信を始めるなら「配信を開始」ボタンから配信枠を作成！
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-rose-100 p-2 text-rose-500">
                <Radio className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">配信枠を作る</p>
                <p className="text-xs text-slate-600">タイトルと概要を入力して配信キーを取得。</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-100 p-2 text-blue-500">
                <Video className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">配信を開始</p>
                <p className="text-xs text-slate-600">OBS/ブラウザ配信で映像と音声を送信。</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-100 p-2 text-emerald-500">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">チャットで交流</p>
                <p className="text-xs text-slate-600">リアルタイムで視聴者とコメントを共有。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-slate-900">ライブ配信中</h2>
          <p className="text-sm text-slate-600">
            いま配信されているライブをチェックしましょう。
          </p>
        </div>
        <TopLive lives={lives.lives}></TopLive>
      </section>
    </div>
  );
}
