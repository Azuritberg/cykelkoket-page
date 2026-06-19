export const openingHours = [
  {
    day: 1,
    dayName: "Måndag",
    open: 17,
    close: 20,
  },
  {
    day: 3,
    dayName: "Onsdag",
    open: 17,
    close: 20,
  },
]

export function getOpeningStatus() {
  const now = new Date()
  const currentDay = now.getDay()
  const currentTime = now.getHours() + now.getMinutes() / 60

  const currentOpenDay = openingHours.find((item) => {
    return (
      item.day === currentDay &&
      currentTime >= item.open &&
      currentTime < item.close
    )
  })

  const isOpen = Boolean(currentOpenDay)

  const nextOpenDay =
    openingHours.find((item) => {
      return (
        item.day > currentDay ||
        (item.day === currentDay && currentTime < item.open)
      )
    }) || openingHours[0]

  return {
    isOpen,
    currentDayName: currentOpenDay?.dayName,
    nextDayName: nextOpenDay.dayName,
    timeText: "17:00 – 20:00",
  }
}