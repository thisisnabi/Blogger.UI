// function formatDate(date) {
//   let d = new Date(date),
//     month = '' + (d.getMonth() + 1),
//     day = '' + d.getDate(),
//     year = d.getFullYear()
//
//   if (month.length < 2) month = '0' + month
//   if (day.length < 2) day = '0' + day
//
//   return [year, month, day].join('/')
// }
//
// const filterProducts = (posts, tagTxt) => {
//   if (!tagTxt) return posts
//   const filteredPosts = posts.filter((p) => p.tags.find((t) => t == tagTxt))
//
//   return filteredPosts
// }
//
// const getInitialQuery = (searchParams) => {
//   const query = {}
//   const category = searchParams.get('category')
//   if (category) query.category = category
//   return query
// }
//
// export { filterProducts, formatDate, getInitialQuery }

export const parseDate = (date: string | Date) => {
  const myDate = new Date(date)

  return myDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  })
}
