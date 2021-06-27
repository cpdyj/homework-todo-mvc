// I noticed that persistent IndexedDB isn't supported by Safari still.
// And this is an example only, we needn't paid more on persistent. So I think localStorage is a better way.
// Because localStorage is synchronized, we needn't focus on consistency.
// In other words, if we use IndexedDB we must notice it on local data storage.(Lucky it has transaction supports.)
// Notice this implementation has no cloud sync supported.

import {Category, TodoItem, TodoItemState} from "../types";
import {CategoryPersistent, TodoPersistent} from "../IPersistent";

class LocalCategoryPersistent implements CategoryPersistent {
    async list(): Promise<Category[]> {
        return await readCategories();
    }

    onChange(handler: () => void): () => void {
        throw new Error('todo')
    }

    add(category: Category): Promise<void> {
        throw new Error('todo')
    }

    remove(id: string): Promise<void> {
        throw new Error('todo')
    }

    update(category: Category): Promise<void> {
        throw new Error('todo')
    }

    async close(): Promise<void> {
    }
}

class LocalTodoPersistent implements TodoPersistent {
    async list({categoryId, status}: { categoryId?: string; status?: TodoItemState[] }): Promise<TodoItem[]> {
        const r = await readTodosFromCategory(categoryId ?? CATEGORY_PREFIX)
        if (status === undefined) return r
        return r.filter(it => it.status in status)
    }

    onChange(handler: () => void): () => void {
        throw new Error('todo')
    }

    add(todo: TodoItem): Promise<void> {
        throw new Error('todo')
    }

    remove(id: string): Promise<void> {
        throw new Error('todo')
    }

    update(todo: TodoItem): Promise<void> {
        throw new Error('todo')
    }

    async close(): Promise<void> {
    }
}

const LOCAL_STORAGE_CATEGORY_KEY = 'LOCAL_STORAGE_CATEGORY_KEY'
const CATEGORY_PREFIX = "C"
const TODO_PREFIX = "T"
const readCategories = async (): Promise<Category[]> => {
    try {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CATEGORY_KEY) ?? '[]')
            .filter((it: any) => Array.isArray(it) && it.length === 2 && it.every(it => typeof it === 'string'))
            .map((it: string[]) => ({id: it[0], title: it[1]}))
    } catch (e) {
        console.error(e)
        console.warn("error during localStorage categories.")
        return []
    }
}
const writeCategories = async (categories: Category[]): Promise<void> => {
    localStorage.setItem(LOCAL_STORAGE_CATEGORY_KEY, JSON.stringify(categories.map(it => [it.id, it.title])))
}
const readTodosFromCategory = async (id: string): Promise<TodoItem[]> => {
    try {
        return JSON.parse(localStorage.getItem(`${CATEGORY_PREFIX}${id}`) ?? '[]')
            .filter((it: any) => typeof it === "string")
            .map((id: string) => readTodoOrNull(id)).filter((it: TodoItem | null) => it !== null)
    } catch (e) {
        console.error(e)
        console.warn(`error during read category[${id}] from localStorage`)
        return []
    }
}
const isTodo = (o: any): o is TodoItem =>
    typeof o === "object" &&
    typeof o.title === "string" &&
    (o.categoryId === undefined || typeof o.categoryId === "string") &&
    typeof o.createTime === "number" &&
    typeof o.lastModifyTime === "number" &&
    typeof o.status === "string"
const readTodoOrNull = (id: string): TodoItem | null => {
    try {
        const t = JSON.parse(localStorage.getItem(`${TODO_PREFIX}${id}`) || 'null')
        if (isTodo(t)) {
            t.id = id
            return t
        }
        return null
    } catch (e) {
        console.error(e)
        console.warn(`error during read todo[${id}] from localStorage`)
        return null
    }
}
