const students = [
  {
    name: "Hemerson",
    note: 9.8,
    class: "1A",
  },

  {
    name: "Izabela",
    note: 7,
    class: "1B",
  },

  {
    name: "Grazielle",
    note: 8,
    class: "2C",
  },

  {
    name: "Lucas",
    note: 5,
    class: "2B",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const approvedsStudents = getApprovedStudents(students, 7);
  console.log(approvedsStudents);

  function getApprovedStudents(students, average) {
    const approveds = students.filter((student) => {
      const { note } = student;

      if (note >= average) {
        return student;
      }
    });

    return approveds;
  }
});
