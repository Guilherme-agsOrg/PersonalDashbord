import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Button from '@/components/UI/Button';
import { logout } from '@/services/authService';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Bem-vindo ao Dashboard</h1>
        <Button onClick={logout}>Logout</Button>
      </div>
    </ProtectedRoute>
  );
}