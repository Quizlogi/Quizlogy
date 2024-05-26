import React from 'react';
import { SidebarQuiz } from '../components/quiz/SidebarQuiz';
import EditQuiz from '../components/quiz/EditQuiz';

export default function QuizPage() {
    return (
      <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
        <SidebarQuiz />
        <div className='flex-grow p-4'>
          <EditQuiz />
        </div>
      </div>
    );
  }
