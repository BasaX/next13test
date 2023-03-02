import Link from "next/link";
import { Children } from "react";

const fetchSinglePost = (id) => {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: { revalidate: 60 },
	}).then((res) => res.json());
};

export default async function SinglePostLayout({ children, params }) {
	const { id } = params;
	const post = await fetchSinglePost(id);

	return (
		<article>
			<h2 style={{ color: "#09F" }}>{post.title}</h2>
			<p>{post.body}</p>
			<Link href="/posts/[id]/comments" as={`posts/${id}/comments`}>
				Ver comentarios
			</Link>
			{children}
		</article>
	);
}
