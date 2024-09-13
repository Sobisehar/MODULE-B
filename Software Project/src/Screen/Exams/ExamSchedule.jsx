import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Exam schedule data
const examSchedule = [
  {
    date: "2/09/2024",
    day: "Mon",
    class1: "English",
    class2: "Science",
    class3: "Math",
    class4: "Islamiat",
    class5: "Urdu",
    class6: "Social Studies",
    class7: "Computer",
    class8: "Sindhi",
    class9: "Chemistry",
    class10: "Physics",
  },
  {
    date: "3/09/2024",
    day: "Tues",
    class1: "Islamiat",
    class2: "Gk",
    class3: "Computer",
    class4: "Math",
    class5: "Social Studies",
    class6: "English",
    class7: "Sindhi",
    class8: "Urdu",
    class9: "Pak Studies",
    class10: "Islamiat",
  },
  {
    date: "4/09/2024",
    day: "Wed",
    class1: "Math",
    class2: "Urdu",
    class3: "Science",
    class4: "Social Studies",
    class5: "Islamiat",
    class6: "Computer",
    class7: "English",
    class8: "Chemistry",
    class9: "Urdu",
    class10: "Math",
  },
  {
    date: "5/09/2024",
    day: "Thurs",
    class1: "GK",
    class2: "English",
    class3: "Urdu",
    class4: "Science",
    class5: "Sindhi",
    class6: "Islamiat",
    class7: "Science",
    class8: "Bio/Comp",
    class9: "English",
    class10: "Chemistry",
  },
  {
    date: "6/09/2024",
    day: "Fri",
    class1: "Drawing",
    class2: "Drawing",
    class3: "Drawing",
    class4: "Computer",
    class5: "English",
    class6: "Sindhi",
    class7: "Maths",
    class8: "Pak Studies",
    class9: "Bio/Comp",
    class10: "English",
  },
  {
    date: "7/09/2024",
    day: "Sat",
    class1: "Science",
    class2: "Math",
    class3: "English",
    class4: "Urdu",
    class5: "Computer",
    class6: "Science",
    class7: "Islamiat",
    class8: "Math",
    class9: "Sindhi",
    class10: "Urdu",
  },
  {
    date: "9/09/2024",
    day: "Mon",
    class1: "Urdu",
    class2: "Islamiat",
    class3: "Social Studies",
    class4: "Sindhi",
    class5: "Math",
    class6: "Urdu",
    class7: "Social Studies",
    class8: "English",
    class9: "Math",
    class10: "Pak Studies",
  },
  {
    date: "01/10/2024",
    day: "Sat.",
    class1: "-",
    class2: "-",
    class3: "Sindhi",
    class4: "English",
    class5: "Science",
    class6: "Math",
    class7: "Urdu",
    class8: "Computer",
    class9: "-",
    class10: "-",
  },
];

const ExamSchedule = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "100%",
        margin: "auto",
        mt: 4,
        overflowX: "auto",
        padding: isSmallScreen ? "0 8px" : "0",
      }}>
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        align="center"
        sx={{
          m: 2,
          fontWeight: "bold",
          fontFamily: "initial",
          marginBottom: "30px",
          color: "#21445D",
          fontSize: isSmallScreen ? "1.5rem" : "2.5rem",
        }}>
        EXAM SCHEDULE (September 2024)
      </Typography>
      <Table
        sx={{
          minWidth: isSmallScreen ? "600px" : "auto",
          tableLayout: "fixed",
        }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#21445D" }}>
            {[
              "DATE",
              "DAY",
              "Class 1",
              "Class 2",
              "Class 3",
              "Class 4",
              "Class 5",
              "Class 6",
              "Class 7",
              "Class 8",
              "Class 9",
              "Class 10",
            ].map((heading) => (
              <TableCell
                key={heading}
                align="center"
                sx={{
                  fontWeight: "bold",
                  border: "1px solid #2E2E2E",
                  fontSize: isSmallScreen ? "0.75rem" : "1rem",
                  padding: isSmallScreen ? "4px" : "8px",
                }}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {examSchedule.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value, i) => (
                <TableCell
                  key={i}
                  align="center"
                  sx={{
                    backgroundColor: i < 2 ? "gray" : "grey",
                    border: "1px solid #2E2E2E",
                    fontSize: isSmallScreen ? "0.75rem" : "1rem",
                    padding: isSmallScreen ? "4px" : "8px",
                  }}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mt: 2,
          backgroundColor: "grey",
          border: "1px solid #2E2E2E",
          borderTop: "none",
          width: isSmallScreen ? "90%" : "35%",
          margin: "auto",
          fontSize: isSmallScreen ? "0.85rem" : "1rem",
          padding: isSmallScreen ? "4px" : "8px",
        }}>
        Exam Time: 08:30 to 11:00 (Morning Shift)
      </Typography>
    </TableContainer>
  );
};

export default ExamSchedule;
