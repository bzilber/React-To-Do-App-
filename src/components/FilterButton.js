import React from "react";

export default function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>All</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}
