import React, { useState } from 'react';
import { User, BookOpen, Mail, Lock } from 'lucide-react';

const LoginPanel = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className={`relative w-full max-w-md perspective-1000 ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ height: '440px' }}
      >
        {/* Student Login */}
        <div className={`absolute w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="absolute w-full h-full backface-hidden">
            <LoginForm
              title="Student Login"
              icon={<BookOpen className="h-8 w-8 text-blue-500" />}
              onSwitch={() => setIsFlipped(true)}
              switchText="Teacher Login"
            />
          </div>
          
          {/* Teacher Login */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <LoginForm
              title="Teacher Login"
              icon={<User className="h-8 w-8 text-blue-500" />}
              onSwitch={() => setIsFlipped(false)}
              switchText="Student Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface LoginFormProps {
  title: string;
  icon: React.ReactNode;
  onSwitch: () => void;
  switchText: string;
}

const LoginForm = ({ title, icon, onSwitch, switchText }: LoginFormProps) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="text-center mb-8">
      <div className="inline-block p-3 rounded-full bg-blue-50 mb-4">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>

    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Sign in
        </button>
      </div>
    </form>

    <div className="mt-6">
      <button
        onClick={onSwitch}
        className="w-full text-center text-sm text-blue-600 hover:text-blue-500 transition-colors"
      >
        Switch to {switchText} →
      </button>
    </div>
  </div>
);

export default LoginPanel;