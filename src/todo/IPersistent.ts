import {Category, TodoItem, TodoItemState} from "./types";


export interface CategoryPersistent {
    onChange(handler: () => void): () => void

    list(): Promise<Category[]>

    put(category: Category): Promise<void>

    update(category: Category): Promise<void>

    remove(id: string): Promise<void>

    close(): Promise<void>
}

export interface TodoPersistent {
    onChange(handler: () => void): () => void

    list({categoryId, status}: { categoryId?: string, status?: TodoItemState[], }): Promise<TodoItem[]>

    put(todo: TodoItem): Promise<void>

    update(todo: TodoItem): Promise<void>

    remove(id: string): Promise<void>

    close(): Promise<void>
}

