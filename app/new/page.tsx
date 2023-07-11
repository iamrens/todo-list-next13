import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error("Invalid Title")
  }
  await prisma.todo.create({data: {title, complete: false}})
  redirect("/")
}

const New = () => {

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1>New</h1>
      </header>
      <form action={createTodo}>
        <input type="text" name="title" className="bg-red-500" />
        <div>
          <Link href="..">Cancel</Link>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default New