import React from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
         { location.pathname === "/" ?
         <h2 className="text-white">Pop Movies</h2>
          :
          <h2 className="text-white">
          <Link to="/">
            <i className="fal fa-arrow-left"></i>
          </Link>
          Movie Details
        </h2>
        }
          <div className="dropdown header-right">
            <button
              type="button"
              className="btn-dots"
              data-bs-toggle="dropdown"
            >
              <i className="fal fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
// <header className="header">
// <div className="container">
//   <div className="d-flex justify-content-between align-items-center">
//     <h2>
//       <Link to='/'>
//       <i className="fal fa-arrow-left"></i>
//         </Link>
//       Movie Details
//     </h2>
//     <div className="dropdown header-right">
//       <button
//         type="button"
//         className="btn-dots"
//         data-bs-toggle="dropdown"
//       >
//       <i className="fal fa-ellipsis-v"></i>
//       </button>
//     </div>
//   </div>
// </div>
// </header>
export default Header;
