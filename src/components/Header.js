import React from "react";
import Logo from "../img/header-lg.png";

const Header = () => {
  return (
    <header className="max-w-screen-xl p-4 sm:p-8 lighter-gradient mx-auto xl:rounded xl:rounded-br-lg">
      <div className="flex flex-col-reverse lg:flex-row w-full h-full">
        <div className="lg::w-4/6 md:my-auto text-white p-2 sm:p-8 leading-7 tracking-wide ">
          <h1 className="font-bold text-5xl leading-12 tracking-wide mb-8 sm:mb-8 text-">
            Our mission is cleaner air, everywhere
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-9 tracking-wide ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempora
            dolor autem unde consequuntur voluptas tempore atque amet vitae
            voluptate laboriosam rem cupiditate id accusantium cum sunt quis
            inventore, corporis sit eveniet! Omnis iure ipsa quia sed debitis
            fugiat, tenetur dolores quibusdam eveniet quidem iusto! Earum autem
            aut qui quaerat.
          </p>
        </div>
        <img
          src={Logo}
          alt="logo"
          className="md:h-96 h-80 mx-auto my-8 xl:mb-4 md:ml-auto lg:my-auto rounded-lg xl:rounded-br-lg shadow-xl"
        />
      </div>
    </header>
  );
};

export default Header;
