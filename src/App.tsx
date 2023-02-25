import React from "react";
import CardList from "./components/CardList";
import ColoredBox from "./components/ColoredBox";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <CardList />
            <Form />
            {/* <ColoredBox /> */}
        </div>
    );
}

export default App;
