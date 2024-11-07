"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useEditTaskModal } from "../hooks/use-edit-task";

export const EditTaskModal = () => {
  const { taskId, setTaskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && (
        <div className="">TODO: Create Edit Task Form Wrapper component</div>
      )}
    </ResponsiveModal>
  );
};
