import React from "react";
import { Typography } from "@material-tailwind/react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import {Link} from 'react-router-dom';
export function MaintenanceSection4() {
  return (
    <div className=" h-screen px-8 mx-auto grid place-items-center text-center">
      <div>
        <Cog8ToothIcon className="h-20 text-slate-50 w-20 mx-auto" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="text-slate-50 mt-7 !text-2xl md:text-3xl max-w-xl mx-auto !leading-snug"
        >
          We&apos;re currently undergoing maintenance to improve your
          experience.
        </Typography>
        <Typography className="!mt-4 md:max-w-2xl text-[18px] font-normal text-gray-500">
          Please bear with us while we make these enhancements. We&apos;ll be
          back shortly. Thank you for your patience!
        </Typography>
        <div className="mt-44">
           
      </div>
  <Link to="/food-delivery-site" className="text-slate-50 fw-bolder"> 
            Return to home
            </Link>
    </div>
      </div>
    
  );
}

export default MaintenanceSection4;