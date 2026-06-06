# MIMBAI
MIMBAI is a multipurpose AI platform developed by Digital Solutions
# MIMBAI — Multipurpose AI Platform

> **Built by [Digital Solutions](https://github.com/digital-solutions)**  
> Intelligent infrastructure for enterprises — powered by Anthropic, Supabase & OpenAI.

---

## What is MIMBAI?

MIMBAI is a modular AI platform that connects your business operations to state-of-the-art language models. Unlike generic AI tools, MIMBAI is purpose-built for enterprise workflows — from live meeting intelligence to regulatory compliance monitoring.

The interface mirrors the experience of leading AI portals (Claude, ChatGPT) with a persistent sidebar, multi-language support, and a clean chat-first design — but the underlying engine is fully customizable and deployable on your infrastructure.

---

## Platform Structure

```
MIMBAI/
├── index.html      ← Main portal (AI chat interface, 4 languages)
├── mimbai.html     ← Technical documentation & engine specs
├── logo.html       ← Brand identity & logo system
└── README.md       ← This file
```

---

## Features

### 🌐 Multi-Language Interface
Full UI translation across 4 languages — switchable live without page reload:
- 🇬🇧 English
- 🇳🇴 Norwegian (Norsk)
- 🇧🇷 Portuguese (Brasil)
- 🇪🇸 Spanish (Español)

### 🤖 AI-Powered Chat
- Direct Anthropic API integration (bring your own key)
- Model selector: Sonnet · Haiku · Opus
- Full conversation history in context
- Demo mode works without an API key

### 📦 6 Core Modules

| Module | Description |
|---|---|
| 🎙 **Oslo Meet** | Live meeting transcription, speaker ID, action item extraction |
| 📊 **Executive Portals** | C-level dashboards with natural language KPI queries |
| ✍️ **Content Engine** | Multi-format AI content generation & localization |
| 🔍 **Semantic Search** | pgvector embeddings for natural language document queries |
| ⚡ **AI Workflows** | n8n/Zapier-style AI pipeline automation |
| ⚖️ **RegTech** | Norwegian Finanstilsynet compliance monitoring |

---

## Tech Stack

| Layer | Technology |
|---|---|
| AI / LLM | Anthropic Claude (Sonnet 4, Haiku 4.5, Opus 4) |
| Embeddings | OpenAI `text-embedding-3-small` |
| Vector DB | Supabase + pgvector |
| Database | PostgreSQL via Supabase |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| Frontend | Vanilla HTML/CSS/JS — zero dependencies |
| Analytics | Google Analytics 4 |

---

## Getting Started

### Option A — Local (no server needed)
```bash
git clone https://github.com/your-org/MIMBAI.git
cd MIMBAI
open index.html   # or serve with any static server
```

Add your Anthropic API key in the input field at the bottom of the chat interface. The key is never stored on any server — it lives only in your browser session.

### Option B — Deploy to Vercel / Netlify
```bash
# Vercel
npx vercel deploy

# Netlify
npx netlify deploy --dir=.
```

### Option C — Supabase Edge Functions (full backend)
See [`mimbai.html`](mimbai.html) for the complete backend architecture and API endpoint documentation.

---

## Environment Variables (backend mode)

```env
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_KEY=eyJ...
```

---

## Roadmap

- [ ] Voice input for Oslo Meet (WebSpeech API)
- [ ] Persistent chat history via Supabase
- [ ] Multi-tenant workspace support
- [ ] RegTech API connectors (Finanstilsynet live data)
- [ ] Mobile app (React Native)
- [ ] SSO / Enterprise Auth

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">
  <strong>&lt;/&gt; Digital Solutions</strong><br/>
  <em>Building intelligent infrastructure</em>
</div>
