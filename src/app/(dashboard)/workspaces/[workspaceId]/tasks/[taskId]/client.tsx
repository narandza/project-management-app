"use client";

import { useGetTask } from "@/features/tasks/api/use-get-task";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";
import PageLoader from "next/dist/client/page-loader";

export const TaskIdClient = () => {
  const taskId = useTaskId();

  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) {
    return <PageLoader />;
  }

  return <p className=""></p>;
};
