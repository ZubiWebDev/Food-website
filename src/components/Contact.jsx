import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e) {
    e.preventDefault();
    alert(`Thanks ${form.name || "friend"}! Message received (demo).`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold">Contact</h3>
      <p className="text-gray-600 mt-2">
        Questions? Catering requests? Send us a message.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-3">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="px-4 py-2 border rounded-md"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="px-4 py-2 border rounded-md"
        />
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Message"
          className="px-4 py-2 border rounded-md"
          rows={4}
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Send
          </button>
          <button
            type="button"
            onClick={() => setForm({ name: "", email: "", message: "" })}
            className="px-4 py-2 border rounded-md"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
