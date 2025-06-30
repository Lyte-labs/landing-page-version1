export interface ValuePropProps {
  text: string;
}

export default function ValueProp({ text }: ValuePropProps) {
  return (
    <section className="py-12 text-center max-w-3xl mx-auto">
      <p className="text-lg md:text-xl">{text}</p>
    </section>
  )
}
