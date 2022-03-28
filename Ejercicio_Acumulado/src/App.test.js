import React from "react";
import { prettyDOM, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./components/article/Card";

test("Render Card Title", () => {
    const data = {
        image: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
        title: "Arroz con Leche",
        subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
        date: "2019-12-06T17:50:17.735Z",
    };

    const component = render(<Card image={data.tipo} title={data.title} subtitle={data.subtitle} date={data.date} />);

    expect(component.container).toHaveTextContent(data.title);
});

test("Render Card Date", () => {
    const data = {
        image: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
        title: "Arroz con Leche",
        subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
        date: "2019-12-06T17:50:17.735Z",
    };

    const component = render(<Card image={data.tipo} title={data.title} subtitle={data.subtitle} date={data.date} />);

    expect(component.container).toHaveTextContent("6 de Diciembre de 2019");
});
