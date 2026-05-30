function EventCalendar() {
  return (
    <section className="rounded-2xl bg-[var(--pink)] p-10">
      <h2 className="text-4xl font-black uppercase">
        Kommande event
      </h2>

      <div className="mt-8 space-y-4">
        <article className="rounded-xl border-2 border-black p-3">
          <p className="font-black uppercase">Öppen verkstad</p>
          <p className="mt-2 text-black/70">Söndag 11:00–14:00</p>
        </article>

        <article className="rounded-xl border-2 border-black p-3">
          <p className="font-black uppercase">Punkafix workshop</p>
          <p className="mt-2 text-black/70">Kommer snart</p>
        </article>
        
        <article className="rounded-xl border-2 border-black p-3">
          <p className="font-black uppercase">Hjulriktning workshop</p>
          <p className="mt-2 text-black/70">Kommer snart</p>
        </article>
      </div>
    </section>
  )
}

export default EventCalendar