import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { profileChange } from "../features/apidata";

export const Home = () => {
  const { data, isLoading, error, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Data is Loading</h1>;
  }

  if (error) {
    return <h1>their is error in this page</h1>;
  }

  const dispatch = useDispatch;
  return (
    <>
      <h1>HOME Page</h1>
      <h1>{data?.fact}</h1> 
      <button onClick={dispatch(profileChange(data))}>
        Send Data
      </button>
      <button onClick={refetch}>Get new Fect</button>
    </>
  );
};

// import React, { useEffect, useState } from "react";
// import Axios from "axios";

// import { useQuery } from "@tanstack/react-query";

// export const Home = () => {
//   const { data } = useQuery(["cat"], () => {
//     return Axios.get("https://catfact.ninja/fact").then((res) => {
//       res.data;
//     });
//   });

//   // const {data} = useQuery(["cat"],() => {
//   //     return  (<>
//   //     const fetchData = async () => {
//   //               const data2 = await fetch("https://catfact.ninja/fact", {});
//   //               setDogImage2(data2);
//   //             };
//   //     </>);
//   // })
//   //   let [dogImage, setDogImage] = useState(null);
//   //   let [dogImage2, setDogImage2] = useState(null);

//   // 3. Create out useEffect function
//   //   useEffect(() => {
//   //     fetch("https://catfact.ninja/fact")
//   //       .then((response) => response.json())
//   //       .then((data) => setDogImage(data.fact));
//   //   }, []);

//   //   useEffect(() => {
//   //     // declare the data fetching function
//   //     const fetchData = async () => {
//   //       const data2 = await fetch("https://catfact.ninja/fact", {});
//   //       setDogImage2(data2);
//   //     };

//   //     // call the function
//   //     fetchData()
//   //     //   // make sure to catch any error
//   //       .catch(console.error);
//   //   }, []);
//   return (
//     <>
//       <div>Home</div>
//       {/* <div>{dogImage}</div> */}
//       <div>{data?.fact}</div>
//       {/* <div style={{ color: "red" }}>
//         {dogImage2} <p>two</p>
//       </div> */}
//     </>
//   );
// };

// import { useQuery } from "@tanstack/react-query";
// import Axios from "axios";

// export const Home = () => {
//   const { data } = useQuery(["cat"], () => {
//     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
//   });

//   return (
//     <h1>
//       This is the home page <p>{data?.fact}</p>
//     </h1>
//   );
// };
