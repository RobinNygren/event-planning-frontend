import React from "react";
import { EventCardProps } from "../Types/eventTypes";

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-eventPlanner-colors-primary text-eventPlanner-colors-detail">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-eventPlanner-colors-detail text-base">{date}</p>
        <p className="text-eventPlanner-colors-detail text-base">{location}</p>
        <p className="text-eventPlanner-colors-detail text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
