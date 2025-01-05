import React, { useRef } from "react";

function LoginBlock() {
    const inputRef = useRef(null);
    return (
        <div className="login-block">
            <img src="/logo-clear.png" alt="logo" className="LogoClear"/>
                <h1 className="login-block__title">Chakish Bank</h1>
                <div>
                    <div class="data">
                        <label>Email or Phone</label>
                        <input type="text" required></input>
                    </div>
                    <div class="data">
                        <label>Password</label>
                        <input type="password" required></input>
                    </div>
                </div>
                <div>
                    <button className="login-button">Login</button>
                </div>
        </div>
    );
}
export default LoginBlock;