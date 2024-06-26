
import Login from '@/components/main/login-component'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/pages/dashboard");
  return <Login />
}

export default LoginPage
