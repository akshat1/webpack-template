import { createBrowserHistory } from 'history'

let history;
export const getHistory = () => {
  if (!history) {
    history = createBrowserHistory();
  }

  return history;
}
