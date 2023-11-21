import { render, screen } from "@testing-library/react";
import { Section } from ".";

describe("Section Component", () => {
  it("should render <Section/> sucessfully", () => {
    const { container } = render(<Section title="Sample Section" />);
    expect(container).toBeInTheDocument();
  });

  it("should render section title and children properly", () => {
    render(
      <Section title="Sample Section">
        <p>Child 1</p>
        <p>Child 2</p>
      </Section>
    );

    expect(screen.getByText("Sample Section")).toBeInTheDocument();

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should render 'ver todos' when hasMore is true", () => {
    render(
      <Section title="Sample Section" hasMore={true}>
        <p>Child 1</p>
        <p>Child 2</p>
      </Section>
    );

    expect(screen.getByText("ver todos")).toBeVisible();
  });

  it("should not render 'ver todos' when hasMore is false", () => {
    render(
      <Section title="Sample Section" hasMore={false}>
        <p>Child 1</p>
        <p>Child 2</p>
      </Section>
    );

    expect(screen.queryByText("ver todos")).not.toBeVisible();
  });
});
