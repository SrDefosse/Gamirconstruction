"use client";
import { useEffect, useRef, useState } from "react";
import {
  portfolioProjects,
  type PortfolioProject,
} from "../../shared/lib/portfolio";
const filters: Array<"All work" | PortfolioProject["category"]> = [
  "All work",
  "Custom Home",
  "Remodel",
  "In Progress",
];
export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!filterRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const visibleProjects =
    filter === "All work"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === filter);
  const chooseFilter = (item: (typeof filters)[number]) => {
    setFilter(item);
    setIsOpen(false);
  };
  return (
    <>
      <div className="filter-row">
        <div className="work-filter" ref={filterRef}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 5h16l-6.4 7.25v5.1l-3.2 1.8v-6.9L4 5Z" />
          </svg>
          <button
            type="button"
            className="work-filter__trigger"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {filter}
            <span aria-hidden="true">⌄</span>
          </button>
          {isOpen && (
            <div
              className="work-filter__menu"
              role="listbox"
              aria-label="Filter projects"
            >
              {filters.map((item) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={filter === item}
                  key={item}
                  onClick={() => chooseFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="work-grid">
        {visibleProjects.map((project) => (
          <article className="work-card" key={project.name}>
            <img
              src={project.image}
              alt={`${project.name} by Gamir Construction`}
            />
            <div>
              <p>{project.category}</p>
              <h2>{project.name}</h2>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
