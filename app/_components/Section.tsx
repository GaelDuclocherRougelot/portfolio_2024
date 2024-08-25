import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export default function Section(props: PropsWithChildren<{className?:string}>) {
  return (
    <section className={cn("max-w-3xl px-4", props.className)}>
      {props.children}
    </section>
  )
}
