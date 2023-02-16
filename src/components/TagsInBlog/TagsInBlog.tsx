interface TagsInBlogProps {
	tags: string[];
}

function TagsInBlog({ tags }: TagsInBlogProps) {
	return (
		<div className="flex-row">
			{tags.map(tag => (
				<kbd className="mb-1"> {tag} </kbd>
			))}
		</div>
	);
}

export default TagsInBlog;
