"use client";

import { useRef, useState } from "react";
import ScrollReveal from "./scroll-reveal";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (formRef) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
          formRef.current as HTMLFormElement,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
          },
        );

        toast.success("Your message has been sent successfully");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollReveal name="contact">
      <section id="contact" className="section-container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="flex flex-col space-y-3 px-5"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-semibold text-gray-200">
              Your name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input"
              id="name"
              name="from_name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-semibold text-gray-200">
              Your email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="input"
              id="email"
              name="from_email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="font-semibold text-gray-200">
              Message
            </label>
            <textarea
              placeholder="leave me messages"
              className="input"
              id="name"
              rows={10}
              name="message"
            />
          </div>

          <button
            disabled={isLoading}
            className="mt-5 rounded-full bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-500 disabled:bg-emerald-300"
          >
            Send
          </button>
        </form>
      </section>
    </ScrollReveal>
  );
};

export default ContactSection;
