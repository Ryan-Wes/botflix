# 🎬 BotFlix — Sistema de Recomendação com IA e n8n

O **BotFlix** é um sistema de recomendação de filmes orientado a automação, projetado para demonstrar integração prática entre **Inteligência Artificial**, **orquestração de workflows** e **APIs externas**.

A aplicação utiliza o **n8n como camada central de inteligência e orquestração**, desacoplando a interface da lógica de decisão e integração.

---

## 🔎 Problema que o projeto resolve

Em aplicações tradicionais, a lógica de negócio e chamadas de API costumam ficar acopladas ao frontend.

O BotFlix propõe uma abordagem diferente:

> Centralizar a inteligência e a orquestração fora da interface, utilizando um motor de automação como núcleo do sistema.

---

## 🧠 Arquitetura

O n8n não é utilizado apenas como relay de webhook.  
Ele é o **motor principal da aplicação**.

### 🔁 Fluxo do sistema

Frontend
→ Webhook (n8n)
→ AI Agent
→ Saída estruturada em JSON
→ API do TMDB (consulta localizada)
→ Renderização no Frontend


---

## 🤖 Camada de IA

Dentro do n8n, um AI Agent:

- Interpreta a intenção em linguagem natural  
- Extrai o título do filme em formato estruturado  
- Retorna JSON determinístico  
- Mantém separação entre interpretação e exibição  

Isso garante separação clara entre:

- **Interpretação (IA)**
- **Recuperação de dados (API externa)**
- **Apresentação (Frontend)**

---

## 🌍 Suporte Multilíngue

O sistema:

- Detecta automaticamente o idioma da entrada  
- Propaga o idioma no workflow  
- Consulta a API do TMDB com parâmetro `language`  
- Retorna título e descrição localizados  

### Idiomas suportados

- 🇧🇷 Português (pt-BR)  
- 🇺🇸 Inglês (en-US)  
- 🇪🇸 Espanhol (es-ES)  
- 🇫🇷 Francês (fr-FR)  

O idioma é tratado como **metadado estruturado dentro do fluxo de automação**.

---

## 🔁 Por que usar n8n?

O n8n atua como:

- 🔄 Orquestrador de workflows  
- 🤖 Camada de integração com IA  
- 🌐 Middleware para APIs externas  
- 🔌 Backbone de automação  

### Benefícios da arquitetura adotada

- ✔ Arquitetura desacoplada  
- ✔ Facilidade de manutenção  
- ✔ Substituição simples do modelo de IA  
- ✔ Escalabilidade da lógica de negócio  
- ✔ Redução da complexidade no frontend  

A interface se torna um **cliente fino**.  
A inteligência permanece na **camada de automação**.

---

## 🛠️ Stack Tecnológica

### Frontend

- HTML5  
- CSS3 (tema roxo personalizado)  
- JavaScript Vanilla  

### Automação e IA

- n8n (Cloud)  
- AI Agent (LLM via n8n)  
- API do TMDB  

---

## 📈 Decisões Técnicas

- IA retorna JSON estruturado (evita parsing frágil)  
- Idioma tratado como variável explícita no workflow  
- Consulta à API com parâmetro de localização  
- Design stateless  
- Separação clara de responsabilidades  

---

## 🚀 Evoluções Futuras

- Ranking de múltiplos resultados  
- Memória de preferências do usuário  
- Detecção de idioma baseada em IA  
- Workflows adicionais para analytics  
- Evolução para arquitetura SaaS com variáveis de ambiente e controle de segredos  

---

## 🎯 Objetivo do Projeto

Demonstrar domínio prático em:

- Integração com IA  
- Orquestração de workflows  
- Automação com n8n  
- Arquitetura desacoplada  
- Integração com APIs externas  

O BotFlix não é apenas um projeto de interface.  
É um experimento arquitetural que posiciona o **n8n como camada central de inteligência em aplicações orientadas a IA**.


----------------------------------------------------------------------------------------------------------------------------------


# 🎬 BotFlix — AI-Driven Movie Recommendation System Powered by n8n

BotFlix is an automation-driven movie recommendation system designed to demonstrate practical integration between **Artificial Intelligence**, **workflow orchestration**, and **external APIs**.

The application uses **n8n as the central intelligence and orchestration layer**, decoupling the UI from decision logic and API integration.

---

# 🇧🇷 Versão em Português

## 🎬 BotFlix — Sistema de Recomendação com IA e n8n

O **BotFlix** é um sistema de recomendação de filmes orientado a automação, projetado para demonstrar integração prática entre **Inteligência Artificial**, **orquestração de workflows** e **APIs externas**.

A aplicação utiliza o **n8n como camada central de inteligência e orquestração**, desacoplando a interface da lógica de decisão e integração.

---

## 🔎 Problema que o projeto resolve

Em aplicações tradicionais, a lógica de negócio e chamadas de API costumam ficar acopladas ao frontend.

