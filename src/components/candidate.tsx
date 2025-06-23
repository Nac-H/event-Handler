import type { Candidatetype } from "@/Types/CandidateTypes";
import { cn } from "@/utils/styles";

type CandidateProps = Candidatetype & {
  chlidren: React.ReactNode;
  className?: string;
};
function randomNumber(){
  return Math.floor(Math.random() * 100);
}

function Candidate(props: CandidateProps) {
  const { name, age,expirence , city, country, chlidren,working,status } = props;

  function getstatusColor(status: Candidatetype['status']) {
    if (status === 'Hired') return 'bg-green-500';
    if (status === 'Refused') return 'bg-red-500';
    if (status === 'Interviewing') return 'bg-yellow-500';
    if (status === 'Pending') return 'bg-orange-500';
    if (status === 'Rewiewing') return 'bg-purple-500';
    return 'gb-gray-500';
  }

  return (
    <div>
      <div className={cn(props.className, 'border-2 border-gray-300 p-4 rounded-lg justify-center')}>
        <h2 className=" Flex flex-wrap justify-items-center-safe">Candidate Component</h2>
        <div className="flex items-center gap-10">
          <p className="text-xl fonrt-bold">Nombre:{name}</p>
          <p className={cn(getstatusColor(props.status),"ext.sn font-medium", "px-2 py-1")}>{props.status}</p>
        </div>
        <p className="text-gray-500">Edad:{age}</p>
        <p className="text-gray-500">Experiencia: {props.expirence} años</p>
        <p>Ciudad:{city}</p>
        <p>País:{country}</p>
        <p className={cn(
          "text-gray-50",
          props.working ? "text-green-500" : "text-red-500",
        )}>
          Trabajando: {props.working ? (<img src="Check.png" alt="check" width={24} height={20} />) : (<span>No esta trabajando</span>)}
        </p>
        <h3 className="text-black">Habilidades</h3>
        <ol className="list-disc pl-5">
          {props.skills.map((skill, index) => (
            <li key={index} className="text-gray-700">
              {skill}
            </li>
          ))}
        </ol>
        <p>Número aleatorio: {randomNumber()}</p>
        {chlidren}
      </div>
      <div className="mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
        onClick={() => copy(`${name},${age},${expirence}, ${city}, ${country}, ${props.skills.join(', ')}
        ,${working},${status}`)}> 
        Copiar Datos </button>
</div>
    </div>
  );
}

export default Candidate;

async function copy(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    alert("Datos copiados al portapapeles");
  } catch (err: unknown) {
    console.error("Error al copiar los datos: ", err);
  }
}
