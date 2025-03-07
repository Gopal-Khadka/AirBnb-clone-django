import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { Provider } from "@/components/ui/provider";

const roboto = Roboto_Condensed({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AirBnB Clone",
  description: "Clone of AirBnB Using Django, Next.js and Chakra UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={roboto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
