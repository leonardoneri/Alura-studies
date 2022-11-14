import React from "react";
import { Script } from "vm";
import style from'./Botao.module.scss'

class Botao extends React.Component<{children: any}>{
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;