type Post = {
  id: number;
  title: string;
};

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts" , {cache:'no-store'});
  const posts = await res.json();

  return (
    <main>
      <h1>سلام ، رفیق</h1>
      <p>در اینجا لیستی از محصولات مارا مشاهده میکنی</p>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
