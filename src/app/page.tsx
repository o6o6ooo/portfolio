"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, MailOpen, X } from "lucide-react";
import { items, socialLinks } from "@/data/items";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const appButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedApp = items.find((item) => item.id === selectedId);

  function closePreview() {
    if (selectedId) appButtons.current[selectedId]?.focus();
    setSelectedId(null);
  }

  return (
    <main className="portfolio">
      <nav className="social-links" aria-label="Contact and social profiles">
        <a href={socialLinks.email} aria-label="Email Sakura">
          <MailOpen size={20} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Linkedin size={20} strokeWidth={1.8} aria-hidden="true" />
        </a>
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile">
            <Instagram size={20} strokeWidth={1.8} aria-hidden="true" />
          </a>
        )}
      </nav>

      <header className="introduction">
        <img src="/memoji.png" alt="" className="memoji" />
        <h1>
          Hi, I’m Sakura, an enthusiastic engineer who creates Apple-optimised
          apps and websites with love.
        </h1>
      </header>

      <section className="apps" aria-labelledby="apps-heading">
        <h2 id="apps-heading">My App Store Apps</h2>
        <div className="app-list">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="app-button"
              ref={(element) => { appButtons.current[item.id] = element; }}
              aria-expanded={selectedId === item.id}
              aria-controls="app-preview"
              onClick={() => setSelectedId(item.id === selectedId ? null : item.id)}
            >
              <img src={item.icon} alt="" className="app-icon" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <div id="app-preview" hidden={!selectedApp}>
          {selectedApp && (
            <section
              className="app-preview"
              aria-labelledby="preview-heading"
              onKeyDown={(event) => {
                if (event.key === "Escape") closePreview();
              }}
            >
              <div className="preview-header">
                <h3 id="preview-heading" aria-live="polite">{selectedApp.title}</h3>
                <button type="button" className="close-preview" onClick={closePreview} aria-label={`Close ${selectedApp.title} preview`}>
                  <X size={22} strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>
              <div className="screenshots" key={selectedApp.id}>
                {Array.from({ length: 3 }, (_, index) => {
                  const src = selectedApp.images[index];
                  return src ? (
                    <img key={index} src={src} alt={`${selectedApp.title} screenshot ${index + 1}`} width={1284} height={2778} />
                  ) : (
                    <div key={index} className="screenshot-placeholder" role="img" aria-label={`${selectedApp.title} screenshot ${index + 1} coming soon`} />
                  );
                })}
              </div>
              {(selectedApp.link || selectedApp.learnMoreLink) && (
                <div className="app-links">
                  {selectedApp.link && (
                    <a href={selectedApp.link} target="_blank" rel="noreferrer">
                      App Store <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  )}
                  {selectedApp.learnMoreLink && (
                    <a href={selectedApp.learnMoreLink} target="_blank" rel="noreferrer">
                      Learn more <ArrowUpRight size={19} aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
