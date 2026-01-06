import emailjs from "@emailjs/browser";

export const sendResultEmail = (data: {
  studentName: string;
  score: number;
  total: number;
  status: string;
}) => {
  return emailjs.send(
    "service_g1exivh",
    "template_1keq1qq",
    {
      studentName: data.studentName,
      score: data.score,
      total: data.total,
      status: data.status,
    },
    "YHcpYhXw0R69GW8bT"
  );
};
