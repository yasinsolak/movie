import call from "../utils/call"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (listId: string) => {
    return await call.get(`list/${listId}`)
  }
}