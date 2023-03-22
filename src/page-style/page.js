import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin: 0px 0px 0px 200px;
  width: 50%;
  background-color: white;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const MovieImage = styled.img`
  width: 65px;
  height: 65px;
  margin: 15px;
`;
export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;


export const Footer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-basis: 20px;
  align-items: left;
  gap: 30px;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

