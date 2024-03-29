import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 20px;
  width: 100%;
`;

export const TextInputContainer = styled.View`
  flex: 1;
  background-color: rgba(255,255,255,0.8);
  height: 54px;
  margin-left: 20px;
  margin-right: 20px;
  border-top-width: 0;
  border-bottom-width: 0;
  border-radius: 15px;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: rgba(255,255,255,1);
  margin-left: 20px;
  margin-right: 20px;
  border-top-width: 0;
  border-bottom-width: 0;
  border-radius: 10px;
  margin-top: 10px;
`;

export const TextInputStyled = styled.TextInput`
  height: 54px;
  margin: 0px 0px 0px 0px;
  border-radius: 15px;
  padding: 0px 20px 0px 20px;
`;

export const Item = styled.TouchableHighlight`
  justify-content: center;
  height: 32px;
  margin-bottom: 5px;
  width: 100%;
`;

export const ListItemContainer = styled.ScrollView.attrs({
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
  bounces: true,
  horizontal:true,
  centerContent:true,
})``;

