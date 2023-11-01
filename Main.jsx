import React from "react";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Input } from "./Input";
import { span } from "./span";
import { Paragrafh } from "./P";


const Main = () => {
    return (
        <div className="head">
            <Heading />
        </div>
        <div className="buttonPlace">
            <Button />
        </div>
        <div className="inputArea">
            <Input />
            <span />
        </div>
        <span />
        <div className="pArea">
            <Paragrafh/>
        </div>
    )
}