// import NavBar from "../components/NavBar";
// import "../styles/globals.css";

// export default function MyApp({ Component, pageProps }) {
//   //   return (
//   //     <div>
//   //       <Component {...pageProps} />
//   //       <span>Hello</span>
//   //     </div>
//   //   );

//   //   return <Component {...pageProps} />
//   return (
//     <>
//       <NavBar />
//       <Component {...pageProps} />
//       <style jsx global>{`
//         a {
//           color: teal;
//         }
//       `}</style>
//     </>
//   );
// }

import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
