type Event = {
  title: string;
  description: string;
  date: string;
  img?: string;
  tailwind: string;
};

export const EventCard = ({
  title,
  description,
  date,
  img,
  tailwind,
}: Event) => {
  return (
    <div className={tailwind}>
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};
