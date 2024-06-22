import css from "./Feedback.module.css";

export default function Feedback({ feedbackCount, total, positive }) {
  return (
    <ul className={css.feedbackList}>
      <li>
        <p>
          Good <span>{String(feedbackCount.good)}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral <span>{String(feedbackCount.neutral)}</span>
        </p>
      </li>
      <li>
        <p>
          Bad <span>{String(feedbackCount.bad)}</span>
        </p>
      </li>
      <li>
        <p>
          Total <span>{String(total)}</span>
        </p>
      </li>
      <li>
        <p>
          Positive <span>{String(positive)}%</span>
        </p>
      </li>
    </ul>
  );
}
