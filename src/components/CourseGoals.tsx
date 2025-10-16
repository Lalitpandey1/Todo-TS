import { type PropsWithChildren, type FC } from "react";

// Approach : 1 => to extract renderable children from Parent
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// Approach 2 => PropsWithChildren<{ title: string }> here PropsWithChildren is a generic type that works with another type

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

// ReactNode => Anything which is renderable is a rectNode

// This is an additional way to declare a functional component which is also a generic type which needs another type viz here another generic type CourseGoalProps
const CourseGoals: FC<CourseGoalProps> = ({
  id,
  title,
  onDelete,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default CourseGoals;
