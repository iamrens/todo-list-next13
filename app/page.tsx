import Link from 'next/link'
import { prisma } from '@/db'
import TodoItem from '@/components/TodoItem'

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: {complete}})
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <div>
      <header className='flex items-center justify-between'>
        <h1>Todo List</h1>
        <Link href="/new">New</Link>
      </header>
      
      <ul className='pl-4'>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  )
}
