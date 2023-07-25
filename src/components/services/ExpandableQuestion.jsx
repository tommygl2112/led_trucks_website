import React, { useState } from "react";
import '../../style/services/question-drop-down.scss'
import { FaChevronDown } from 'react-icons/fa'

export default function ExpandableQuestion({question, answer}) {
    const [expanded, setExpanded] = useState(false);
    const style = expanded ? 'expandable-question-expanded' : 'expandable-question';

    const expand = async () => {
        setExpanded(!expanded);
    }

    return (
        <div className={style}>
            <button onClick={expand} className={style + "__button"}>
                <div className={style + "__button__question"}>{question}</div>
                <FaChevronDown className={style + "__button__icon"} />
            </button>

            <div className={style + "__answer"}>
                {answer}
            </div>
        </div>
    );
}