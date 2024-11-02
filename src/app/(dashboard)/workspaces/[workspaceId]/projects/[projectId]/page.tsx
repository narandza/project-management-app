import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

interface ProjectPageProps {
  params: { projectId: string };
}

const ProjectIdPage = async ({ params }: ProjectPageProps) => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div className=""></div>;
};

export default ProjectIdPage;
