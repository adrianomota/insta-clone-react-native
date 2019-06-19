import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  height: 42px;
`;

export const SelectButton = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-style: dashed;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

export const SelectButtonText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const Input = styled.TextInput`
  border-radius: 4px;
  border-width: 1px;
  border-color: #ddd;
  padding: 15px;
  margin-top: 10px;
  font-size: 16px;
`;

export const ShareButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  height: 42px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const ShareButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const Preview = styled.Image`
  width: 100%;
  height: 30%;
  margin-top: 10px;
  align-self: center;
  border-radius: 4px;
`;
