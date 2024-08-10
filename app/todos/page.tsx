import { headers } from "next/headers";
import { Todo } from "./_components/Todo/Todo";
import { Suspense } from "react";

export default async function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");

  const now = new Date().toLocaleTimeString();

  // headers() が実行されているためDynamic Renderingが採用される
  // したがってこのルートはリクエストのたびにサーバーでレンダリングが実行されるので
  // クライアントに返却されるHTMLにはリクエスト時の日時が表示される
  return (
    <div>
      <h1>This is Todos Page (Dynamic Rendering) </h1>
      <p>Referer: {referer}</p>
      <p>now: {now}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Todo />
      </Suspense>
    </div>
  );
}
