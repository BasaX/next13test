import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPost = () => {
	return fetch("https://jsonplaceholder.typicode.com/posts", {
		next: { revalidate: 60 },
	}).then((res) => res.json());
};

export async function ListOfPosts() {
	const posts = await fetchPost();

	return posts?.slice(0, 5).map((post) => (
		<article key={post.id}>
			<Link href="/posts/[id]" as={`/posts/${post.id}`}>
				<h2 style={{ color: "#09F" }}>{post.title}</h2>
			</Link>
			<p>{post.body}</p>
			<LikeButton />
		</article>
	));
}
