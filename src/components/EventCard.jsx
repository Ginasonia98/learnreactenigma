import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter,Divider,Button } from "@nextui-org/react";

const EventCard = ({ eventName, eventDate, isFree }) => {
  return (
    <Card  data-testid="event-card"className="w-64 shadow-xl border border-amber-300">
      <CardHeader className="font-bold text-lg text-center text-gray-600">
        {eventName}
      </CardHeader>
      <Divider />
      <CardBody className="text-center">
        <p>Date: {eventDate}</p>
        <p>Status: {isFree ? "Free" : "Paid"}</p>
      </CardBody>
      <CardFooter className="flex justify-center">
      <Button color="secondary" variant="shadow">
        Register
      </Button>
      </CardFooter>
    </Card>
  );
};

// Definisi PropTypes untuk validasi props
EventCard.propTypes = {
  eventName: PropTypes.string.isRequired, // Nama acara wajib berupa string
  eventDate: PropTypes.string.isRequired, // Tanggal acara wajib berupa string
  isFree: PropTypes.bool, // Status acara opsional, berupa boolean
};

export default EventCard;
