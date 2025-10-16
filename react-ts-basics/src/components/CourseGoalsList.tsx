import CourseGoals from "./CourseGoals";
import { type CourseGoalsType } from "../App";
type CourseGoalsProps = {
  goals: CourseGoalsType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalsList = ({ goals, onDeleteGoal }: CourseGoalsProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
