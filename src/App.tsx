import { CompetitorReview } from './components/CompetitorReview';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Grab Competitor Analysis Dashboard</h1>
        <div className="bg-white rounded-lg shadow-lg">
          <CompetitorReview />
        </div>
      </div>
    </div>
  );
}

export default App;