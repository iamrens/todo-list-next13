'use client'

export interface TodoProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem = ({ id, title, complete, toggleTodo }: TodoProps) => {
  return (
    <li className="flex gap-2 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer">
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
