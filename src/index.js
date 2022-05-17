import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider, createTheme, styled, Spacer } from '@nextui-org/react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProfilePic from './components/pfp'
import UghCounter from './components/ughCounter';
import GithubCorners from '@uiw/react-github-corners';
// I'll be honest... I have no idea how the hell this can export with an uppercase G when its exported with a lowercase e

const theme = createTheme({
    type: "dark",
    theme: {
        colors: {}
    }
});

const StyledApp = styled("div", {
    dflex: "center",
    flexDirection: "column",
    minHeight: "100vh"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NextUIProvider theme={theme}>
        <StyledApp className="App">
            <GithubCorners
                position='right'
                size={120}
                href='https://github.com/buitim/robert-zhang-goes-ugh'
            />
            <ProfilePic />
            <Spacer y={1} />
            <UghCounter />
        </StyledApp>
    </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
