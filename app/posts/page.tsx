export const revalidate = 90;

export default async function Page() {
  const now = new Date().toLocaleTimeString();

  // Dynamic Rendering が採用される条件となる関数が実行されていないため、
  // Static Rendering が採用される
  // したがってこのルートはビルド時にレンダリングが実行されるので
  // クライアントに返却されるHTMLにはビルド時の日時が表示される
  // ただし、revalidate が設定されているため、90秒経過後に再度ビルドが実行される
  // 90秒経過後にリクエストを送信すると、その時点で再レンダリングが実行されるため、その時点の日時が表示される
  return (
    <div>
      <h1>This is Static Rendering Sample Page</h1>
      <p>now: {now}</p>
    </div>
  );
}