O BotFlix propõe uma abordagem diferente:

> Centralizar a inteligência e a orquestração fora da interface, utilizando um motor de automação como núcleo do sistema.

---

## 🧠 Arquitetura

O n8n não é utilizado apenas como relay de webhook.  
Ele é o **motor principal da aplicação**.


### 🔁 Fluxo do sistema

Frontend
→ Webhook (n8n)
→ AI Agent
→ Saída estruturada em JSON
→ API do TMDB (consulta localizada)
→ Renderização no Frontend



---

## 🤖 Camada de IA

Dentro do n8n, um AI Agent:

- Interpreta a intenção em linguagem natural  
- Extrai o título do filme em formato estruturado  
- Retorna JSON determinístico  
- Mantém separação entre interpretação e exibição  

Isso garante separação clara entre:

- **Interpretação (IA)**
- **Recuperação de dados (API externa)**
- **Apresentação (Frontend)**

---

## 🌍 Suporte Multilíngue

O sistema:

- Detecta automaticamente o idioma da entrada  
- Propaga o idioma no workflow  
- Consulta a API do TMDB com parâmetro `language`  
- Retorna título e descrição localizados  

### Idiomas suportados

- 🇧🇷 Português (pt-BR)  
- 🇺🇸 Inglês (en-US)  
- 🇪🇸 Espanhol (es-ES)  
- 🇫🇷 Francês (fr-FR)  

O idioma é tratado como **metadado estruturado dentro do fluxo de automação**.

---

## 🔁 Por que usar n8n?

O n8n atua como:

- 🔄 Orquestrador de workflows  
- 🤖 Camada de integração com IA  
- 🌐 Middleware para APIs externas  
- 🔌 Backbone de automação  

### Benefícios da arquitetura adotada

- ✔ Arquitetura desacoplada  
- ✔ Facilidade de manutenção  
- ✔ Substituição simples do modelo de IA  
- ✔ Escalabilidade da lógica de negócio  
- ✔ Redução da complexidade no frontend  

A interface se torna um **cliente fino**.  
A inteligência permanece na **camada de automação**.

---

# 🇺🇸 English Version

## 🎬 BotFlix — AI-Powered Recommendation System Orchestrated with n8n

BotFlix is an automation-first movie recommendation system designed to demonstrate real-world integration between AI, workflow orchestration, and external APIs.

Instead of embedding business logic in the frontend, the system centralizes intelligence inside **n8n**, which acts as the orchestration engine.

---

## 🔎 Problem Approach

Traditional web applications often tightly couple UI and backend logic.

BotFlix explores a different model:

> Move intelligence and orchestration outside the frontend and into a workflow automation engine.

---

## 🧠 Architecture Overview

n8n is not used as a simple webhook trigger.  
It acts as the **core execution engine** of the system.

### 🔁 System Flow

Frontend
→ n8n Webhook
→ AI Agent
→ Structured JSON output
→ TMDB API (localized request)
→ Frontend rendering

Frontend
→ n8n Webhook
→ AI Agent
→ Structured JSON output
→ TMDB API (localized request)
→ Frontend rendering


---

## 🤖 AI Layer

Inside n8n, an AI Agent:

- Interprets natural language user intent  
- Extracts a structured movie title  
- Returns deterministic JSON output  
- Maintains separation between interpretation and presentation  

This enforces clear separation between:

- **Interpretation (AI)**
- **Data retrieval (External API)**
- **Presentation (Frontend)**

---

## 🌍 Multilingual Handling

The system:

- Detects the language of user input  
- Propagates language metadata through the workflow  
- Queries TMDB using the `language` parameter  
- Returns localized title and overview  

Supported languages:

- Portuguese (pt-BR)  
- English (en-US)  
- Spanish (es-ES)  
- French (fr-FR)  

Language is treated as structured metadata within the automation workflow.

---

## 🔁 Why n8n?

n8n serves as:

- Workflow orchestration engine  
- AI integration middleware  
- API abstraction layer  
- Automation backbone  

### Architectural advantages

- ✔ Decoupled system design  
- ✔ Replaceable AI provider  
- ✔ Extensible workflow logic  
- ✔ Low frontend complexity  
- ✔ Clear separation of concerns  

The frontend becomes a thin client.  
The intelligence lives in the automation layer.

---

## 🛠️ Tech Stack

### Frontend

- HTML5  
- CSS3  
- Vanilla JavaScript  

### Automation & AI

- n8n (Cloud)  
- AI Agent (LLM via n8n)  
- TMDB API  

---

## 🎯 Project Goal

To demonstrate practical capability in:

- AI integration  
- Workflow automation  
- System orchestration  
- API-driven architecture  
- Clean separation between UI and logic  

BotFlix is not just a frontend project.  
It is an architectural proof-of-concept showcasing **n8n as the central intelligence layer for AI-driven systems**.


### 🔁 Fluxo do sistema
