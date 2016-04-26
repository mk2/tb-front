
const initialState = {
  articles: [
    {
      id: 1,
      title: "Dummy Article 01",
      brief: "Dummy article desc",
      author: "Dummy Author",
      date: "2016/04/10 18:11 JST",
      content: "### Hello, world"
    },
    {
      id: 2,
      title: "Dummy Article 02",
      brief: "Dummy article desc",
      author: "Dummy Author",
      date: "2016/04/10 10:11 JST",
      content: "**this is content**"
    },
    {
      id: 3,
      title: "Dummy Article 03",
      brief: "Dummy article desc",
      author: "Dummy Author",
      date: "2016/04/09 18:11 JST",
      content: "- 世界平和"
    }
  ],
  config: {
    sidebar: {

    },
    content: {

    }
  }
};

export default function tbfront(state = initialState, action) {

  return state;
}
