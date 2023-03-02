import Image from "next/image";

const fetchComments = async (id) => {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
		next: { revalidate: 60 },
	}).then((res) => res.json());
};

export default async function CommentsPage({ params }) {
	const { id } = params;
	const comments = await fetchComments(id);

	return (
		<ul style={{ background: "#444", padding: "1rem" }}>
			{comments.map((comment) => (
				<li key={comment.id}>
					<Image
						width="50"
						height="50"
						alt={comment.name}
						src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
					/>
					<h4>{comment.title}</h4>
					<small>{comment.body}</small>
				</li>
			))}
		</ul>
	);
}
