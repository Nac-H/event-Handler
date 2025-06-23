import type { Candidatetype } from "@/Types/CandidateTypes";

const candidates: Candidatetype[] = [
    {
        name: "Juan Perez",
        age: 30,
        city: "Madrid",
        country: "España",
        expirence: 5,
        skills: ["JavaScript", "React", "Node.js"],
        working: true,
        status: "Rewiewing"
    },
    {
        name: "Maria Lopez",
        age: 28,
        city: "Barcelona",
        country: "España",
        expirence: 3,
        skills: ["Python", "Django", "Machine Learning"],
        working: false,
        status: "Interviewing"
    },
    {
        name: "Carlos Garcia",
        age: 35,
        city: "Valencia",
        country: "España",
        expirence: 10,
        skills: ["Java", "Spring", "Microservices"],
        working: true,
        status: "Hired"
    },
    {
        name: "Ana Torres",
        age: 26,
        city: "Sevilla",
        country: "España",
        expirence: 2,
        skills: ["PHP", "Laravel", "MySQL"],
        working: false,
        status: "Refused"
    }
];

export default candidates;