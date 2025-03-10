import React, { useEffect, useState } from "react";

const TodoDate = () => {
     // for date and time
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
  }, []);
  
  return (
      <h2 className="text-xl text-white font-semibold mb-6">{dateTime}</h2>
   );
};

export default TodoDate;
