interface TagsInBlogProps {
  tags: string[];
}

function TagsInBlog({tags}: TagsInBlogProps) {
  return (
    <div className="my-3 flex flex-row gap-3">
      {tags.map((tag) => (
        <a href={`/categorias/${tag.toLocaleLowerCase()}`}>
          <kbd className="mb-1"> {tag} </kbd>
        </a>
      ))}
    </div>
  );
}

export default TagsInBlog;
