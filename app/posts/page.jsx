import { Suspense } from "react";
import { ListOfPosts } from "./ListofPosts";

export default async function PostPage() {
	return (
		<section>
			<Suspense fallback={<p>Cargando lista de posts...</p>}>
				<ListOfPosts />
			</Suspense>
		</section>
	);
}
