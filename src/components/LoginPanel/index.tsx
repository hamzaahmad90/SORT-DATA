import React, { useState } from 'react';
import { User, BookOpen } from 'lucide-react';
import FlipCard from './FlipCard';
import LoginForm from './LoginForm';

const LoginPanel = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <FlipCard
        isFlipped={isFlipped}
        front={
          <LoginForm
            title="Student Login"
            icon={<BookOpen className="h-8 w-8 text-blue-500" />}
            onSwitch={() => setIsFlipped(true)}
            switchText="Teacher Login"
          />
        }
        back={
          <LoginForm
            title="Teacher Login"
            icon={<User className="h-8 w-8 text-blue-500" />}
            onSwitch={() => setIsFlipped(false)}
            switchText="Student Login"
          />
        }
      />
    </div>
  );
};

export default LoginPanel;