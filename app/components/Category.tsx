"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelectedLayoutSegments } from "next/navigation"

import { Category as ICategory } from "../../types";

type Props = {
  category: ICategory
}

export default function Category({ category: { id, name, childrens_recursive } }: Props) {

  const [,,order] = useSelectedLayoutSegments();

  const [isToggled, setIsToggled] = useState<boolean>(false)

  return (<div className='ml-4'>

    <Link className="font-bold" href={`/${id}/0/desc`}>
      {name}
    </Link>
    &nbsp;
    {
      childrens_recursive?.length! > 0 &&

      <button
        onClick={() => setIsToggled(isToggled => !isToggled)}>
        [{isToggled ? 'cerrar' : 'abrir'}]
      </button>
    }
    {
      isToggled &&
      childrens_recursive?.map(category => (
        <Category key={category.id} category={category} />
      ))
    }
  </div>
  )
}