import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleSearch = (ev) => {
    dispatch(changeFilter(ev.target.value));
  };
  return (
    <label className={css.SearchBox}>
      <span>
        <b className={css.label}> Find contacts by name or number</b>
      </span>
      <input
        className={`${css.input} input`}
        type="text"
        placeholder="Search for..."
        value={filter}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;