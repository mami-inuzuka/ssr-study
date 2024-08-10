type Todo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Todo = async () => {
  async function delayedFetch(url: string): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch(url);
        resolve(response);
      }, 5000); // 5秒の遅延
    });
  }

  const result = await delayedFetch("https://jsonplaceholder.typicode.com/posts");
  const data: Todo[] = await result.json();

  return <p>{data.map((d) => d.title)}</p>;
};
