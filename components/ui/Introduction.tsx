export default function Introduction() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-12">
      <div className="grid md:grid-cols-1 lg:grid-cols-2  w-10/12 place-items-center gap-14">
        <div className="lg:border-r-2 border-grey-10 flex flex-col gap-y-4 px-5 h-full">
          <h1 className="text-white text-4xl font-Pixelify">Introduction</h1>
          <p className="text-grey-25 pr-2 font-IBM_Plex">
          My name is Pronwattana Wattanathamrong, but you can call me &quot;Poke.&quot;
          I first discovered coding in M.4 - term 2 (Thailand&apos;s education system)
          and got really passionate about it after attending Itcamp19. Since then,
          I&apos;ve loved coding and enjoy &quot;cooking up&quot; Funny projects.
          </p>
        </div>
        <div className=" h-48 w-full rounded-xl overflow-hidden group relative flex justify-center items-center">
              <h1 className="text-4xl md:text-6xl text-grey-12 font-medium font-Jacquarda_Bastarda ">guzamak</h1>
        </div>
      </div>
    </div>
  );
}
