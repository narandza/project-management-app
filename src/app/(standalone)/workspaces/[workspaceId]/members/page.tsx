import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const WorkspaceIdMembersPage = async () => {
  const user = getCurrent();

  if (!user) redirect("/sign-in");

  return <div className=""></div>;
};

export default WorkspaceIdMembersPage;
