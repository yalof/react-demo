import React, { FC, useEffect, useState } from "react";
import "./Login.css";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";

type LoginFormProps = {
  onClick: (name: string) => void;
  onConfirmClick: () => void;
};

const LoginForm: FC<LoginFormProps> = ({ onClick, onConfirmClick }) => {
  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.value);

  useEffect(() => {
    if (emailError || passError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passError]);

  const emailValid = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
    if (
      !String(event.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passValid = (event: any) => {
    event.preventDefault();
    setPass(event.target.value);
    const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!result.test(event.target.value)) {
      setPassError(
        "Пароль должен содержать 8 значений с символом, прописными и строчными буквами и цифрой"
      );
    } else {
      setPassError("");
    }
  };

  const onClickRed = (isPlus: boolean) => {
    const PLUS_ACTION = { type: "counter/incremented" };
    const MINUS_ACTION = { type: "counter/decremented" };
    dispatch(isPlus ? PLUS_ACTION : MINUS_ACTION);
  };

  return (
    <form className="login-form">
      <div className="login-form-email">
        <p>Email</p>
        <Input
          type="email"
          required="required"
          value={email}
          onChange={emailValid}
        />
        {emailError && <div className="err">{emailError}</div>}
      </div>
      <div className="login-form-password">
        <p>Password</p>
        <Input
          type="password"
          required="required"
          value={pass}
          onChange={passValid}
        />
        {passError && <div className="err">{passError}</div>}
      </div>

      <Button
        disabled={!formValid}
        className="btnLoginConfirm"
        btnText="Login"
        onClick={() => {}}
      />

      <div className="login-forgot">
        <p className="login-forgot-text">Forgot your password?</p>
        <a href="#reset" className="login-reset">
          Reset password
        </a>
      </div>
      <Button
        className="btm"
        value={"Plus"}
        onClick={() => onClickRed(true)}
        btnText="Plus"
      />
      <Button
        className="btm"
        value={"Minus"}
        onClick={() => onClickRed(false)}
        btnText="Minus"
      />
      <div style={{ fontSize: 20 }}> {value}</div>
    </form>
  );
};

export default LoginForm;
