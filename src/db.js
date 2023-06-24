export default function getItems() {
  const items = []

  for (let i = 1; i <= 20; i++) {
    items.push({
      name: `foo${i}`,
      value: `bar${i}`
    })
  }

  return items
}
