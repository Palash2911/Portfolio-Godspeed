import React from "react";
import Article from "../components/articles/article";

const articles = [
  {
    title: "Examining The Performance of NLP Language Models: A Comparison Study",
    content:
      "ISETE International Conference on Artificial Intelligence, Machine Learning and Big Data Engineering · Google Scholar Indexed · ISBN: 978-93-90150-31-1",
  },
  {
    title: "Securing Flutter Applications: A Comprehensive Study",
    content:
      "7th International Conference on Computing, Communication, Control and Automation · Published in IEEE Xplore · Electronic ISBN: 979-8-3503-0426-8",
  },
];

const ArticleList = () => {
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} title={article.title} content={article.content} />
      ))}
    </div>
  );
};

export default ArticleList;
