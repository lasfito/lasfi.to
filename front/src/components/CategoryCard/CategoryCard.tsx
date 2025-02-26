import React from "react";

type Props = {
  category: string;
};

// create an automatic grid with the categories

function CategoryCard({category}: Props) {
  return (
    <a className="my-5" href={`/categorias/${category}`}>
      <div className="grid h-full w-full cursor-pointer items-center rounded-lg border border-primario bg-fondo p-5 text-center shadow-md hover:bg-fondo-jr hover:shadow-lg md:p-20">
        {category}
      </div>
    </a>
  );
}

export default CategoryCard;
