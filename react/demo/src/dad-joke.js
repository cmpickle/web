import React, { useState } from 'react';

export const DadJoke = ({ answer, question }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <p>{question}</p>
            {(visible && <div>{answer}</div>) || <div>&nbsp;</div>}
            <button type="button" onClick={() => setVisible(!visible)}>
                {(visible && <div>Hide Answer</div>) || <div>Show Answer</div>}
            </button>
        </>
    );
}
