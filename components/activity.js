export default async function getActivity({path}) {
  const res = await fetch(path)
  return await res.json()
}