import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Name,
  Location,
  Login,
  Dob,
  Registered,
  Id,
  Picture,
} from "../Types/Cards.types";

type CardProps = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};

/**
 * A card component to display user information.
 * @param {CardProps} props - The properties of the card component.
 * @returns {React.JSX.Element} - The rendered card component.
 */
const Card = (props: CardProps): React.JSX.Element => {
  const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 1001); // Generates a random number between 0 and 1000 (inclusive)
  };

  const active = generateRandomNumber();

  return (
    <div className="w-[350px] border-2 border-indigo-400  flex flex-col rounded-lg p-2">
      <div className="flex justify-between  m-2">
        <h3 className="flex gap-2 m-2">
          {props.login.username}{" "}
          {active % 2 === 0 ? (
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute 
            inline-flex 
            h-full 
            w-full 
            rounded-full bg-green-400 
            opacity-75"
              ></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          ) : (
            <></>
          )}
        </h3>
        <h3 className=" m-1">
          <span className="text-indigo-500 p-1 rounded-lg bg-blue-950 cursor-pointer">
            Follow
          </span>{" "}
        </h3>
      </div>
      <img src={props.picture.large} alt={props.name.first} />
      <div className="flex justify-between m-2 p-2">
        <FavoriteBorderIcon />
        <h3 className="text-indigo-500">
          Liked by {props.location.street.number} others{" "}
        </h3>
      </div>
    </div>
  );
};

export default Card;
