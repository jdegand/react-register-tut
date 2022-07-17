import Register from './components/Register';
import Login from './components/Login';
import LinkPage from './components/LinkPage';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[1984]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>


          <Route element={<RequireAuth allowedRoles={[5150]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[1984, 5150]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
