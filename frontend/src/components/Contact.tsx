import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { useState } from "react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "8493d85c-4b4e-4323-b818-6724e21cdb54");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 border-b border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter mb-10">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="text-blue-600 hover:underline">
          {CONTACT.email}
        </a>
      </div>

      <form className="w-full max-w-xl space-y-6" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-12 bg-white border border-neutral-300 rounded-[6px] p-4 text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name..."
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-12 bg-white border border-neutral-300 rounded-[6px] p-4 text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email..."
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-300">
            Your Message
          </label>
          <textarea
            name="message"
            rows={5}
            className="w-full bg-white border border-neutral-300 rounded-[6px] p-4 text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>

        {/* Display the result */}
        {result && <p>{result}</p>}
      </form>
    </div>
  )
}

export default Contact
