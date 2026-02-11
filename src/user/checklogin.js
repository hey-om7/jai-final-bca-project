
// // import { useLocation, useNavigate } from "react-router-dom";


// // export function CheckLogin() {
// //     const location = useLocation();
// //     const navigate = useNavigate(); 
// //     const state = location.state || {};
// //     if(isLogin==true){
// //         return(
// //             <div>
             
// //             </div>
// //         );
// //     }
// //     else 
// //     {    
// //         return(
// //         <div>
// //             navigate("/buy", {
// //             state: {
// //               price: state.price,
// //               title: state.title
// //             }
// //           })
// //         </div>
// //     );
// //     }
// // }


// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// export function CheckLogin({ isLogin }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const state = location.state || {};

//   useEffect(() => {
//     if (isLogin) {
//       // logged in → go to buy page
//       navigate("/buy", {
//         state: {
//           price: state.price,
//           title: state.title,
//         },
//       });
//     } else {
//       // not logged in → go to login page
//       navigate("/log");
//     }
//   }, [isLogin, navigate, state]);

//   return null; // nothing to render
// }



import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function CheckLogin({ isLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  useEffect(() => {
    if (!state) {
      navigate("/");
      return;
    }

    if (isLogin) {
      navigate("/buy", {
        state: {
          price: state.price,
          title: state.title,
        },
      });
    } else {
      navigate("/log");
    }
  }, [isLogin, navigate, state?.price, state?.title]);

  return null;
}
