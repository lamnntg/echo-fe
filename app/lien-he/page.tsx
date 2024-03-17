import React from "react";
import ContactPage from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ - ECHO Design",
  other: {
    ["or:title"]: "Liên hệ - ECHO Design",
    ["og:site_name"]: "ECHO Design",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;
