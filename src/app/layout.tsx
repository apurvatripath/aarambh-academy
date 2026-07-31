import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarambh Academy | Coaching Counselling Demo",
  description: "A fictional Pune coaching-institute website demonstrating a focused counselling and enquiry experience for students and parents.",
};
export const viewport: Viewport = { themeColor: "#0b1f3a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
