import { NavLink, useParams } from "react-router-dom";
import { EventCard } from "../components/EventCard";

export const EventFeedPage = () => {
  const events: any = [
    { title: "Event 1", description: "Description 1", date: "2022-01-01" },
    { title: "Event 2", description: "Description 2", date: "2022-01-02" },
    { title: "Event 3", description: "Description 3", date: "2022-01-03" },
  ];

  return (
    <>
      <p>event feed</p>
      <div>
        {events.map((e: any) => (
          <NavLink to={`/event/${encodeURIComponent(e.title.toLowerCase())}`}>
            <EventCard
              title={e.title}
              description={e.description}
              date={e.date}
              tailwind=""
            />
          </NavLink>
        ))}
      </div>
    </>
  );
};
