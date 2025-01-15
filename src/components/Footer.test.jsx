/* eslint-disable no-undef */
import { describe, it, expect } from "vitest";
import Footer from "./Footer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("Footer", () => {
  // 1. Periksa apakah Footer benar-benar dirender
  it("should render Footer component", () => {
    render(<Footer message="Initial Message" />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  // 2. Periksa apakah props Footer dirender dengan benar
  it("should render proper props", async () => {
    render(<Footer message="Footer Message" />);
    const propsMessage = screen.getByTestId("props-message");
    expect(propsMessage).toHaveTextContent("Footer Message");
  });

  // 3. Periksa apakah tombol dapat mengubah pesan
  it("should change message when button is clicked", async () => {
    render(<Footer message="Footer Message" />);
    const stateMessage = screen.getByTestId("state-message"); // Gunakan test ID yang tepat
    const button = screen.getByTestId("change-message-button");

    // Validasi pesan awal
    expect(stateMessage).toHaveTextContent("Hello World");

    // Simulasi klik tombol
    fireEvent.click(button);

    // Tunggu perubahan state dan validasi pesan setelah tombol diklik
    await waitFor(() => {
      //ketika klik fireEvent.click(button) akan trigger state changed
      expect(stateMessage).toHaveTextContent("State Changed");
    });
  });
});
