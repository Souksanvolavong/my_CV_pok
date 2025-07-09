"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind", level: 90 },
];

export default function SkillsChart() {
  return (
    <div className="w-full h-96 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl p-6 shadow-xl">
      <h3 className="text-2xl font-semibold mb-4">Skill Chart</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis dataKey="name" type="category" tick={{ fill: "white", fontSize: 14 }} />
          <Tooltip cursor={{ fill: "#333" }} />
          <Bar dataKey="level" fill="#38bdf8" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
