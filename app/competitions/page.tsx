import BackButton from "../components/BackButton";
import CompetitionCard from "../components/competition/CompetitionCard";

const Competition = () => {
  const competitionData = [
    {
      title: "Karya Tulis Ilmiah",
      price: "GRATIS (Tahap Awal)",
      imageSrc: "/KTI.svg",
      bgColor: "#1F519A",
      route: "karya-tulis-ilmiah",
    },
    {
      title: "Infografis",
      price: (
        <>
          Rp40.000,00 /orang (Gelombang 1)
          <br />
          Rp50.000,00 /orang (Gelombang 2)
        </>
      ),
      imageSrc: "/Infografis.svg",
      bgColor: "#1F519A",
      route: "infografis",
    },
    {
      title: "Try Out & Tour",
      price: (
        <>
          Rp70.000,00 /orang (Gelombang 1) <br />
          Rp85.000,00 /orang (Gelombang 2) <br />
          Rp100.000,00 /orang (Gelombang 3)
        </>
      ),
      imageSrc: "/Tryout.svg",
      bgColor: "#1F519A",
      route: "try-out",
    },
    {
      title: "Mobile Legends",
      price: "Rp85.000,00 /tim",
      imageSrc: "/ML.svg",
      bgColor: "#0A3981",
      route: "mobile-legends",
    },
    {
      title: "Business Plan",
      price: (
        <>
          Rp50.000,00 /tim (Early Bid) <br />
          Rp60.000,00 /tim (Batch 1) <br />
          Rp75.000,00 /tim (Batch 2)
        </>
      ),
      imageSrc: "/Businessplan.svg",
      bgColor: "#0A3981",
      route: "business-plan",
    },
    {
      title: "Basket",
      price: (
        <>
          Rp450.000,00 /tim (Putra) <br />
          Rp400.000,00 /tim (Putri)
        </>
      ),
      imageSrc: "/Basket.svg",
      bgColor: "#0A3981",
      route: "basket",
    },
  ];

  return (
    <>
      <div className="mt-5 px-10 lg:px-28">
        <BackButton></BackButton>
        <div className="w-full mt-5 text-4xl lg:text-8xl ">
          <p className="uppercase font-winter">
            Our{" "}
            <span
              className="uppercase font-winter text-[#D4ECF8]"
              style={{
                WebkitTextStroke: "1px #0A3981",
              }}
            >
              Interactive
            </span>
          </p>
          <p className="uppercase font-winter">Competitions</p>
        </div>
        <div className="w-full mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {competitionData.map((competition, index) => (
            <CompetitionCard
              key={index}
              title={competition.title}
              price={competition.price}
              imageSrc={competition.imageSrc}
              bgColor={competition.bgColor}
              route={competition.route}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Competition;
