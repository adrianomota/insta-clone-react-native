import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: #f8f8ff;
`;

export const FeedItem = styled.View`
  margin-top: 5px;
`;

export const FeedItemHeader = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View``;

export const Name = styled.Text`
  font-size: 14px;
  color: #000;
`;

export const Place = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
`;

export const FeedImage = styled.Image`
  width: 100%;
  height: 400;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const FeedItemFooter = styled.View`
  padding-left: 15px;
  padding-right: 15px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
  margin-right: 8px;
`;
export const Like = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  color: #000;
`;

export const Comment = styled.Text`
  line-height: 18px;
  color: #000;
`;

export const Hashtag = styled.Text`
  color: #7159c1;
`;
