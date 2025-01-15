import EventCard from "../EventCard";
import Footer from "../Footer";
import Header from "../Header";

const EventCardPage = () => {
  return (
    <>
      <Header />
      <br/>
      <div className="flex flex-col items-center justify-center space-y-6 min-h-screen ">
        <EventCard
          eventName="Vue.js Conference"
          eventDate="2025-02-10"
          isFree={false}
        />
        <EventCard
          eventName="React.js Conference"
          eventDate="2025-01-15"
          isFree={true}
        />
      </div>
      <Footer/>
    </>
  );
};

export default EventCardPage;
