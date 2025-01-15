/* eslint-disable no-undef */
import { describe, it, expect } from "vitest";
import EventCard from "./EventCard";
import { render, screen } from "@testing-library/react";

describe("EventCard", () => {
  // 1. Periksa apakah EventCard benar-benar dirender
  it("should render EventCard component", () => {
    render(<EventCard eventName="Music Concert" eventDate="2025-01-20" isFree={true} />);
    expect(screen.getByTestId("event-card")).toBeInTheDocument();
  });

  // 2. Periksa apakah props eventName dan eventDate dirender dengan benar
  it("should render proper eventName and eventDate", () => {
    render(<EventCard eventName="Music Concert" eventDate="2025-01-20" isFree={true} />);
    const eventName = screen.getByText("Music Concert");
    const eventDate = screen.getByText("Date: 2025-01-20");
    expect(eventName).toBeInTheDocument();
    expect(eventDate).toBeInTheDocument();
  });

  // 3. Periksa apakah status Free/Paid dirender dengan benar
  it("should render correct status for Free event", () => {
    render(<EventCard eventName="Music Concert" eventDate="2025-01-20" isFree={true} />);
    const status = screen.getByText("Status: Free");
    expect(status).toBeInTheDocument();
  });

  it("should render correct status for Paid event", () => {
    render(<EventCard eventName="Paid Workshop" eventDate="2025-01-22" isFree={false} />);
    const status = screen.getByText("Status: Paid");
    expect(status).toBeInTheDocument();
  });
});
