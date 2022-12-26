import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
//リンク以外での画面遷移
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();
  //push("url")またはpush{pathname:"url"}でurlを変更できるまたpush{pathname:"url",A:aaa}などとステート(変数)をリンク先に渡せる}
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
