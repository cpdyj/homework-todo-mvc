export enum TodoItemState {
    Unchecked = 'Uncheck',
    Checked = 'Checked',
}

export interface TodoItem {
    id: string
    title: string
    categoryId?: string
    createTime: number
    lastModifyTime: number
    status: TodoItemState
}

export interface Category {
    id: string
    title: string
}
