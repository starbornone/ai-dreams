import React from "react";

function Footer() {
  return (
    <footer className="max-w-4xl mx-auto text-xs w-full mt-12">
      <div className="p-6 py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a className="text-gray-400" href="mailto:one@aidreams.world">
            one@aidreams.world
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-gray-400">
            Existing since 2021. That's all.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
