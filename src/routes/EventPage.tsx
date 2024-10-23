// import { EventCard } from "../components/EventCard";

export const EventPage = () => {
  const event = {
    title: "Annual Tech Conference",
    date: "March 25, 2024",
    location: "San Francisco, CA",
    description:
      "Join us for a day of insightful talks and networking with industry leaders.",
    imageUrl: "https://via.placeholder.com/400x200",
  };
  return (
    <>
      <EventCard {...event} />
    </>
  );
};
