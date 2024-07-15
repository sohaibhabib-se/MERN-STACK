import './App.css';
import AddUser from './addUser/AddUser';
import User from './getUser/User';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
    element: <User />
    },
    {
      path: "/add",
    element: <AddUser />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider route={route}>
        <User />
      </RouterProvider>
    </div>
  );
}

export default App;
