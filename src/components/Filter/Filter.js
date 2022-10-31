import PropTypes from 'prop-types';
import filter from './Filter.module.css';

const Filter = ({ title, value, onChange }) => {
  return (
    <label className={filter.label}>
      <span className={filter.label__title}>{title}</span>
      <input
        className={filter.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
