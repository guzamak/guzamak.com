export default function Introduction() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-12">
      <div className="grid md:grid-cols-1 lg:grid-cols-2  w-10/12 place-items-center gap-14">
        <div className="lg:border-r-2 border-grey-10 flex flex-col gap-y-4 px-5 h-full">
          <h1 className="text-white text-4xl ">Introduction</h1>
          <p className="text-grey-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            blanditiis officiis quo veniam aspernatur qui laudantium corporis
            esse obcaecati! Saepe totam natus hic accusantium aspernatur
            blanditiis enim quia provident repudiandae?
          </p>
        </div>
        <div className=" h-48 ">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

// <div className="flex relative mt-24 mx-4 md:mx-56 h-auto md:h-80">
//   <div className="w-full h-full flex flex-col md:flex-row">
//     <div className="border-r-2 w-full md:w-1/2 min-w-44 h-48 border-grey-10 flex flex-col justify-center gap-y-4 pr-4 md:pr-16">
//       <h1 className="text-transparent text-4xl bg-gradient-to-br from-white to-grey-10 bg-clip-text ">Introduction</h1>
//       <p className="text-grey-40">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis officiis quo veniam aspernatur qui laudantium corporis esse obcaecati! Saepe totam natus hic accusantium aspernatur blanditiis enim quia provident repudiandae?
//       </p>
//     </div>
//     <div className=" md:block  h-48">
//       <img src="" alt="" />
//     </div>
//   </div>
// </div>
