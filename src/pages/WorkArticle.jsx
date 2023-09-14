import React from "react";
import Article from "../components/articles/article"; 
const articles = [
  {
    title: "Examining The Performance of NLP Language Models: A Comparison Study",
    content:
      "Published in the ISETE INTERNATIONAL CONFERENCE on Artificial Intelligence, Machine Learning and Big Data Engineering | ISBN - 978-93-90150-31-1 | Scopus Indexed.",
  },
  {
    title: "Securing Flutter Applications: A Comprehensive Study",
    content:
      "Accepted and Under Publication in the 7th International Conference on Computing, Communication, Control and Automation by IEEE Xplore. | Conference Record No: 58933",
  },
  {
    title: "Enhancing Web Development Security: A Study of Cloud-Based Platforms",
    content:
      "Accepted and Under Publication at the International Conference on Computational Intelligence and Network Systems, 2023 Dubai and Paper will be published in Taylor & Francis",
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
