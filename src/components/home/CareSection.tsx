import Image from "next/image";

const CareSection = () => {
  return (
    <section className="px-[40px] py-[100px]">
      {/* <h6 className=""></h6> */}
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-0 w-full center ">
        <div className="flex-1 center flex-col">
          <h6 className="text-[24px] md:text-[34px] font-bold leading-[120%] md:leading-[150%] text-primaryTxt">
            We care about your exams
          </h6>
          <p className="text-primaryTxt">
            Prepare youself as a best candidate!
          </p>
        </div>
        <div className="flex-1 center flex-col">
          <Image
            src="/images/exams.jpg"
            alt=""
            height={400}
            width={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CareSection;
