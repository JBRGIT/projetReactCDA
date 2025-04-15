import { useState } from "react";
import placeholder from "../../assets/img-Placeholder.avif"


function ProfilePath({ cast }) {
  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/w185${cast.profile_path}`
  );

  return (
    <div className="flex flex-col  items-center justify-end text-center ">
      <img
        src={img}
        alt="img"
        className="rounded-full object-cover w-[80%]  objet-cover "
        onError={() => setImg(placeholder)}
      />
      <div>
        <h3 className=" text-white text-[10px]  sm:text-[14px] font-bold">{cast.original_name}</h3>
        <p className=" text-[8px] sm:text-[10px] text-gray-500">{cast.name}</p>
      </div>
    </div>
  );
}

export default ProfilePath;
