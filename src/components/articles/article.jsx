import React from "react";
import styled from "styled-components";

// Styled components for the article section
const ArticleSection = styled.section`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const ArticleTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ArticleContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const WorkArticle = ({ title, content }) => {
  return (
    <ArticleSection>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContent>{content}</ArticleContent>
    </ArticleSection>
  );
};

export default WorkArticle;
