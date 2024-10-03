import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NCRS - About",
    description: "",
  };

export default function AboutLayout({children}:Readonly<{
    children: React.ReactNode;
}>){
    return(
        <div>
            {children}
        </div>
    )
}