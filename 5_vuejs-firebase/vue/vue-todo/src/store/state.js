import storage from '../utils/storage.js'

export const state = {
  state: {
    message: 'Todo App',
    todoItems: storage.fetch() || []
  },
}
