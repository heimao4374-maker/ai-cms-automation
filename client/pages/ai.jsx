import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AIToolsPanel from '@/components/AIToolsPanel';
import { withAuth } from '@/lib/withAuth';

function AIPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Tools</h1>
          <p className="text-gray-600 mt-2">Generate, optimize, and enhance your content with AI</p>
        </div>

        <AIToolsPanel />
      </main>
    </div>
  );
}

export default withAuth(AIPage);
