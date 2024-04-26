import React, { useState } from "react";
import { Link } from "react-router-dom";
const DialogExample = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-12 ml-8 mr-8 mt-4 rounded"
        onClick={openDialog}
      >
        {data}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-75">
          <div className="bg-white rounded-lg shadow-lg w-96 p-8">
            <h2 className="text-lg font-semibold mb-4">Confirmation Dialog</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to proceed?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                onClick={closeDialog}
              >
                Cancel
              </button>
              <Link to="/signin/congrats">
                {" "}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={closeDialog}
                >
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogExample;
