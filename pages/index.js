import React from "react";
import Hero from "../components/Hero";

const index = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default index;

// import React from 'react';
// import { client, urlFor } from '../lib/client';

// const index = ({data}) => {

//   return (
//     <div>

//       {data.map(d=>

//        { return <div key={d._id}>
//              <h1 >{d.name}</h1>
//             <img

//             src={urlFor(d.image
// )}
//             width={250}
//             height={250}
//             className="product-image"
//           />
//       </div>

//        })}
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const data = await client.fetch(`*[_type == "test"]`);

//   return {
//     props: {
//       data
//     }
//   };
// }

// export default index;
