import { getTotalPages } from "../../utilities/PagingUtility";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { usersLength, setPage, page, deleteSelected } = props;

  const totalPages = getTotalPages(usersLength);
  const changePage = (index) => {
    setPage(index);
  };

  const navigatePage = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPages) {
      index = totalPages;
    }
    setPage(index);
  };

  let pages = [];
  pages.push(
    <button
      key={-3}
      onClick={() => changePage(1)}
      style={{ margin: 5 }}
      className="btn btn-primary"
    >
      <i className="fas fa-angle-double-left"></i>
    </button>
  );
  pages.push(
    <button
      key={-2}
      onClick={() => navigatePage(page - 1)}
      style={{ margin: 5 }}
      className="btn btn-primary"
    >
      <i className="fas fa-angle-left"></i>
    </button>
  );
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => changePage(i)}
        style={{ margin: 5 }}
        className="btn btn-primary"
      >
        {i}
      </button>
    );
  }
  pages.push(
    <button
      key={-1}
      onClick={() => navigatePage(page + 1)}
      style={{ margin: 5 }}
      className="btn btn-primary"
    >
      <i className="fas fa-angle-right"></i>
    </button>
  );
  pages.push(
    <button
      key={0}
      onClick={() => changePage(totalPages)}
      className="btn btn-primary"
    >
      <i className="fas fa-angle-double-right"></i>
    </button>
  );

  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-danger" onClick={() => deleteSelected()}>
        Delete Selected
      </button>

      {pages}
    </div>
  );
};

Pagination.propTypes = {
  usersLength: PropTypes.number,
  setPage: PropTypes.func,
  page: PropTypes.number,
  deleteSelected: PropTypes.func
};

export default Pagination;
