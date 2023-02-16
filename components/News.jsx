import axios from 'axios'

const fetchNews = async () => {
  const news = await axios.get('').then((res) => res)
  console.log(news)
}
fetchNews()
export default function News() {
  return <div>News</div>
}
