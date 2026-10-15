function StudentProfile() {
  const student = {
    name: "Rein Avenido",
    studentId: "2024023522",
    program: "BS Information Technology"
  };

  return (
    <section>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Student ID: {student.studentId}</p>
      <p>Program: {student.program}</p>
    </section>
  );
}

export default StudentProfile;