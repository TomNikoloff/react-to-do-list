import './App.css';
import Header from './components/Header';
import ToDoWrapper from './components/ToDoWrapper';

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <ToDoWrapper />
      </div>
    </>
  );
}
