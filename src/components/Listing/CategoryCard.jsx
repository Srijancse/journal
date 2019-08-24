import React from 'react'
import styled from '@emotion/styled'

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 364px;
    margin-right: 2.8rem;
    height: 390px;
    background: #EBE7E0;
    border-radius: 2px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 130px 130px 0;
    border-style: solid;
    border-color: #FCD06E #f4f2ed;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px;

    .index {
      font-size: 9rem;
      line-height: 9rem;
    }
    .title {
      font-size: 2.4rem;
      line-height: 2.9rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .desc {
      color: #666666;
      opacity: 0.8;
      font-size: 1.4rem;
      line-height: 2rem;
    }
`

const CategoryCard = ({ data, index }) => {
  const { data: { title, description } } = data
  console.log(data, 'data asdasd', title, description)
  return <CardWrapper>
    <CardContent>
      <span className="index">{`${index+1 < 10 ? '0' + (index+1): index+1}.`}</span>
      <span className="title">{title.text}</span>
      <span className="desc">{description.text}</span>
    </CardContent>
  </CardWrapper>
}

export default CategoryCard;