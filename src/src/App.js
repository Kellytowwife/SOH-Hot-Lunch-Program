import { useState } from 'react';

const forms = [
  {
    title: "Daily Attendance",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdoSjS6N7O2Divcq1krDI0_dFsAl0tRF4nk39_rhSefT4kKUA/viewform?usp=header",
  },
  {
    title: "New Client Registration",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScr93YXOVZ7pCJAEm-tAymsrhLoC1r8RjtJLsoX09iIYQNqCw/viewform?usp=header",
  },
  {
    title: "Food Box Request",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfw8i9hH2LjmF-AsAQ_x6iExThOsdu1T4p4PpsqoGFNYWdn0Q/viewform?usp=header",
  },
];

export default function SeedsOfHopeApp() {
  const [loading, setLoading] = useState(false);

  const openForm = (url) => {
    setLoading(true);
    window.open(url, "_blank");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Seeds of Hope Hot Lunch</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {forms.map((form, idx) => (
          <button
            key={idx}
            onClick={() => openForm(form.url)}
            disabled={loading}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
              minWidth: "250px"
            }}
          >
            {loading ? "Loading..." : form.title}
          </button>
        ))}
      </div>
    </div>
  );
}
