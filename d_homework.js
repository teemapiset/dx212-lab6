const team = [
  { name: "zoom", role: "PO", tasksDone: 5 },
  { name: "boss", role: "Dev", tasksDone: 8 },
  { name: "dear", role: "SM", tasksDone: 3 },
  { name: "ronnnie", role: "Dev", tasksDone: 6 },
];

// (1) map รายชื่อ "ชื่อ (บทบาท)"
const memberList = team.map(
  member => `${member.name} (${member.role})`
);

// (2) filter เฉพาะ Dev
const devTeam = team.filter(
  member => member.role === "Dev"
);

// (3) reduce รวม tasksDone ทั้งทีม
const totalTasks = team.reduce(
  (sum, member) => sum + member.tasksDone,
  0
);

// (4) รวม tasksDone เฉพาะ Dev
const devTotalTasks = team.reduce(
  (sum, member) =>
    member.role === "Dev"
      ? sum + member.tasksDone
      : sum,
  0
);

// Output
console.log("รายชื่อ:", memberList);
console.log("เฉพาะ Dev:", devTeam);
console.log("tasks ทั้งหมด:", totalTasks);
console.log("tasks เฉพาะ Dev:", devTotalTasks);