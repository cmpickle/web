import React from 'react';

export const FuncComponent = ({ greeting, name }) => (
        <h1>This is a functional component. {greeting} {name || "Callie"}.</h1>
);
