# AI Meeting Assistant — Project Instructions

## Project

Build the AI-powered meeting assistant described in:

docs/problem-statement.pdf

This is an Inter IIT Tech Meet ML Problem Statement.

The project must satisfy the official problem statement exactly.

---

## Core Pipeline

The system must implement:

Audio
→ Speech-to-Text
→ Raw Transcript
→ LLM #1: Domain-Aware Transcript Refinement
→ Refined Transcript
→ LLM #2: Meeting Documentation
→ Structured Meeting Record
→ Interactive UI
→ Downloadable Outputs

LLM #1 and LLM #2 MUST be separate processing stages.

---

## Critical Accuracy Rules

Never invent information.

Never hallucinate:

- names
- numbers
- decisions
- task owners
- deadlines
- commitments

If an owner is not explicitly stated:

owner = null / unspecified

If a deadline is not explicitly stated:

deadline = null / unspecified

Never convert:

proposal → decision

discussion → decision

possibility → commitment

suggestion → assigned task

---

## Transcript Refinement

The refinement model may correct:

- speech recognition errors
- technical terminology
- acronyms
- product names
- company names
- programming languages
- frameworks
- databases
- mathematical terminology

It must preserve:

- meaning
- names
- numbers
- negations
- uncertainty
- questions
- commitments
- speaker intent

It must NOT summarize or substantially rewrite the transcript.

---

## Architecture

Frontend:

Next.js
React
Tailwind CSS

Backend:

Python
FastAPI

AI pipeline:

Speech-to-text
LLM #1
LLM #2

---

## Development Rules

1. Work incrementally.
2. Do not implement the entire project in one step.
3. Before major changes, inspect the existing repository.
4. Do not modify unrelated files.
5. Keep services modular.
6. Keep prompts in dedicated prompt files.
7. Use environment variables for secrets.
8. Never hardcode API keys.
9. Add validation for model outputs.
10. Run tests after meaningful changes.
11. Do not claim something works unless it has been tested.
12. Prefer simple reliable solutions over unnecessary frameworks.

---

## AI Pipeline Rules

Raw transcript must always be retained.

Refined transcript must always be retained.

LLM #2 must receive the refined transcript.

The final record must be structured and machine-readable.

Human-readable output and machine-readable output must represent the same decisions and tasks.

---

## Git Rules

Make small, meaningful commits.

Examples:

feat: add speech transcription
feat: add transcript refinement
feat: add meeting analysis
feat: connect processing pipeline
feat: add meeting results UI
fix: prevent hallucinated task owners

Do not make giant unrelated commits.

---

## Priority

Priority order:

1. Correctness
2. Reliability
3. End-to-end functionality
4. Grounded outputs
5. Evaluation performance
6. UI quality
7. Optional features

Do not sacrifice AI accuracy for unnecessary UI features.