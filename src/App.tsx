import Header from "./components/Header.tsx";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalsType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // js:const[goals, setGoals]=useState([]); => by default it array of never, always stay empty,never been able to initializefor simple data like string and number we won't have this issue only while using array or object like non-primitive data

  // How to declare useState in TS
  // We have to explicitly tell useState what type of value we are using here in the type part but also again in the () mention that we are using structures like array not regular data types ([])
  const [goals, setGoals] = useState<CourseGoalsType[]>([]);

  // How to use useState in TS
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalsType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  // Delete the course Goal
  function handleDeleteGoals(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoals} />
    </main>
  );
}
