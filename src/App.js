
import GraphSect from './componants/HomePag/GraphSect';
import ProtectRoute from './componants/routes/ProtectRoute';
import MainLayout from './componants/MainLayout';
// import Login from './pages/Login';

function App() {

  return (
    <ProtectRoute>
      <MainLayout>
        <GraphSect />
      </MainLayout>
    </ProtectRoute>
  );
}

export default App;
