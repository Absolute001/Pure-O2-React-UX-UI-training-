import React  from "react";
import Aqi from "../img/Aqi.png";

const HowWeDo = () => {

  return (
    <section className="mx-auto max-w-screen-xl p-4 sm:p-16 reverse-gradient xl:rounded shadow-xl xl:rounded-tr-lg">
      <div className="lg:flex mx-auto max-w-screen-xl  	">
        <div className="lg:w-3/4 md:my-auto text-white p-2 pb-0">
          <h1 className="font-bold text-6xl  leading-12 tracking-wide">
            How <br /> we do it
          </h1>
          <p className="mt-4 leading-9 tracking-wide text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempora
            dolor autem unde consequuntur voluptas tempore atque amet vitae
            voluptate laboriosam rem cupiditate id accusantium cum sunt quis
            inventore, corporis sit eveniet! Omnis iure ipsa quia sed debitis
            fugiat, tenetur dolores quibusdam eveniet quidem iusto! Earum autem
            aut qui quaerat.
          </p>
        </div>
        <img
          src={Aqi}
          className="lg:w-1/4 sm:p-8 pt-0 xl w-4/6 md:w-2/4 mx-auto"
          alt="Aqi logo"
        />
      </div>
    </section>
  );
};

export default HowWeDo;
