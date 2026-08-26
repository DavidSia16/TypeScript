# 🍽️ Restaurant Finder (TypeScript)

Projeto prático desenvolvido durante os estudos de **TypeScript** no Codecademy. A aplicação faz a filtragem dinâmica de uma lista de restaurantes com base em critérios como faixa de preço, tempo máximo de entrega, distância e horário de funcionamento em tempo real.

---

## 🎯 Funcionalidades

O script analisa uma lista de restaurantes e aplica os seguintes filtros:

- **Faixa de Preço:** Filtra restaurantes até a faixa de preço definida (baseado na quantidade de símbolos `$`).
- **Tempo de Entrega:** Ignora restaurantes que excedem o tempo limite de entrega (em minutos).
- **Distância Máxima:** Restringe os resultados à distância máxima especificada (em km).
- **Horário de Funcionamento:** Verifica a hora atual (`new Date().getHours()`) e remove os estabelecimentos fechados no momento.

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript:** Tipagem estática e manipulação de arrays.
- **Node.js:** Ambiente de execução.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/DavidSia16/TypeScript.git](https://github.com/DavidSia16/TypeScript.git)
   cd TypeScript
