import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Candidate from 'src/components/candidate.tsx'
import candidates from '@/components/Candidatelist'



export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col items-center p-10 gap-10">
  <h1 className="text-3xl font-semibold text-center">
    Welcome to the Candidate App
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {candidates.map(c => (
      <Candidate
        className="m-4 p-6 border-2 border-gray-300 rounded-lg"
          key={c.name}
          name={c.name}
          age={c.age}
          city={c.city}
          country={c.country}
          expirence={c.expirence}
          skills={c.skills}
          status={c.status}
          working={c.working}
          chlidren={undefined}
        />
      ))}
      </div>
    </div>
  );
}
