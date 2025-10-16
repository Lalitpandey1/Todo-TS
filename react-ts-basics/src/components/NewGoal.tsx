import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  // By default type of ref is unknown which is not good so we assign it with null in the beginning to let the ref know it does not have value it'll have sometime
  //   But this is a issue not we are telling ref is not unknown it is null because TS does not go through our code that it'll know after sometime it'll get the value we have to explicitly tell it that this contains whole input box html element
  // As we can see useRef also is a generic type so we assign it with HTMLInputElement
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  //** declare the type of event and from where or which element is triggering is a must
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //   collect the value of ref
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    // Reset the enteries After goal is added
    event.currentTarget.reset();
    enteredGoal != "" ? onAddGoal(enteredGoal, enteredSummary) : null;
  }

  return (
    // We can also declare inLine event that will have bydefault type as FormEvent
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
