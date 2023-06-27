import React from "react";

import { newsData } from "./constants";

import * as S from "./BlogPageContainer.styled";

const BlogPageContainer = () => {
  return (
    <S.NewsContainer>
      <h2>Blog</h2>
      <S.NewsGrid>
        {newsData.map((news, index) => (
          <S.NewsCard key={index}>
            <img src={news.imgSrc} alt="news" />
            <S.NewsDetail>
              <p>
                {news.category} <i></i>
                <span>{news.author}</span>
                <i></i> {news.date}
              </p>
              <h4>{news.title}</h4>
              <hr />
              <p>{news.description}</p>
              <a href={news.link}>
                <i></i>
              </a>
            </S.NewsDetail>
          </S.NewsCard>
        ))}
      </S.NewsGrid>
    </S.NewsContainer>
  );
};

export { BlogPageContainer };
