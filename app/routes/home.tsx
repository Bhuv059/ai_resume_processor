import type { Route } from "./+types/home";
import Navbar from "~/(components)/Navbar";
import {resumes} from "../../constants"
import ResumeCard from "~/(components)/ResumeCard";
import {usePuterStore} from "~/lib/puter";
//import type { Route } from "./+types/home";
import { useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAnalyser" },
    { name: "description", content: "Feedback for your resume" },
  ];
}


export default function Home() {

  const { auth } = usePuterStore();
  const navigate = useNavigate();
/*

  useEffect(() => {
    if(!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated])
*/


  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16" >
        <h1>Track your Applications & resume Ratings</h1>
        <h2>Review your submissions and check AI-Powered Feedback.</h2>
      </div>
      <div className="flex flex-col items-center gap-2 text-center" >
        {resumes.length > 0 && (
            <div className="resume-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume}    />
              ))}
            </div>
        )}
      </div>
    </section>
  </main>
}
