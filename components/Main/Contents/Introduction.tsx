import Image from "next/image";
export default function Introduction() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-12">
      <div className="grid md:grid-cols-1 lg:grid-cols-2  w-10/12 place-items-center gap-14">
        <div className="lg:border-r-2 border-grey-10 flex flex-col gap-y-4 px-5 h-full">
          <h1 className="text-white text-4xl ">Introduction</h1>
          <p className="text-grey-25 pr-2">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            blanditiis officiis quo veniam aspernatur qui laudantium corporis
            esse obcaecati! Saepe totam natus hic accusantium aspernatur
            blanditiis enim quia provident repudiandae? */}
            My name is Pronwattana Wattanathamrong, but you can call me "Poke."
            I first discovered coding in M.4 - term 2 (Thailand's education
            system) and got really passionate about it after attending Itcamp19.
            Since then, I've loved coding and enjoy "cooking up" Funny
            projects.
          </p>
        </div>
        <div className=" h-48 ">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
