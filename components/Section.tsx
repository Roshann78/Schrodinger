import React from "react";

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-800 pb-2 tracking-tight">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
