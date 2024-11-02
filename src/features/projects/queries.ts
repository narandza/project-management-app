import { createSessionClient } from "@/lib/appwrtie";
import { getMember } from "../members/utils";
import { DATABASE_ID, PROJECTS_ID } from "@/config";

interface getProjectProps {
  projectId: string;
}

export const getProject = async ({ projectId }: getProjectProps) => {
  try {
    const { databases, account } = await createSessionClient();
    const user = await account.get();

    const project = await databases.getDocument<Projects>(
      DATABASE_ID,
      PROJECTS_ID,
      projectId
    );

    const member = await getMember({
      databases,
      userId: user.$id,
      workspaceId: project.workspaceId,
    });

    if (!member) {
      return null;
    }

    return project;
  } catch {
    return null;
  }
};
