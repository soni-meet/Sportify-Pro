// import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              borderRadius: "5px",
              padding: "8px 16px",
              fontSize: "14px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
