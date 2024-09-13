import React from "react";
import ExamCard from "./ExamCard.jsx";

const ExamList = () => {
  return (
    <div>
      <h4
        style={{
          fontSize: "40px",
          fontFamily: "initial",
          fontWeight: "bold",
          marginTop: "30px",
          marginBottom: "10px",
          color: "#003366",
          textAlign: "center",
        }}>
        EXAM LIST
      </h4>
      <div>
        <ExamCard
          title="Class 01"
          date="2024-09-01"
          subject="Mathematics"
          startclass="09:00 AM"
          offclass="10:00 PM"
        />

        <ExamCard
          title="Class 02"
          date="2024-09-03"
          subject="Urdu"
          startclass="09:30 AM"
          offclass="11:00 PM"
        />

        <ExamCard
          title="Class 03"
          date="2024-09-05"
          subject="Mathematics"
          startclass="11:00 AM"
          offclass="12:30 PM"
        />

        <ExamCard
          title="Class 04"
          date="2024-09-07"
          subject="Computer"
          startclass="08:00 AM"
          offclass="09:30 PM"
        />

        <ExamCard
          title="Class 05"
          date="2024-09-09"
          subject="English"
          startclass="11:30 AM"
          offclass="01:00 PM"
        />

        <ExamCard
          title="Class 06"
          date="2024-09-12"
          subject="Mathematics"
          startclass="08:00 AM"
          offclass="10:00 PM"
        />

        <ExamCard
          title="Class 07"
          date="2024-09-13"
          subject="Science"
          startclass="09:45 AM"
          offclass="11:20 PM"
        />

        <ExamCard
          title="Class 08"
          date="2024-09-15"
          subject="Mathematics"
          startclass="11:00 AM"
          offclass="12:30 PM"
        />

        <ExamCard
          title="Class 09"
          date="2024-09-17"
          subject="Computer"
          startclass="08:00 AM"
          offclass="09:30 PM"
        />

        <ExamCard
          title="Class 10"
          date="2024-09-19"
          subject="English"
          startclass="11:30 AM"
          offclass="01:00 PM"
        />
      </div>
    </div>
  );
};

export default ExamList;
