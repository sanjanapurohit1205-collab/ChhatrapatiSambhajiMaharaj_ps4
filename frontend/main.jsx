import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SetupInterview from './pages/SetupInterview';
import ActiveInterview from './pages/ActiveInterview';
import Report from './pages/Report';
import ReportHistory from './pages/ReportHistory';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex-center" style={{ height: '100vh' }}>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

// Layout Component
const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="app-logo">
          {/* Simple Link back to dashboard */}
          <a href="/dashboard" style={{ cursor: 'pointer' }}>InterviewIQ</a>
        </div>
        <nav className="flex-center" style={{ gap: '1rem' }}>
          <span style={{ fontWeight: 500 }}>{user?.name}</span>
          <button onClick={logout} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Logout
          </button>
        </nav>
      </header>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout><Dashboard /></Layout>
            </ProtectedRoute>
          } />

          <Route path="/interview/setup" element={
            <ProtectedRoute>
              <Layout><SetupInterview /></Layout>
            </ProtectedRoute>
          } />

          <Route path="/interview/active" element={
            <ProtectedRoute>
              <Layout><ActiveInterview /></Layout>
            </ProtectedRoute>
          } />

          <Route path="/report/history" element={
            <ProtectedRoute>
              <Layout><ReportHistory /></Layout>
            </ProtectedRoute>
          } />

          <Route path="/report/:id" element={
            <ProtectedRoute>
              <Layout><Report /></Layout>
            </ProtectedRoute>
          } />

          {/* Default Redirect */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;