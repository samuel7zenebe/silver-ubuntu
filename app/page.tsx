export default async function Home() {
  type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    return <h1> Somehow failed. </h1>;
  }
  const postsJson: PostType[] = await response.json();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl text-center"> Mock Posts </h1>
      <div className="border border-amber-950 flex flex-col gap-2 items-center justify-start">
        {postsJson.map((post: PostType) => (
          <div className="shadow-lg p-2" key={post.id}>
            <h2 className="text-left text-amber-900 font-semibold p-1">
              {post.title}
            </h2>
            <p className="prose text-muted">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
