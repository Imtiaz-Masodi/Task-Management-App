import { Icons } from "../../components/Icon/IconMap";
import { Swipeable, SwipeableBgContent } from "../../components/Swipeable";
import { TaskItem } from "../../components/TaskItem";
import { useGetTasksQuery } from "../../store/api/taskApi";
import { Task } from "../../types/Task";

function TasksList() {
  const { data } = useGetTasksQuery();
  const tasks = data?.payload?.tasks || [];

  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center px-2 gap-2">
      <p className="text-sm font-bold text-zinc-600 self-start mx-2">Todo</p>
      {tasks.map((task: Task) => (
        <Swipeable
          className="rounded-md"
          swipingLeftBgContent={
            <SwipeableBgContent text="Mark as Complete" icon={Icons.settings} themeColorClasses="bg-green-500" />
          }
          swipingRightBgContent={<SwipeableBgContent text="Archive" icon={Icons.add} themeColorClasses="bg-red-500" />}
          onSwipeLeft={() => {}}
          onSwipeRight={() => {}}
          key={task._id}
        >
          <TaskItem task={task} />
        </Swipeable>
      ))}
    </div>
  );
}

export default TasksList;
