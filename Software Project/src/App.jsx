import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login/Login";
import Signup from "./Page/Signup/Signup";
import Dashboard from "./Page/Dashboard/Dashboard";
import StudentsRegisForm from "./Screen/Students/StudentsRegistration";
import StudentsList from "./Screen/Students/StudentsList";
import TeachersRegisForm from "./Screen/Teachers/TeachersRegistration";
import TeachersList from "./Screen/Teachers/TeachersList";
import SubjectAdd from "./Screen/Subjects/SubjectRegistration";
import SubjectsList from "./Screen/Subjects/SubjectList";
import SyllabusForm from "./Screen/Syllabus/SyllabusForm";
import SyllabusList from "./Screen/Syllabus/SyllabusList";
import ClassRegisForm from "./Screen/Class/ClassForm";
import ClassList from "./Screen/Class/ClassList";
import AdmissionRegisForm from "./Screen/Admission/AdmissionsForm";
import AdmissionList from "./Screen/Admission/AdmissionsList";
import FeesStructure from "./Screen/Fees/FeeStructure";
import FeesVoucher from "./Screen/Fees/FeeVoucher";
import ExamSchedule from "./Screen/Exams/ExamSchedule";
import ExamList from "./Screen/Exams/ExamList";
import StudentsForm from "./Screen/School/Students/StudentsRegistration";
import TeachersForm from "./Screen/School/Teachers/TeachersRegistration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Dashboard" element={<Dashboard />}>
          <Route path="Students">
            <Route
              path="StudentsRegistration"
              element={<StudentsRegisForm />}
            />
            <Route path="StudentsList" element={<StudentsList />} />
          </Route>

          <Route path="Teachers">
            <Route
              path="TeachersRegistration"
              element={<TeachersRegisForm />}
            />
            <Route path="TeachersList" element={<TeachersList />} />
          </Route>

          <Route path="Subjects">
            <Route path="SubjectRegistration" element={<SubjectAdd />} />
            <Route path="SubjectList" element={<SubjectsList />} />
          </Route>

          <Route path="School">
            <Route path="Students">
              <Route path="StudentsRegistration" element={<StudentsForm />} />
            </Route>
            <Route path="Teachers">
              <Route path="TeachersRegistration" element={<TeachersForm />} />
            </Route>
          </Route>

          <Route path="Syllabus">
            <Route path="SyllabusForm" element={<SyllabusForm />} />
            <Route path="SyllabusList" element={<SyllabusList />} />
          </Route>

          <Route path="Class">
            <Route path="ClassForm" element={<ClassRegisForm />} />
            <Route path="ClassList" element={<ClassList />} />
          </Route>

          <Route path="Admission">
            <Route path="AdmissionForm" element={<AdmissionRegisForm />} />
            <Route path="AdmissionList" element={<AdmissionList />} />
          </Route>

          <Route path="Fees">
            <Route path="FeeStructure" element={<FeesStructure />} />
            <Route path="FeeVoucher" element={<FeesVoucher />} />
          </Route>

          <Route path="Exams">
            <Route path="ExamSchedule" element={<ExamSchedule />} />
            <Route path="ExamList" element={<ExamList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
