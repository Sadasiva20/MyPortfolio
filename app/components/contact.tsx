"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Button,
} from "@heroui/react";
import DOMPurify from "dompurify";
import github from "../Icons/github.svg";
import linkedin from "../Icons/linkedin.svg";
import Image from "next/image";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact Me - Siva Sankar",
  description:
    "Reach out to Siva Sankar via the contact form. Provide your first name, last name, email, and message to get in touch.",
  keywords: ["Contact", "Siva Sankar", "Email", "Message", "Portfolio"],
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (honeypot) {
      alert("Spam detected.");
      return;
    }

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    const sanitizedData = {
      ...formData,
      message: DOMPurify.sanitize(formData.message),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${sanitizedData.firstname} ${sanitizedData.lastname}`,
          email: sanitizedData.email,
          message: sanitizedData.message,
          hidden_field: honeypot,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);

      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });

    setErrors({});
    setHoneypot("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary overflow-hidden">
      <Head>
        <title>Contact | Sadasiva Sankar Portfolio</title>

        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="description"
          content="Reach out to Siva Sankar via the contact form. Provide your first name, last name, email, and message to get in touch."
        />

        <meta
          name="keywords"
          content="Contact, Sadasiva Sankar, Email, Message, Portfolio"
        />

        <link
          rel="canonical"
          href="https://sivasan29.com/contact"
        />

        <meta
          property="og:title"
          content="Contact | Sadasiva Sankar Portfolio"
        />

        <meta
          property="og:description"
          content="Reach out to Siva Sankar via the contact form."
        />

        <meta
          property="og:image"
          content="https://sivasan29.com/your-image-path.jpg"
        />

        <meta
          property="og:url"
          content="https://sivasan29.com/contact"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>

      <main className="grow flex flex-col items-center justify-center px-4 py-14">
        <div className="w-full max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-custom2">
              Contact Me
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-contact/90 p-8 shadow-2xl shadow-blue-950/30">
            <Form
              className="space-y-8"
              validationBehavior="native"
              validationErrors={errors}
              onReset={handleClear}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="hidden_field"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <TextField
                  isInvalid={!!errors.firstname}
                  className="w-full"
                  name="firstname"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Label className="text-sm normal-case tracking-[0.12em] text-white/80">
                      FirstName
                    </Label>

                    {errors.firstname && (
                      <p className="text-sm text-red-400">
                        {errors.firstname}
                      </p>
                    )}
                  </div>

                  <Input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full rounded-[1.75rem] border border-blue-400/30 bg-slate-900/90 px-4 py-3 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                  />
                </TextField>

                <TextField
                  isInvalid={!!errors.lastname}
                  className="w-full"
                  name="lastname"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Label className="text-sm normal-case tracking-[0.12em] text-white/80">
                      LastName
                    </Label>

                    {errors.lastname && (
                      <p className="text-sm text-red-400">
                        {errors.lastname}
                      </p>
                    )}
                  </div>

                  <Input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full rounded-[1.75rem] border border-blue-400/30 bg-slate-900/90 px-4 py-3 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                  />
                </TextField>
              </div>

              <TextField
                isInvalid={!!errors.email}
                className="w-full"
                name="email"
                type="email"
              >
                <div className="flex items-center justify-between gap-4">
                  <Label className="text-sm normal-case tracking-[0.12em] text-white/80">
                    Email
                  </Label>

                  {errors.email && (
                    <p className="text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-[1.75rem] border border-blue-400/30 bg-slate-900/90 px-4 py-3 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </TextField>

              <TextField
                isInvalid={!!errors.message}
                className="w-full"
                name="message"
              >
                <div className="flex items-center justify-between gap-4">
                  <Label className="text-sm normal-case tracking-[0.12em] text-white/80">
                    Message
                  </Label>

                  {errors.message && (
                    <p className="text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, your timeline, or what help you need."
                  className="min-h-[180px] w-full rounded-[1.75rem] border border-blue-400/30 bg-slate-900/90 px-4 py-4 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                />
              </TextField>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Button
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                  type="submit"
                  isDisabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <Button
                  className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                  type="reset"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-6 text-center text-white">
        <p className="mb-0 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <span className="text-lg font-custom2">
            &copy; {new Date().getFullYear()} Sadasiva Sankar
          </span>

          <span className="flex items-center gap-4">
            <a
              href="https://github.com/Sadasiva20?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <Image
                src={github}
                alt="GitHub"
                className="h-10 w-10 transition-transform hover:scale-110 sm:h-12 sm:w-12"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ssank31/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                className="h-10 w-10 transition-transform hover:scale-110 sm:h-12 sm:w-12"
              />
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default ContactForm;
