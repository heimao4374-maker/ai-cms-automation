import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/store';
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { setAuth, isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn]);

  const handleLoginSuccess = (response) => {
    setAuth(response.data.user, response.data.token);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">🤖</div>
          <h1 className="text-3xl font-bold text-white">AI CMS</h1>
          <p className="text-blue-200 mt-2">Content Management with AI Power</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
          
          <LoginForm onSuccess={handleLoginSuccess} />

          {/* Test Credentials */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700 font-semibold mb-2">📝 Test Credentials:</p>
            <p className="text-sm text-gray-600">Email: <code className="bg-white px-2 py-1 rounded">admin@cms.local</code></p>
            <p className="text-sm text-gray-600">Password: <code className="bg-white px-2 py-1 rounded">admin123</code></p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
