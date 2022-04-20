import { memo } from "react";
import "./Footer.scss";
import { getIndicatorWidth } from "../helper";
import classNames from "classnames";

type Props = {
  completedTodosCount: number;
  todoListLength: number;
  onRemoveChecked: () => void;
};

const Footer = ({
  completedTodosCount,
  todoListLength,
  onRemoveChecked,
}: Props): JSX.Element => {
  return (
    <div className="footer">
      <div className="completed-todo">
        <div
          className="completed-todo__indicator"
          style={{
            width: getIndicatorWidth(completedTodosCount, todoListLength),
          }}
        />
        <div className="completed-todo__info">
          <b>{completedTodosCount}</b>&nbsp;of&nbsp;
          <b>{todoListLength}</b>&nbsp;tasks done
        </div>
      </div>
      <button
        className={classNames("footer__remove-checked-btn", {
          "footer__remove-checked-btn--disabled": !completedTodosCount,
        })}
        onClick={completedTodosCount ? onRemoveChecked : () => false}
      >
        Remove Checked x
      </button>
    </div>
  );
};

export default memo(Footer);
