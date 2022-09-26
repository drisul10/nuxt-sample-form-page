export const getHello = async () => {
  return await $fetch("/api/hello")
}
