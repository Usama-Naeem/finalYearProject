import React, { useEffect, useState } from "react";
import { BookingCard } from "../../shared/components/BookingCard/BookingCard";
import { listBanquetManagementEventsData } from "../../shared/api/dynamoApi";

const AllEvents = () => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const eventsDetails = await listBanquetManagementEventsData();
      const userDate = JSON.parse(localStorage.getItem("dynamoData"));
      setUser(userDate);
      setData(eventsDetails);
    })();
  }, []);
  return (
    <div className="flex gap-4">
      {data?.map((event) => {
        return (
          <BookingCard
            title={event.eventTitle}
            description={event.description}
            location={event.venue}
            limit={event.participantsLimit}
            date={event.bookingDate}
            time={event.bookingStartTime}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default AllEvents;
