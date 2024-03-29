import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;
export const TabsContainer = styled.ScrollView.attrs({
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
  bounces: true,
  horizontal:true,
  centerContent:true,
  
  
})``;
export const TabItem = styled.View`
  width:100px;  
  height: 100px;
  background: rgba(255,255,255,0.2);
  margin-left: 10px;
  border-radius: 3px; 
  padding: 10px;
  justify-content: space-between; 
  align-content: center;
`;
export const TabText = styled.Text`
  font-size:14px;
  color: #fff;
`;