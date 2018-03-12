//@flow
const serverUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://54.187.146.141'
export const api = {
  serverUrl,
  url: `${serverUrl}/api/`,
}

export const routes = {
  apiRoute: {
    index: (id: number) => `v2/some_route/${id}`,
  },
}

const config = { api, routes }
export default config
