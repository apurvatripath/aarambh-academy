# Aarambh Academy

A fictional Pune coaching-centre lead-generation website built as a reusable portfolio demonstration.

The responsive website includes a demonstration enquiry flow. The server validates fictional submissions and forwards them to a secured n8n workflow for lead scoring, classification, draft follow-up generation, deduplication, and private Google Sheets storage.

No real coaching, admissions, counselling, or messaging service is offered. Use fictional test details only. Generated follow-ups remain drafts and are never automatically sent.

## Environment

Create an ignored `.env.local` file with:

```text
N8N_WEBHOOK_URL=
N8N_WEBHOOK_SECRET=
```

Keep both values out of documentation and source control. `.env.example` contains only the required blank variable names.

## Local development

```powershell
npm.cmd run dev
```

## Verification

```powershell
npm.cmd run lint
npm.cmd run build
```

The n8n workflow and Google Sheet are external systems and are not stored in this repository.
