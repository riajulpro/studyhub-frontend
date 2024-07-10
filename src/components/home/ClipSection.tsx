"use client";

const ClipSection = () => {
  return (
    <section className="relative border-b-2 border-white">
      <div className="absolute flex flex-col left-[45%] top-[20px] z-20 items-center justify-center">
        <h2 className="text-2xl font-bold text-coralMat">Join Us Now</h2>
        <div className="">
          <button className="btn-style bg-coralMat font-medium text-white">Get Started</button>
        </div>
      </div>
      <div className=" bg-secondaryMat text-white text-center p-12 clip-path-section h-[200px]">
        <style jsx>{`
          .clip-path-section {
            clip-path: polygon(49% 39%, 100% 0, 100% 100%, 0 100%, 0 0);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClipSection;
